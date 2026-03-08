#!/usr/bin/env node
/**
 * Phase 1: Generate the authoritative rename manifest.
 *
 * Reads support-map.ts from the main repo to extract the slug mapping,
 * cross-references against SUMMARY.md and files on disk, and outputs:
 *   1. rename-manifest.json — { gitbookSlug: urlSlug } for all mapped articles
 *   2. inventory.json — categorized list of all files
 *   3. Human-readable summary to stdout
 *
 * Run from the gitbook-docs repo root:
 *   node scripts/phase1-manifest.mjs
 */

import { readFileSync, existsSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, posix } from "node:path";

const MAIN_REPO = process.env.MAIN_REPO || join(process.cwd(), "../../../..");
const SUPPORT_MAP_PATH = join(MAIN_REPO, "src/data/support-map.ts");
const GITBOOK_ROOT = process.cwd();
const SUMMARY_PATH = join(GITBOOK_ROOT, "SUMMARY.md");

// ---------------------------------------------------------------------------
// 1. Parse support-map.ts to extract slug mapping
// ---------------------------------------------------------------------------

function slugifyGroup(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function lastSegment(slug) {
  return slug.split("/").pop();
}

function parseSupportMap(tsSource) {
  // Extract all { slug: "..." } entries with their context
  // We need to understand the nesting: section > item > children
  // Strategy: eval-like extraction using regex on the structured data

  const gitbookToUrl = new Map();
  const urlToGitbook = new Map();

  // Extract section blocks
  const sectionRegex = /\{\s*id:\s*"([^"]+)"[\s\S]*?items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;

  // We need a more robust parser. Let's extract the supportMap array.
  // Strategy: find each section's id, then find all slugs within that section,
  // tracking group context.

  // First, split into sections by the "id:" markers
  const sections = [];
  const idMatches = [...tsSource.matchAll(/id:\s*"([^"]+)"/g)];

  for (let i = 0; i < idMatches.length; i++) {
    const id = idMatches[i][1];
    const startIdx = idMatches[i].index;
    const endIdx = i + 1 < idMatches.length ? idMatches[i + 1].index : tsSource.length;
    const sectionText = tsSource.slice(startIdx, endIdx);
    sections.push({ id, text: sectionText });
  }

  for (const section of sections) {
    // Find all items in this section
    // We need to track group context: items with title + children are groups
    const { id, text } = section;

    // Find group blocks: { title: "...", children: [...] }
    // and ungrouped slugs: { slug: "..." } that are direct items (not inside children)

    // Strategy: find all slug occurrences and determine their group context
    // by looking backward for the nearest group title.

    // First, find all group titles with their positions
    const groupTitleRegex = /title:\s*"([^"]+)"[\s\S]*?children:\s*\[/g;
    const groups = [];
    let match;
    while ((match = groupTitleRegex.exec(text)) !== null) {
      // Find the matching closing bracket for this children array
      let depth = 1;
      let pos = match.index + match[0].length;
      while (depth > 0 && pos < text.length) {
        if (text[pos] === "[") depth++;
        else if (text[pos] === "]") depth--;
        pos++;
      }
      groups.push({
        title: match[1],
        startIdx: match.index,
        endIdx: pos,
        groupSlug: slugifyGroup(match[1]),
      });
    }

    // Find all slug references
    const slugRegex = /slug:\s*"([^"]+)"/g;
    let slugMatch;
    while ((slugMatch = slugRegex.exec(text)) !== null) {
      const gitbookSlug = slugMatch[1];
      const slugPos = slugMatch.index;

      // Determine if this slug is inside a group
      let groupSlug = null;
      for (const group of groups) {
        if (slugPos > group.startIdx && slugPos < group.endIdx) {
          groupSlug = group.groupSlug;
          break;
        }
      }

      let urlSlug;
      if (groupSlug) {
        urlSlug = `${id}/${groupSlug}/${lastSegment(gitbookSlug)}`;
      } else {
        urlSlug = `${id}/${lastSegment(gitbookSlug)}`;
      }

      gitbookToUrl.set(gitbookSlug, urlSlug);
      urlToGitbook.set(urlSlug, gitbookSlug);
    }
  }

  return { gitbookToUrl, urlToGitbook };
}

// ---------------------------------------------------------------------------
// 2. Parse SUMMARY.md to get all referenced files
// ---------------------------------------------------------------------------

function parseSummary(content) {
  const entries = [];
  const lines = content.split("\n");
  let currentSection = null;
  let order = 0;

  for (const line of lines) {
    const sectionMatch = line.match(/^##\s+(.+)$/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].trim();
      continue;
    }

    const match = line.match(/^\s*\*\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (!match) continue;

    let filePath = match[2];
    if (filePath.endsWith("/")) filePath += "README.md";

    const slug = filePath
      .replace(/\/README\.md$/i, "")
      .replace(/\.md$/i, "")
      .replace(/\\/g, "/");

    // Skip root README
    if (slug === "README" || filePath === "README.md") continue;

    entries.push({
      title: match[1],
      filePath,
      slug,
      section: currentSection,
      order: order++,
    });
  }

  return entries;
}

// ---------------------------------------------------------------------------
// 3. Find all .md files on disk
// ---------------------------------------------------------------------------

function findAllMdFiles(dir, base = dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (entry === ".git" || entry === ".claude" || entry === "node_modules" || entry === "scripts") continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (entry === ".gitbook") continue; // skip assets
      results.push(...findAllMdFiles(full, base));
    } else if (entry.endsWith(".md") && entry !== "SUMMARY.md") {
      results.push(relative(base, full).replace(/\\/g, "/"));
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log("=== Phase 1: Rename Manifest Generator ===\n");

// Read support-map.ts
if (!existsSync(SUPPORT_MAP_PATH)) {
  console.error(`ERROR: support-map.ts not found at ${SUPPORT_MAP_PATH}`);
  console.error(`Set MAIN_REPO env var to point to the www-saleae-com-4 root`);
  process.exit(1);
}

const mapSource = readFileSync(SUPPORT_MAP_PATH, "utf-8");
const { gitbookToUrl, urlToGitbook } = parseSupportMap(mapSource);

console.log(`Mapped articles in support-map.ts: ${gitbookToUrl.size}`);

// Read SUMMARY.md
const summaryContent = readFileSync(SUMMARY_PATH, "utf-8");
const summaryEntries = parseSummary(summaryContent);
const summarySlugs = new Set(summaryEntries.map((e) => e.slug));

console.log(`Entries in SUMMARY.md: ${summaryEntries.length}`);

// Find all files on disk
const allFiles = findAllMdFiles(GITBOOK_ROOT);
const allFileSlugs = new Set(
  allFiles.map((f) =>
    f.replace(/\/README\.md$/i, "").replace(/\.md$/i, "")
  )
);

console.log(`Markdown files on disk: ${allFiles.length}`);

// ---------------------------------------------------------------------------
// Cross-reference
// ---------------------------------------------------------------------------

const mappedSlugs = new Set(gitbookToUrl.keys());

// Orphans: in SUMMARY.md but NOT in support-map
const orphansInSummary = summaryEntries.filter((e) => !mappedSlugs.has(e.slug));

// In support-map but NOT in SUMMARY.md (shouldn't happen but check)
const mappedNotInSummary = [...mappedSlugs].filter((s) => !summarySlugs.has(s));

// On disk but NOT in SUMMARY.md
const onDiskNotInSummary = allFiles.filter((f) => {
  const slug = f.replace(/\/README\.md$/i, "").replace(/\.md$/i, "");
  return !summarySlugs.has(slug);
});

// README.md files (group/category pages)
const readmeFiles = allFiles.filter((f) => f.endsWith("README.md"));

// In SUMMARY.md but file missing from disk
const missingFromDisk = summaryEntries.filter((e) => {
  return !existsSync(join(GITBOOK_ROOT, e.filePath));
});

console.log("\n--- Cross-reference results ---");
console.log(`Orphans (in SUMMARY.md, NOT in support-map): ${orphansInSummary.length}`);
console.log(`In support-map but NOT in SUMMARY.md: ${mappedNotInSummary.length}`);
console.log(`On disk but NOT in SUMMARY.md: ${onDiskNotInSummary.length}`);
console.log(`README.md group pages: ${readmeFiles.length}`);
console.log(`Referenced in SUMMARY.md but missing from disk: ${missingFromDisk.length}`);

if (orphansInSummary.length > 0) {
  console.log("\n--- Orphan articles (in SUMMARY.md, not mapped) ---");
  for (const e of orphansInSummary) {
    console.log(`  ${e.slug}  [${e.section}] "${e.title}"`);
  }
}

if (mappedNotInSummary.length > 0) {
  console.log("\n--- Mapped but not in SUMMARY.md (ERROR) ---");
  for (const s of mappedNotInSummary) {
    console.log(`  ${s}`);
  }
}

if (onDiskNotInSummary.length > 0) {
  console.log("\n--- On disk but NOT in SUMMARY.md ---");
  for (const f of onDiskNotInSummary) {
    console.log(`  ${f}`);
  }
}

if (missingFromDisk.length > 0) {
  console.log("\n--- Referenced in SUMMARY.md but MISSING from disk ---");
  for (const e of missingFromDisk) {
    console.log(`  ${e.filePath}`);
  }
}

// ---------------------------------------------------------------------------
// Build the rename manifest
// ---------------------------------------------------------------------------

const manifest = {};
for (const [gitbookSlug, urlSlug] of gitbookToUrl) {
  manifest[gitbookSlug] = urlSlug;
}

// Sort by urlSlug for readability
const sortedManifest = Object.fromEntries(
  Object.entries(manifest).sort(([, a], [, b]) => a.localeCompare(b))
);

// Build inventory
const inventory = {
  mapped: [...gitbookToUrl.entries()].map(([gb, url]) => ({
    gitbookSlug: gb,
    urlSlug: url,
    filePath: summaryEntries.find((e) => e.slug === gb)?.filePath || `${gb}.md`,
    existsOnDisk: existsSync(join(GITBOOK_ROOT, `${gb}.md`)) ||
      existsSync(join(GITBOOK_ROOT, `${gb}/README.md`)),
  })),
  orphansInSummary: orphansInSummary.map((e) => ({
    slug: e.slug,
    title: e.title,
    section: e.section,
    filePath: e.filePath,
  })),
  onDiskNotInSummary: onDiskNotInSummary,
  readmeFiles: readmeFiles,
  missingFromDisk: missingFromDisk.map((e) => e.filePath),
};

// Write outputs
const outDir = join(GITBOOK_ROOT, "scripts");
writeFileSync(join(outDir, "rename-manifest.json"), JSON.stringify(sortedManifest, null, 2) + "\n");
writeFileSync(join(outDir, "inventory.json"), JSON.stringify(inventory, null, 2) + "\n");

console.log(`\nWrote scripts/rename-manifest.json (${Object.keys(sortedManifest).length} entries)`);
console.log(`Wrote scripts/inventory.json`);

// ---------------------------------------------------------------------------
// Show sample renames
// ---------------------------------------------------------------------------

console.log("\n--- Sample renames (first 10) ---");
const entries = Object.entries(sortedManifest);
for (let i = 0; i < Math.min(10, entries.length); i++) {
  const [gb, url] = entries[i];
  console.log(`  ${gb}.md`);
  console.log(`    -> ${url}.md`);
}
console.log(`  ... (${entries.length} total)`);
