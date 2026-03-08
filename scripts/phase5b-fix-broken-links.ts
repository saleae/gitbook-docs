#!/usr/bin/env npx tsx
/**
 * Phase 5b: Fix remaining broken links found during HTML comparison.
 *
 * Three categories:
 *   1. External saleae.gitbook.io/docs/ URLs → relative .md links
 *   2. External support.saleae.com/ URLs → relative .md links
 *   3. Directory references (paths ending in /) → .md links to correct v2 pages
 *
 * Usage:
 *   npx tsx scripts/phase5b-fix-broken-links.ts [--dry-run]
 */

import * as fs from "fs";
import * as path from "path";

const DRY_RUN = process.argv.includes("--dry-run");
const REPO_ROOT = path.resolve(process.cwd());

// ---------------------------------------------------------------------------
// 1. Build slug maps from rename manifest
// ---------------------------------------------------------------------------

const manifestPath = path.join(REPO_ROOT, "scripts/rename-manifest.tsv");
const manifestLines = fs
  .readFileSync(manifestPath, "utf-8")
  .trim()
  .split("\n")
  .filter((l) => l.includes("\t"));

// old gitbook slug → new v2 slug
const oldToNew = new Map<string, string>();
for (const line of manifestLines) {
  const [oldSlug, newSlug] = line.split("\t");
  oldToNew.set(oldSlug, newSlug);
}

console.log(`Loaded ${oldToNew.size} slug mappings from manifest\n`);

// ---------------------------------------------------------------------------
// 2. Map external URL paths to old gitbook slugs
// ---------------------------------------------------------------------------

// saleae.gitbook.io/docs/ paths → old gitbook slugs (using same remaps as pipeline)
const OLD_PATH_REMAPS: [string, string][] = [
  ["faq/general-faq", "getting-help/troubleshooting/general-faq"],
  ["faq/technical-faq", "getting-help/troubleshooting/technical-faq"],
  ["faq", "getting-help/troubleshooting"],
  ["protocol-analyzers", "product/user-guide/protocol-analyzers"],
  ["extensions", "product/user-guide/extensions-apis-and-sdks/extensions"],
  ["saleae-api-and-sdk", "product/user-guide/extensions-apis-and-sdks/saleae-api-and-sdk"],
  ["user-guide", "product/user-guide"],
  ["logic-software", "product/logic-software"],
  ["getting-started", "product/getting-started"],
  ["datasheets-and-specifications", "product/datasheets-and-specifications"],
  ["troubleshooting", "getting-help/troubleshooting"],
  ["community", "getting-help/community"],
  ["ordering-and-shipping", "ordering/ordering-and-shipping"],
  ["180-day-return-policy-and-3-year-warranty", "ordering/180-day-return-policy-and-3-year-warranty"],
];

// Deleted pages that were renamed (URL path → v2 slug)
const DELETED_PAGE_REWRITES = new Map<string, string>([
  ["user-guide/using-logic/collecting-data-and-device-settings", "logic-software/capturing-data/capture-settings"],
  ["user-guide/using-logic/measurements-timing-markers-and-bookmarks", "logic-software/viewing-and-analyzing-data/measurements-timing-markers"],
  ["user-guide/using-logic/using-the-trigger", "logic-software/capturing-data/capture-modes"],
  ["logic-software/latest-stable-release-download", "/downloads"],
]);

function resolveExternalPath(urlPath: string): string | undefined {
  // Check deleted page rewrites first
  const rewrite = DELETED_PAGE_REWRITES.get(urlPath.toLowerCase());
  if (rewrite) return rewrite;

  // Try applying prefix remaps to get old gitbook slug
  const p = urlPath.toLowerCase();
  for (const [oldPrefix, newPrefix] of OLD_PATH_REMAPS) {
    let gitbookSlug: string | undefined;
    if (p === oldPrefix) {
      gitbookSlug = newPrefix;
    } else if (p.startsWith(oldPrefix + "/")) {
      gitbookSlug = newPrefix + p.slice(oldPrefix.length);
    }
    if (gitbookSlug) {
      const v2Slug = oldToNew.get(gitbookSlug);
      if (v2Slug) return v2Slug;
    }
  }

  return undefined;
}

// ---------------------------------------------------------------------------
// 3. Directory reference targets (old dir ref → v2 .md target)
// ---------------------------------------------------------------------------

// Group pages (directories) that no longer exist — map to best equivalent.
// Keys are the RESOLVED slug (after posix.normalize + stripping leading ../).
const DIR_OVERRIDES = new Map<string, string>([
  // analyzer-frame-types group → representative child in hla-frame-format-reference
  ["product/user-guide/extensions-apis-and-sdks/extensions/analyzer-frame-types", "extensions-api/hla-frame-format-reference/serial-analyzer"],
  ["extensions-api/extensions/analyzer-frame-types", "extensions-api/hla-frame-format-reference/serial-analyzer"],
  ["extensions-api/analyzer-frame-types", "extensions-api/hla-frame-format-reference/serial-analyzer"],
  ["extensions/analyzer-frame-types", "extensions-api/hla-frame-format-reference/serial-analyzer"],
  ["logic-software/extensions-apis-and-sdks/extensions/analyzer-frame-types", "extensions-api/hla-frame-format-reference/serial-analyzer"],

  // Protocol Analyzer SDK group page
  ["product/user-guide/extensions-apis-and-sdks/saleae-api-and-sdk/protocol-analyzer-sdk", "extensions-api/protocol-analyzer-sdk/protocol-analyzer-sdk"],
  ["extensions-api/protocol-analyzer-sdk", "extensions-api/protocol-analyzer-sdk/protocol-analyzer-sdk"],
  ["extensions-apis-and-sdks/saleae-api-and-sdk/protocol-analyzer-sdk", "extensions-api/protocol-analyzer-sdk/protocol-analyzer-sdk"],

  // Extensions group page
  ["product/user-guide/extensions-apis-and-sdks/extensions", "extensions-api/extensions/installing-extensions"],
  ["logic-software/extensions-apis-and-sdks/extensions", "extensions-api/extensions/installing-extensions"],
  ["extensions/high-level-analyzer-extensions", "extensions-api/extensions/high-level-analyzer-extensions"],

  // Datasheets group page
  ["product/datasheets-and-specifications", "specifications-hardware/datasheets-and-compliance/datasheets"],
  ["datasheets-and-specifications", "specifications-hardware/datasheets-and-compliance/datasheets"],

  // 180-day return policy
  ["ordering/180-day-return-policy-and-3-year-warranty", "ordering-returns/180-day-return-policy-and-3-year-warranty"],
  ["180-day-return-policy-and-3-year-warranty", "ordering-returns/180-day-return-policy-and-3-year-warranty"],

  // Analyzer user guides group
  ["protocol-analyzers/analyzer-user-guides", "protocol-analyzers/analyzer-user-guides/using-spi"],
  ["protocol-analyzers/supported-protocols/analyzer-user-guides", "protocol-analyzers/analyzer-user-guides/using-spi"],

  // Getting Started group (README.md)
  ["product/getting-started", "getting-started/setup"],
]);

function resolveDirectoryRef(resolvedSlug: string): string | undefined {
  // Strip leading ../ segments (path goes above repo root)
  let cleaned = resolvedSlug;
  while (cleaned.startsWith("../")) {
    cleaned = cleaned.slice(3);
  }
  if (cleaned !== resolvedSlug) {
    // Also try the cleaned version
    const result = resolveDirectoryRef(cleaned);
    if (result) return result;
  }

  // Check overrides first
  const override = DIR_OVERRIDES.get(resolvedSlug);
  if (override) return override;

  // Check if slug matches any file as .md
  if (fs.existsSync(path.join(REPO_ROOT, `${resolvedSlug}.md`))) {
    return resolvedSlug;
  }

  // Check if slug is a directory with README.md
  if (fs.existsSync(path.join(REPO_ROOT, resolvedSlug, "README.md"))) {
    return resolvedSlug;
  }

  // Try matching in manifest
  const v2Slug = oldToNew.get(resolvedSlug);
  if (v2Slug) return v2Slug;

  return undefined;
}

// ---------------------------------------------------------------------------
// 4. Process files
// ---------------------------------------------------------------------------

function findMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if ([".git", ".gitbook", ".claude", "scripts", "_archive", "node_modules"].includes(entry.name))
        continue;
      results.push(...findMdFiles(fullPath));
    } else if (entry.name.endsWith(".md") && entry.name !== "SUMMARY.md") {
      results.push(fullPath);
    }
  }
  return results;
}

const allFiles = findMdFiles(REPO_ROOT);
console.log(`Markdown files: ${allFiles.length}\n`);

const stats = {
  gitbookIoFixed: 0,
  gitbookIoFailed: 0,
  supportSaleaeFixed: 0,
  supportSaleaeFailed: 0,
  dirRefFixed: 0,
  dirRefFailed: 0,
  filesModified: 0,
};

const failures: string[] = [];

for (const filePath of allFiles) {
  const relPath = path.relative(REPO_ROOT, filePath).replace(/\\/g, "/");
  const fileSlug = relPath.replace(/\.md$/, "");
  const fileDir = path.posix.dirname(fileSlug);
  let content = fs.readFileSync(filePath, "utf-8");
  content = content.replace(/\r\n/g, "\n");
  const original = content;

  // --- 4a. Convert saleae.gitbook.io/docs/ URLs to relative .md links ---
  content = content.replace(
    /\[([^\]]+)\]\(https?:\/\/saleae\.gitbook\.io\/docs(\/[^)\s"]*?)?\)/g,
    (match, text: string, urlPath?: string) => {
      const cleanPath = (urlPath || "").replace(/\/$/, "").slice(1); // strip leading /
      if (!cleanPath) return match; // root link, keep as-is

      const v2Slug = resolveExternalPath(cleanPath);
      if (!v2Slug) {
        stats.gitbookIoFailed++;
        failures.push(`${relPath}: gitbook.io URL not resolved: ${cleanPath}`);
        return match;
      }

      // Non-support redirect (e.g. /downloads)
      if (v2Slug.startsWith("/")) {
        stats.gitbookIoFixed++;
        return `[${text}](${v2Slug})`;
      }

      // Compute relative path from current file to target
      const relativePath = computeRelative(fileDir, v2Slug);
      stats.gitbookIoFixed++;
      return `[${text}](${relativePath}.md)`;
    },
  );

  // --- 4b. Convert support.saleae.com/ URLs to relative .md links ---
  content = content.replace(
    /\[([^\]]+)\]\(https?:\/\/support\.saleae\.com(\/[^)\s"]*?)?\)/g,
    (match, text: string, urlPath?: string) => {
      const cleanPath = (urlPath || "").replace(/\/$/, "").slice(1);
      if (!cleanPath) return match;

      const v2Slug = resolveExternalPath(cleanPath);
      if (!v2Slug) {
        stats.supportSaleaeFailed++;
        failures.push(`${relPath}: support.saleae.com URL not resolved: ${cleanPath}`);
        return match;
      }

      if (v2Slug.startsWith("/")) {
        stats.supportSaleaeFixed++;
        return `[${text}](${v2Slug})`;
      }

      const relativePath = computeRelative(fileDir, v2Slug);
      stats.supportSaleaeFixed++;
      return `[${text}](${relativePath}.md)`;
    },
  );

  // --- 4c. Fix directory references (paths ending in /) ---
  // Match [text](relative/path/) but NOT external URLs
  content = content.replace(
    /\[([^\]]+)\]\((?!https?:\/\/|#|mailto:)([^)\s]+\/)\)/g,
    (match, text: string, href: string) => {
      // Resolve relative to current file
      const cleanHref = href.replace(/\/$/, "");
      const resolved = path.posix.normalize(path.posix.join(fileDir, cleanHref));

      const v2Target = resolveDirectoryRef(resolved);
      if (!v2Target) {
        stats.dirRefFailed++;
        failures.push(`${relPath}: dir ref not resolved: ${href} → ${resolved}`);
        return match;
      }

      const relativePath = computeRelative(fileDir, v2Target);
      stats.dirRefFixed++;
      return `[${text}](${relativePath}.md)`;
    },
  );

  if (content !== original) {
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, content);
    }
    stats.filesModified++;
  }
}

function computeRelative(fromDir: string, toSlug: string): string {
  const toDir = path.posix.dirname(toSlug);
  const toFile = path.posix.basename(toSlug);

  if (fromDir === toDir) {
    return toFile;
  }

  let rel = path.posix.relative(fromDir, toDir);
  if (!rel.startsWith("..") && !rel.startsWith(".")) {
    rel = "./" + rel;
  }
  return `${rel}/${toFile}`;
}

// ---------------------------------------------------------------------------
// 5. Report
// ---------------------------------------------------------------------------

console.log("=== Phase 5b: Broken Link Fix Results ===\n");
console.log(`Files modified:                ${stats.filesModified}`);
console.log(`GitBook.io URLs fixed:         ${stats.gitbookIoFixed}`);
console.log(`GitBook.io URLs failed:        ${stats.gitbookIoFailed}`);
console.log(`support.saleae.com URLs fixed: ${stats.supportSaleaeFixed}`);
console.log(`support.saleae.com URLs failed:${stats.supportSaleaeFailed}`);
console.log(`Dir references fixed:          ${stats.dirRefFixed}`);
console.log(`Dir references failed:         ${stats.dirRefFailed}`);
console.log(`Mode:                          ${DRY_RUN ? "DRY RUN" : "LIVE"}`);

if (failures.length > 0) {
  console.log("\n--- Unresolved links ---");
  for (const f of failures) {
    console.log(`  ${f}`);
  }
}

process.exit(0);
