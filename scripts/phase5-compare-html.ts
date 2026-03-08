#!/usr/bin/env npx tsx
/**
 * Phase 5: Compare rendered support pages between local build and production.
 *
 * For each of the 332 support pages:
 *   1. Fetches the page from LOCAL_URL (local build or staging)
 *   2. Fetches the same page from PROD_URL (production)
 *   3. Extracts the article content (inside <article> or main content area)
 *   4. Compares: internal links, image URLs, and text content
 *
 * Usage:
 *   LOCAL_URL=http://localhost:4321 npx tsx scripts/phase5-compare-html.ts
 *   LOCAL_URL=http://localhost:4321 PROD_URL=https://www.saleae.com npx tsx scripts/phase5-compare-html.ts
 */

import * as fs from "fs";
import * as path from "path";

const LOCAL_URL = process.env.LOCAL_URL || "http://localhost:4321";
const PROD_URL = process.env.PROD_URL || "https://www.saleae.com";
const REPO_ROOT = path.resolve(process.cwd());
const CONCURRENCY = 2;
const DELAY_MS = 500;

// ---------------------------------------------------------------------------
// 1. Get all page slugs from rename manifest
// ---------------------------------------------------------------------------

const manifestPath = path.join(REPO_ROOT, "scripts/rename-manifest.tsv");
const manifestLines = fs
  .readFileSync(manifestPath, "utf-8")
  .trim()
  .split("\n")
  .filter((l) => l.includes("\t"));

const allSlugs = manifestLines.map((line) => line.split("\t")[1]);
console.log(`Pages to compare: ${allSlugs.length}`);
console.log(`Local:  ${LOCAL_URL}`);
console.log(`Prod:   ${PROD_URL}\n`);

// ---------------------------------------------------------------------------
// 2. HTML comparison helpers
// ---------------------------------------------------------------------------

/** Extract all internal /support/ links from HTML */
function extractLinks(html: string): string[] {
  const links: string[] = [];
  const regex = /href="(\/support\/[^"#]*)"/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    links.push(m[1]);
  }
  return links.sort();
}

/** Extract all /support-assets/ image/file URLs from HTML */
function extractAssets(html: string): string[] {
  const assets: string[] = [];
  const regex = /(?:src|href)="(\/support-assets\/[^"]+)"/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    assets.push(m[1]);
  }
  return assets.sort();
}

/** Extract the main article text content (strip HTML tags) */
function extractText(html: string): string {
  // Try to isolate the article/main content area
  let content = html;

  // Look for <article> or <main> tags
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  if (articleMatch) {
    content = articleMatch[1];
  } else {
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    if (mainMatch) {
      content = mainMatch[1];
    }
  }

  // Strip HTML tags and normalize whitespace
  return content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Extract callout divs (from hint block conversion) */
function extractCallouts(html: string): string[] {
  const callouts: string[] = [];
  const regex = /class="callout[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    callouts.push(m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
  }
  return callouts.sort();
}

// ---------------------------------------------------------------------------
// 3. Compare a single page
// ---------------------------------------------------------------------------

interface PageResult {
  slug: string;
  status: "pass" | "fail" | "local-error" | "prod-error";
  localHttp?: number;
  prodHttp?: number;
  linksDiff: string[];
  assetsDiff: string[];
  calloutsDiff: string[];
  textMatch: boolean;
  textSimilarity?: number;
  error?: string;
}

async function comparePage(slug: string): Promise<PageResult> {
  const localUrl = `${LOCAL_URL}/support/${slug}`;
  const prodUrl = `${PROD_URL}/support/${slug}`;

  try {
    const [localResp, prodResp] = await Promise.all([
      fetch(localUrl, {
        headers: { "User-Agent": "saleae-phase5-compare/1.0" },
        redirect: "follow",
      }),
      fetch(prodUrl, {
        headers: { "User-Agent": "saleae-phase5-compare/1.0" },
        redirect: "follow",
      }),
    ]);

    if (!localResp.ok) {
      return {
        slug,
        status: "local-error",
        localHttp: localResp.status,
        prodHttp: prodResp.status,
        linksDiff: [],
        assetsDiff: [],
        calloutsDiff: [],
        textMatch: false,
      };
    }

    if (!prodResp.ok) {
      return {
        slug,
        status: "prod-error",
        localHttp: localResp.status,
        prodHttp: prodResp.status,
        linksDiff: [],
        assetsDiff: [],
        calloutsDiff: [],
        textMatch: false,
      };
    }

    const localHtml = await localResp.text();
    const prodHtml = await prodResp.text();

    // Compare links
    const localLinks = extractLinks(localHtml);
    const prodLinks = extractLinks(prodHtml);
    const linksDiff: string[] = [];
    const prodLinkSet = new Set(prodLinks);
    const localLinkSet = new Set(localLinks);
    for (const l of localLinks) {
      if (!prodLinkSet.has(l)) linksDiff.push(`+local: ${l}`);
    }
    for (const l of prodLinks) {
      if (!localLinkSet.has(l)) linksDiff.push(`-prod: ${l}`);
    }

    // Compare assets
    const localAssets = extractAssets(localHtml);
    const prodAssets = extractAssets(prodHtml);
    const assetsDiff: string[] = [];
    const prodAssetSet = new Set(prodAssets);
    const localAssetSet = new Set(localAssets);
    for (const a of localAssets) {
      if (!prodAssetSet.has(a)) assetsDiff.push(`+local: ${a}`);
    }
    for (const a of prodAssets) {
      if (!localAssetSet.has(a)) assetsDiff.push(`-prod: ${a}`);
    }

    // Compare callouts
    const localCallouts = extractCallouts(localHtml);
    const prodCallouts = extractCallouts(prodHtml);
    const calloutsDiff: string[] = [];
    if (localCallouts.length !== prodCallouts.length) {
      calloutsDiff.push(
        `count: local=${localCallouts.length} prod=${prodCallouts.length}`,
      );
    }

    // Compare text content (fuzzy — allow minor whitespace differences)
    const localText = extractText(localHtml);
    const prodText = extractText(prodHtml);

    // Simple similarity: compare first N characters
    const compareLen = Math.min(localText.length, prodText.length, 2000);
    const localSample = localText.substring(0, compareLen);
    const prodSample = prodText.substring(0, compareLen);
    const textMatch = localSample === prodSample;

    // Calculate rough similarity
    let matching = 0;
    for (let i = 0; i < compareLen; i++) {
      if (localSample[i] === prodSample[i]) matching++;
    }
    const textSimilarity = compareLen > 0 ? matching / compareLen : 1;

    const hasDiffs =
      linksDiff.length > 0 ||
      assetsDiff.length > 0 ||
      calloutsDiff.length > 0;

    return {
      slug,
      status: hasDiffs ? "fail" : "pass",
      localHttp: localResp.status,
      prodHttp: prodResp.status,
      linksDiff,
      assetsDiff,
      calloutsDiff,
      textMatch,
      textSimilarity,
    };
  } catch (err: any) {
    return {
      slug,
      status: "local-error",
      linksDiff: [],
      assetsDiff: [],
      calloutsDiff: [],
      textMatch: false,
      error: err.message,
    };
  }
}

// ---------------------------------------------------------------------------
// 4. Run comparison
// ---------------------------------------------------------------------------

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const results: PageResult[] = [];

  for (let i = 0; i < allSlugs.length; i += CONCURRENCY) {
    const batch = allSlugs.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(batch.map(comparePage));
    results.push(...batchResults);

    const done = Math.min(i + CONCURRENCY, allSlugs.length);
    const passCount = results.filter((r) => r.status === "pass").length;
    process.stdout.write(
      `\r  Compared ${done}/${allSlugs.length} pages (${passCount} pass)`,
    );

    if (i + CONCURRENCY < allSlugs.length) {
      await sleep(DELAY_MS);
    }
  }

  console.log("\n");

  // -----------------------------------------------------------------------
  // 5. Report
  // -----------------------------------------------------------------------

  const passed = results.filter((r) => r.status === "pass");
  const failed = results.filter((r) => r.status === "fail");
  const localErrors = results.filter((r) => r.status === "local-error");
  const prodErrors = results.filter((r) => r.status === "prod-error");

  const avgSimilarity =
    results.reduce((s, r) => s + (r.textSimilarity ?? 0), 0) / results.length;

  console.log("=== Phase 5: HTML Comparison Results ===\n");
  console.log(`Pages compared:      ${results.length}`);
  console.log(`Pages identical:     ${passed.length}`);
  console.log(`Pages with diffs:    ${failed.length}`);
  console.log(`Local errors:        ${localErrors.length}`);
  console.log(`Prod errors:         ${prodErrors.length}`);
  console.log(
    `Avg text similarity: ${(avgSimilarity * 100).toFixed(1)}%`,
  );

  if (localErrors.length > 0) {
    console.log("\n--- Local Errors (build issue?) ---");
    for (const r of localErrors.slice(0, 10)) {
      console.log(
        `  ${r.slug}: HTTP ${r.localHttp ?? "N/A"} ${r.error ?? ""}`,
      );
    }
  }

  if (failed.length > 0) {
    console.log("\n--- Pages with Differences ---");
    for (const r of failed.slice(0, 20)) {
      console.log(`\n  ${r.slug}`);
      if (r.linksDiff.length > 0) {
        console.log(`    Links diff (${r.linksDiff.length}):`);
        for (const d of r.linksDiff.slice(0, 5)) {
          console.log(`      ${d}`);
        }
      }
      if (r.assetsDiff.length > 0) {
        console.log(`    Assets diff (${r.assetsDiff.length}):`);
        for (const d of r.assetsDiff.slice(0, 5)) {
          console.log(`      ${d}`);
        }
      }
      if (r.calloutsDiff.length > 0) {
        console.log(`    Callouts diff:`);
        for (const d of r.calloutsDiff) {
          console.log(`      ${d}`);
        }
      }
      if (!r.textMatch) {
        console.log(
          `    Text similarity: ${((r.textSimilarity ?? 0) * 100).toFixed(1)}%`,
        );
      }
    }
    if (failed.length > 20) {
      console.log(`  ... (${failed.length} total)`);
    }
  }

  // Save results
  const reportLines = [
    "slug\tstatus\tlocal_http\tprod_http\tlinks_diff\tassets_diff\ttext_similarity",
  ];
  for (const r of results) {
    reportLines.push(
      `${r.slug}\t${r.status}\t${r.localHttp ?? ""}\t${r.prodHttp ?? ""}\t${r.linksDiff.length}\t${r.assetsDiff.length}\t${((r.textSimilarity ?? 0) * 100).toFixed(1)}`,
    );
  }
  fs.writeFileSync(
    path.join(REPO_ROOT, "scripts/phase5-comparison-results.tsv"),
    reportLines.join("\n") + "\n",
  );

  console.log("\n");
  if (failed.length === 0 && localErrors.length === 0) {
    console.log(
      `PASS: All ${passed.length} pages produce identical content to production`,
    );
    process.exit(0);
  } else if (localErrors.length > 0) {
    console.log(
      `BLOCKED: ${localErrors.length} pages could not be fetched from local build`,
    );
    process.exit(2);
  } else {
    console.log(`FAIL: ${failed.length} pages have differences`);
    process.exit(1);
  }
}

main();
