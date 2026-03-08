#!/usr/bin/env npx tsx
/**
 * Phase 3 production verification: for every rewritten image reference,
 * fetch the corresponding page from the live site and confirm the same
 * asset URL appears in the rendered HTML.
 *
 * The production transform converts image paths to /support-assets/{encoded}
 * URLs. This script:
 *   1. Reads phase3-changes.tsv (source file, old path, new path, asset filename)
 *   2. For each asset filename, computes the expected /support-assets/ URL
 *      (using the same encodeAssetFilename logic as production)
 *   3. Fetches the production page HTML
 *   4. Verifies the expected asset URL appears in the page
 *
 * Usage:
 *   npx tsx scripts/phase3-verify-vs-production.ts
 *   BASE_URL=https://staging-new.saleae.com npx tsx scripts/phase3-verify-vs-production.ts
 */

import * as fs from "fs";
import * as path from "path";

const BASE_URL = process.env.BASE_URL || "https://www.saleae.com";
const REPO_ROOT = path.resolve(process.cwd());
const CONCURRENCY = 5;
const DELAY_MS = 200;

// ---------------------------------------------------------------------------
// 1. Replicate production's encodeAssetFilename logic
// ---------------------------------------------------------------------------

function encodeAssetFilename(filename: string): string {
  if (filename.includes("%")) {
    return "b64-" + Buffer.from(filename).toString("base64url");
  }
  return encodeURIComponent(filename);
}

// ---------------------------------------------------------------------------
// 2. Load the changes TSV
// ---------------------------------------------------------------------------

const changesPath = path.join(REPO_ROOT, "scripts/phase3-changes.tsv");
const lines = fs.readFileSync(changesPath, "utf-8").trim().split("\n");
const entries = lines.slice(1).map((line) => {
  const [file, type, oldPath, newPath, assetFilename] = line.split("\t");
  return { file, type, oldPath, newPath, assetFilename };
});

console.log(`Loaded ${entries.length} image changes from phase3-changes.tsv`);
console.log(`Production site: ${BASE_URL}\n`);

// ---------------------------------------------------------------------------
// 3. Group by source page, compute expected asset URLs
// ---------------------------------------------------------------------------

interface ExpectedAsset {
  type: string;
  oldPath: string;
  assetFilename: string;
  expectedUrl: string;
}

const pageMap = new Map<string, ExpectedAsset[]>();

for (const entry of entries) {
  const sourceSlug = entry.file.replace(/\.md$/, "");

  // Clean backslash escapes from asset filename (same as production resolveAssetPath)
  const cleanFilename = entry.assetFilename.replace(
    /\\([_*[\]()~`>#+\-.!|{}])/g,
    "$1",
  );

  const encodedFilename = encodeAssetFilename(cleanFilename);
  const expectedUrl = `/support-assets/${encodedFilename}`;

  if (!pageMap.has(sourceSlug)) {
    pageMap.set(sourceSlug, []);
  }
  pageMap.get(sourceSlug)!.push({
    type: entry.type,
    oldPath: entry.oldPath,
    assetFilename: cleanFilename,
    expectedUrl,
  });
}

// Deduplicate expected URLs per page (same asset might be referenced multiple times)
for (const [slug, assets] of pageMap) {
  const seen = new Set<string>();
  const deduped = assets.filter((a) => {
    if (seen.has(a.expectedUrl)) return false;
    seen.add(a.expectedUrl);
    return true;
  });
  pageMap.set(slug, deduped);
}

const totalUniqueAssets = Array.from(pageMap.values()).reduce(
  (s, a) => s + a.length,
  0,
);
console.log(`Unique pages to check: ${pageMap.size}`);
console.log(`Unique asset URLs to verify: ${totalUniqueAssets}\n`);

// ---------------------------------------------------------------------------
// 4. Fetch pages and verify
// ---------------------------------------------------------------------------

interface Result {
  page: string;
  status: "pass" | "fail" | "fetch-error";
  totalAssets: number;
  matchedAssets: number;
  missingAssets: ExpectedAsset[];
  httpStatus?: number;
  error?: string;
}

function extractAssetUrls(html: string): Set<string> {
  const urls = new Set<string>();
  // Match src="/support-assets/..." and href="/support-assets/..."
  const regex = /(?:src|href)="(\/support-assets\/[^"]+)"/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    urls.add(m[1]);
  }
  return urls;
}

async function checkPage(
  sourceSlug: string,
  expectedAssets: ExpectedAsset[],
): Promise<Result> {
  const pageUrl = `${BASE_URL}/support/${sourceSlug}`;

  try {
    const resp = await fetch(pageUrl, {
      headers: { "User-Agent": "saleae-image-verifier/1.0" },
      redirect: "follow",
    });

    if (!resp.ok) {
      return {
        page: sourceSlug,
        status: "fetch-error",
        totalAssets: expectedAssets.length,
        matchedAssets: 0,
        missingAssets: expectedAssets,
        httpStatus: resp.status,
      };
    }

    const html = await resp.text();
    const productionUrls = extractAssetUrls(html);

    let matched = 0;
    const missing: ExpectedAsset[] = [];

    for (const asset of expectedAssets) {
      if (productionUrls.has(asset.expectedUrl)) {
        matched++;
      } else {
        // Try case-insensitive and decoded comparison
        const decodedExpected = decodeURIComponent(asset.expectedUrl).toLowerCase();
        let found = false;
        for (const prodUrl of productionUrls) {
          try {
            if (decodeURIComponent(prodUrl).toLowerCase() === decodedExpected) {
              found = true;
              break;
            }
          } catch {
            // decodeURIComponent can fail on malformed strings
          }
        }
        if (found) {
          matched++;
        } else {
          missing.push(asset);
        }
      }
    }

    return {
      page: sourceSlug,
      status: missing.length === 0 ? "pass" : "fail",
      totalAssets: expectedAssets.length,
      matchedAssets: matched,
      missingAssets: missing,
      httpStatus: resp.status,
    };
  } catch (err: any) {
    return {
      page: sourceSlug,
      status: "fetch-error",
      totalAssets: expectedAssets.length,
      matchedAssets: 0,
      missingAssets: expectedAssets,
      error: err.message,
    };
  }
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const pages = Array.from(pageMap.entries());
  const results: Result[] = [];

  for (let i = 0; i < pages.length; i += CONCURRENCY) {
    const batch = pages.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(
      batch.map(([slug, assets]) => checkPage(slug, assets)),
    );
    results.push(...batchResults);

    const done = Math.min(i + CONCURRENCY, pages.length);
    const passCount = results.filter((r) => r.status === "pass").length;
    process.stdout.write(
      `\r  Checked ${done}/${pages.length} pages (${passCount} pass)`,
    );

    if (i + CONCURRENCY < pages.length) {
      await sleep(DELAY_MS);
    }
  }

  console.log("\n");

  // ---------------------------------------------------------------------------
  // 5. Report
  // ---------------------------------------------------------------------------

  const passed = results.filter((r) => r.status === "pass");
  const failed = results.filter((r) => r.status === "fail");
  const fetchErrors = results.filter((r) => r.status === "fetch-error");

  const totalChecked = results.reduce((s, r) => s + r.totalAssets, 0);
  const totalMatched = results.reduce((s, r) => s + r.matchedAssets, 0);

  console.log("=== Phase 3: Production Image Verification ===\n");
  console.log(`Pages checked:         ${results.length}`);
  console.log(`Pages passed:          ${passed.length}`);
  console.log(`Pages failed:          ${failed.length}`);
  console.log(`Pages fetch error:     ${fetchErrors.length}`);
  console.log(`Asset refs checked:    ${totalChecked}`);
  console.log(`Asset refs matched:    ${totalMatched}`);
  console.log(`Asset refs missing:    ${totalChecked - totalMatched}`);

  if (fetchErrors.length > 0) {
    console.log("\n--- Fetch Errors ---");
    for (const r of fetchErrors) {
      console.log(
        `  ${r.page}: HTTP ${r.httpStatus || "N/A"} ${r.error || ""}`,
      );
    }
  }

  if (failed.length > 0) {
    console.log("\n--- Failed Pages ---");
    for (const r of failed) {
      console.log(
        `\n  ${r.page} (${r.matchedAssets}/${r.totalAssets} matched)`,
      );
      for (const m of r.missingAssets) {
        console.log(`    MISSING [${m.type}]`);
        console.log(`      old ref: ${m.oldPath}`);
        console.log(`      asset: ${m.assetFilename}`);
        console.log(`      expected: ${m.expectedUrl}`);
      }
    }
  }

  // Save results
  const reportLines = [
    "page\tstatus\thttp\tassets_total\tassets_matched\tassets_missing",
  ];
  for (const r of results) {
    reportLines.push(
      `${r.page}\t${r.status}\t${r.httpStatus || ""}\t${r.totalAssets}\t${r.matchedAssets}\t${r.missingAssets.length}`,
    );
  }
  fs.writeFileSync(
    path.join(REPO_ROOT, "scripts/phase3-production-results.tsv"),
    reportLines.join("\n") + "\n",
  );

  console.log("\n");
  if (failed.length === 0 && fetchErrors.length === 0) {
    console.log(
      `PASS: All ${totalMatched} rewritten image refs match production (${results.length} pages)`,
    );
    process.exit(0);
  } else {
    console.log("FAIL: mismatches detected");
    process.exit(1);
  }
}

main();
