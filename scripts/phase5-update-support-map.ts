#!/usr/bin/env npx tsx
/**
 * Phase 5: Update support-map.ts slugs from old gitbook paths to new
 * url-slug paths (matching the v2 file layout).
 *
 * Reads the rename manifest and performs string replacements in
 * support-map.ts for each slug reference.
 *
 * Usage:
 *   npx tsx scripts/phase5-update-support-map.ts [--dry-run]
 *
 * Expects MAIN_REPO env var or defaults to ../../../../ (from scripts/ to repo root).
 */

import * as fs from "fs";
import * as path from "path";

const DRY_RUN = process.argv.includes("--dry-run");
const REPO_ROOT = path.resolve(process.cwd());
const MAIN_REPO = process.env.MAIN_REPO || path.resolve(REPO_ROOT, "../../../..");
const SUPPORT_MAP_PATH = path.join(MAIN_REPO, "src/data/support-map.ts");

// ---------------------------------------------------------------------------
// 1. Load rename manifest
// ---------------------------------------------------------------------------

const manifestPath = path.join(REPO_ROOT, "scripts/rename-manifest.tsv");
const manifestLines = fs
  .readFileSync(manifestPath, "utf-8")
  .trim()
  .split("\n")
  .filter((l) => l.includes("\t"));

const oldToNew = new Map<string, string>();
for (const line of manifestLines) {
  const [oldSlug, newSlug] = line.split("\t");
  oldToNew.set(oldSlug, newSlug);
}

console.log(`Loaded ${oldToNew.size} slug mappings from manifest`);

// ---------------------------------------------------------------------------
// 2. Read support-map.ts
// ---------------------------------------------------------------------------

if (!fs.existsSync(SUPPORT_MAP_PATH)) {
  console.error(`ERROR: support-map.ts not found at ${SUPPORT_MAP_PATH}`);
  console.error("Set MAIN_REPO env var to point to the www-saleae-com-4 root");
  process.exit(1);
}

let content = fs.readFileSync(SUPPORT_MAP_PATH, "utf-8");
console.log(`Read support-map.ts (${content.split("\n").length} lines)`);

// ---------------------------------------------------------------------------
// 3. Replace each slug reference
// ---------------------------------------------------------------------------

let replaced = 0;
let notFound = 0;
const missing: string[] = [];

// Find all slug references: slug: "..."
const slugRegex = /slug:\s*"([^"]+)"/g;
const allSlugs = [...content.matchAll(slugRegex)].map((m) => m[1]);
console.log(`Found ${allSlugs.length} slug references in support-map.ts\n`);

for (const oldSlug of allSlugs) {
  const newSlug = oldToNew.get(oldSlug);
  if (!newSlug) {
    notFound++;
    missing.push(oldSlug);
    continue;
  }

  if (oldSlug === newSlug) {
    // Already correct (unlikely but possible)
    continue;
  }

  // Replace in content (exact match within quotes)
  const before = `slug: "${oldSlug}"`;
  const after = `slug: "${newSlug}"`;

  if (content.includes(before)) {
    content = content.replace(before, after);
    replaced++;
  } else {
    notFound++;
    missing.push(oldSlug);
  }
}

// ---------------------------------------------------------------------------
// 4. Write result
// ---------------------------------------------------------------------------

if (!DRY_RUN) {
  fs.writeFileSync(SUPPORT_MAP_PATH, content);
  console.log(`Wrote updated support-map.ts`);
} else {
  // Write to a preview file instead
  const previewPath = path.join(REPO_ROOT, "scripts/support-map-preview.ts");
  fs.writeFileSync(previewPath, content);
  console.log(`Wrote preview to ${previewPath}`);
}

console.log(`\n=== Phase 5: support-map.ts Update ===\n`);
console.log(`Slugs replaced:    ${replaced}`);
console.log(`Slugs not found:   ${notFound}`);
console.log(`Mode:              ${DRY_RUN ? "DRY RUN" : "LIVE"}`);

if (missing.length > 0) {
  console.log("\n--- Slugs not found in manifest ---");
  for (const m of missing) {
    console.log(`  ${m}`);
  }
}

// ---------------------------------------------------------------------------
// 5. Verify all slugs were replaced
// ---------------------------------------------------------------------------

const remainingSlugs = [...content.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const stillOld = remainingSlugs.filter((s) => {
  // Check if slug still looks like an old gitbook path
  return s.includes("product/") || s.includes("getting-help/") ||
    s.includes("faq/") || s.includes("ordering/") ||
    s.includes("tutorials/") || s.includes("datasheets-and-specifications/");
});

if (stillOld.length > 0) {
  console.log(`\nWARNING: ${stillOld.length} slugs still look like old gitbook paths:`);
  for (const s of stillOld.slice(0, 10)) {
    console.log(`  ${s}`);
  }
}

process.exit(0);
