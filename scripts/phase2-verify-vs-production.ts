#!/usr/bin/env npx tsx
/**
 * Phase 2 production verification: for every rewritten link, fetch the
 * corresponding page from the live production site and confirm the same
 * link target appears in the rendered HTML.
 *
 * How it works:
 *   1. Reads phase2-changes.tsv (source file, old href, new href, resolved old slug)
 *   2. Groups changes by source page
 *   3. For each source page, computes:
 *        - The expected target URL slug by resolving the NEW relative href
 *        - The production page URL: /support/{sourceUrlSlug}
 *   4. Fetches the production page HTML
 *   5. Extracts all href="/support/..." links from the HTML
 *   6. Verifies our expected target is among them
 *
 * Usage:
 *   npx tsx scripts/phase2-verify-vs-production.ts
 *   BASE_URL=https://staging-new.saleae.com npx tsx scripts/phase2-verify-vs-production.ts
 */

import * as fs from "fs";
import * as path from "path";

const BASE_URL = process.env.BASE_URL || "https://www.saleae.com";
const REPO_ROOT = path.resolve(process.cwd());
const CONCURRENCY = 5;
const DELAY_MS = 200; // ms between batches to avoid hammering

// ---------------------------------------------------------------------------
// 1. Load the changes TSV
// ---------------------------------------------------------------------------

const changesPath = path.join(REPO_ROOT, "scripts/phase2-changes.tsv");
const lines = fs.readFileSync(changesPath, "utf-8").trim().split("\n");
const header = lines[0];
const entries = lines.slice(1).map((line) => {
  const [file, type, oldHref, newHref, resolvedOldSlug] = line.split("\t");
  return { file, type, oldHref, newHref, resolvedOldSlug };
});

console.log(`Loaded ${entries.length} link changes from phase2-changes.tsv`);
console.log(`Production site: ${BASE_URL}\n`);

// ---------------------------------------------------------------------------
// 2. Group by source page and compute expected targets
// ---------------------------------------------------------------------------

interface ExpectedLink {
  newHref: string;
  oldHref: string;
  type: string;
  expectedTargetSlug: string;
  resolvedOldSlug: string;
}

const pageMap = new Map<string, ExpectedLink[]>();

for (const entry of entries) {
  const sourceSlug = entry.file.replace(/\.md$/, "");
  const sourceDir = path.posix.dirname(sourceSlug);

  // Resolve the NEW relative href to get the target URL slug
  // Strip "mention" suffix, anchor, and .md extension
  const hrefPath = entry.newHref
    .replace(/\s+"mention"$/, "")
    .split("#")[0]
    .replace(/\.md$/, "");
  const targetSlug = path.posix.normalize(path.posix.join(sourceDir, hrefPath));

  if (!pageMap.has(sourceSlug)) {
    pageMap.set(sourceSlug, []);
  }
  pageMap.get(sourceSlug)!.push({
    newHref: entry.newHref,
    oldHref: entry.oldHref,
    type: entry.type,
    expectedTargetSlug: targetSlug,
    resolvedOldSlug: entry.resolvedOldSlug,
  });
}

console.log(`Unique pages to check: ${pageMap.size}\n`);

// ---------------------------------------------------------------------------
// 3. Fetch pages and verify
// ---------------------------------------------------------------------------

interface Result {
  page: string;
  status: "pass" | "fail" | "fetch-error";
  totalLinks: number;
  matchedLinks: number;
  missingLinks: ExpectedLink[];
  httpStatus?: number;
  error?: string;
}

/** Extract all /support/ hrefs from HTML */
function extractSupportLinks(html: string): Set<string> {
  const links = new Set<string>();
  // Match href="/support/..." in any tag
  const hrefRegex = /href="(\/support\/[^"#]*)/g;
  let m;
  while ((m = hrefRegex.exec(html)) !== null) {
    // Normalize: remove trailing slash
    let href = m[1].replace(/\/$/, "");
    links.add(href);
  }
  return links;
}

async function checkPage(
  sourceSlug: string,
  expectedLinks: ExpectedLink[],
): Promise<Result> {
  const pageUrl = `${BASE_URL}/support/${sourceSlug}`;

  try {
    const resp = await fetch(pageUrl, {
      headers: { "User-Agent": "saleae-link-verifier/1.0" },
      redirect: "follow",
    });

    if (!resp.ok) {
      return {
        page: sourceSlug,
        status: "fetch-error",
        totalLinks: expectedLinks.length,
        matchedLinks: 0,
        missingLinks: expectedLinks,
        httpStatus: resp.status,
      };
    }

    const html = await resp.text();
    const productionLinks = extractSupportLinks(html);

    let matched = 0;
    const missing: ExpectedLink[] = [];

    for (const link of expectedLinks) {
      const expectedHref = `/support/${link.expectedTargetSlug}`;

      if (productionLinks.has(expectedHref)) {
        matched++;
      } else {
        // Sometimes production links may have slight differences
        // (trailing slash, different casing). Try normalized comparison.
        const normalized = expectedHref.toLowerCase();
        let found = false;
        for (const pl of productionLinks) {
          if (pl.toLowerCase() === normalized) {
            found = true;
            break;
          }
        }
        if (found) {
          matched++;
        } else {
          missing.push(link);
        }
      }
    }

    return {
      page: sourceSlug,
      status: missing.length === 0 ? "pass" : "fail",
      totalLinks: expectedLinks.length,
      matchedLinks: matched,
      missingLinks: missing,
      httpStatus: resp.status,
    };
  } catch (err: any) {
    return {
      page: sourceSlug,
      status: "fetch-error",
      totalLinks: expectedLinks.length,
      matchedLinks: 0,
      missingLinks: expectedLinks,
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

  // Process in batches
  for (let i = 0; i < pages.length; i += CONCURRENCY) {
    const batch = pages.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(
      batch.map(([slug, links]) => checkPage(slug, links)),
    );
    results.push(...batchResults);

    // Progress
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
  // 4. Report
  // ---------------------------------------------------------------------------

  const passed = results.filter((r) => r.status === "pass");
  const failed = results.filter((r) => r.status === "fail");
  const fetchErrors = results.filter((r) => r.status === "fetch-error");

  const totalLinksChecked = results.reduce((s, r) => s + r.totalLinks, 0);
  const totalMatched = results.reduce((s, r) => s + r.matchedLinks, 0);

  console.log("=== Phase 2: Production Link Verification ===\n");
  console.log(`Pages checked:       ${results.length}`);
  console.log(`Pages passed:        ${passed.length}`);
  console.log(`Pages failed:        ${failed.length}`);
  console.log(`Pages fetch error:   ${fetchErrors.length}`);
  console.log(`Links checked:       ${totalLinksChecked}`);
  console.log(`Links matched:       ${totalMatched}`);
  console.log(
    `Links missing:       ${totalLinksChecked - totalMatched}`,
  );

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
      console.log(`\n  ${r.page} (${r.matchedLinks}/${r.totalLinks} matched)`);
      for (const m of r.missingLinks) {
        console.log(`    MISSING [${m.type}]`);
        console.log(`      old: ${m.oldHref}`);
        console.log(`      new: ${m.newHref}`);
        console.log(`      expected target: /support/${m.expectedTargetSlug}`);
        console.log(`      resolved old slug: ${m.resolvedOldSlug}`);
      }
    }
  }

  // Save results
  const reportLines: string[] = [];
  reportLines.push(
    "page\tstatus\thttp\tlinks_total\tlinks_matched\tlinks_missing",
  );
  for (const r of results) {
    reportLines.push(
      `${r.page}\t${r.status}\t${r.httpStatus || ""}\t${r.totalLinks}\t${r.matchedLinks}\t${r.missingLinks.length}`,
    );
  }
  fs.writeFileSync(
    path.join(REPO_ROOT, "scripts/phase2-production-results.tsv"),
    reportLines.join("\n") + "\n",
  );

  console.log("\n");
  if (failed.length === 0 && fetchErrors.length === 0) {
    console.log(
      `PASS: All ${totalMatched} rewritten links match production (${results.length} pages)`,
    );
    process.exit(0);
  } else {
    console.log("FAIL: mismatches detected");
    process.exit(1);
  }
}

main();
