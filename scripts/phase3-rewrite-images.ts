#!/usr/bin/env npx tsx
/**
 * Phase 3: Rewrite image/asset references to use correct relative paths
 * from the new IA-driven file layout.
 *
 * After Phase 1 file moves, all image paths (../../.gitbook/assets/...)
 * use wrong depths. This script:
 *   1. Resolves each image ref against the OLD directory structure
 *   2. Extracts the target filename in .gitbook/assets/
 *   3. Computes the correct relative path from the NEW file location
 *   4. Rewrites the reference
 *
 * Handles:
 *   - Standard markdown: ![alt](path)
 *   - Angle-bracket markdown: ![alt](<path>)
 *   - HTML img: <img src="path">
 *   - Figure/img combos: <figure><img src="path">
 *   - GitBook file blocks: {% file src="path" %}
 *
 * Usage:
 *   npx tsx scripts/phase3-rewrite-images.ts [--dry-run]
 */

import * as fs from "fs";
import * as path from "path";

const DRY_RUN = process.argv.includes("--dry-run");
const REPO_ROOT = path.resolve(process.cwd());
const ASSETS_DIR = path.join(REPO_ROOT, ".gitbook", "assets");

// ---------------------------------------------------------------------------
// 1. Load rename manifest (old gitbook slug → new url slug)
// ---------------------------------------------------------------------------

const manifestPath = path.join(REPO_ROOT, "scripts/rename-manifest.tsv");
const manifestLines = fs
  .readFileSync(manifestPath, "utf-8")
  .trim()
  .split("\n")
  .filter((l) => l.includes("\t"));

const oldToNew = new Map<string, string>();
const newToOld = new Map<string, string>();

for (const line of manifestLines) {
  const [oldSlug, newSlug] = line.split("\t");
  oldToNew.set(oldSlug, newSlug);
  newToOld.set(newSlug, oldSlug);
}

console.log(`Loaded ${oldToNew.size} slug mappings`);

// ---------------------------------------------------------------------------
// 2. Build case-insensitive asset index
// ---------------------------------------------------------------------------

const assetFiles = fs.readdirSync(ASSETS_DIR);
const assetLowerMap = new Map<string, string>(); // lowercase → actual name
for (const f of assetFiles) {
  assetLowerMap.set(f.toLowerCase(), f);
}
console.log(`Asset files indexed: ${assetFiles.length}`);

// ---------------------------------------------------------------------------
// 3. Find all article .md files
// ---------------------------------------------------------------------------

function findMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (
        [".git", ".gitbook", ".claude", "scripts", "_archive", "node_modules"].includes(
          entry.name,
        )
      )
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

// ---------------------------------------------------------------------------
// 4. Image path resolution
// ---------------------------------------------------------------------------

/**
 * Given a raw image path from markdown and the file's old/new slugs,
 * resolve to the actual asset filename and compute the correct new path.
 */
function resolveImagePath(
  rawPath: string,
  oldSlug: string,
  newSlug: string,
): { newPath: string; assetFilename: string } | null {
  // Clean backslash escapes (GitBook adds them): screen\_06.png → screen_06.png
  let cleanPath = rawPath.replace(/\\([_*[\]()~`>#+\-.!|{}])/g, "$1");

  // Skip external URLs
  if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://")) {
    return null;
  }

  // Skip anchor-only refs
  if (cleanPath.startsWith("#") || !cleanPath.trim()) {
    return null;
  }

  // Resolve relative to the OLD directory structure
  const oldDir = path.posix.dirname(oldSlug);
  const resolved = path.posix.normalize(path.posix.join(oldDir, cleanPath));

  // Extract the asset filename from .gitbook/assets/
  const assetsMatch = resolved.match(/\.gitbook\/assets\/(.+)$/);
  if (!assetsMatch) {
    // Not a .gitbook/assets reference — skip (could be external image, etc.)
    return null;
  }

  const assetFilename = assetsMatch[1];

  // Verify asset exists (case-insensitive)
  const actualName =
    assetLowerMap.get(assetFilename.toLowerCase()) ||
    assetLowerMap.get(decodeURIComponent(assetFilename).toLowerCase());

  if (!actualName && !assetFilename.includes("%")) {
    // Try with decoded spaces, etc.
    const decoded = assetFilename.replace(/%20/g, " ").replace(/%28/g, "(").replace(/%29/g, ")");
    const found = assetLowerMap.get(decoded.toLowerCase());
    if (!found) {
      return null; // Asset not found
    }
  }

  const finalName = actualName || assetFilename;

  // Compute correct relative path from new file location to .gitbook/assets/
  const newDir = path.posix.dirname(newSlug);
  const depth = newDir.split("/").length;
  const prefix = "../".repeat(depth);

  // Use the same filename (preserve original case/encoding from the reference)
  const newPath = `${prefix}.gitbook/assets/${assetFilename}`;

  return { newPath, assetFilename };
}

// ---------------------------------------------------------------------------
// 5. Process each file
// ---------------------------------------------------------------------------

interface Change {
  file: string;
  type: string;
  oldPath: string;
  newPath: string;
  assetFilename: string;
}

const changes: Change[] = [];
let unchangedCount = 0;
let skippedExternal = 0;
let skippedOther = 0;
const notFound: { file: string; type: string; rawPath: string; resolved: string }[] = [];
let filesModified = 0;

for (const filePath of allFiles) {
  const relPath = path.relative(REPO_ROOT, filePath).replace(/\\/g, "/");
  const newSlug = relPath.replace(/\.md$/, "");

  if (!newToOld.has(newSlug)) continue;
  const oldSlug = newToOld.get(newSlug)!;

  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  // Helper to process a single image path replacement
  function processPath(
    rawPath: string,
    type: string,
  ): { newPath: string; changed: boolean } | null {
    if (rawPath.startsWith("http://") || rawPath.startsWith("https://")) {
      skippedExternal++;
      return null;
    }

    const result = resolveImagePath(rawPath, oldSlug, newSlug);
    if (!result) {
      // Log if it looks like it should be a .gitbook/assets ref
      if (rawPath.includes(".gitbook/assets") || rawPath.includes("gitbook/assets")) {
        const oldDir = path.posix.dirname(oldSlug);
        const resolved = path.posix.normalize(path.posix.join(oldDir, rawPath));
        notFound.push({ file: relPath, type, rawPath, resolved });
      } else {
        skippedOther++;
      }
      return null;
    }

    if (rawPath === result.newPath) {
      unchangedCount++;
      return { newPath: result.newPath, changed: false };
    }

    changes.push({
      file: relPath,
      type,
      oldPath: rawPath,
      newPath: result.newPath,
      assetFilename: result.assetFilename,
    });

    return { newPath: result.newPath, changed: true };
  }

  // --- Standard markdown images: ![alt](path) ---
  // Must NOT match angle-bracket variant ![alt](<path>)
  content = content.replace(
    /!\[([^\]]*)\]\((?!<)([^)]+)\)/g,
    (match, alt, rawPath) => {
      const r = processPath(rawPath, "markdown-img");
      if (!r) return match;
      if (r.changed) modified = true;
      return `![${alt}](${r.newPath})`;
    },
  );

  // --- Angle-bracket markdown images: ![alt](<path>) ---
  content = content.replace(
    /!\[([^\]]*)\]\(<([^>]+)>\)/g,
    (match, alt, rawPath) => {
      const r = processPath(rawPath, "angle-bracket-img");
      if (!r) return match;
      if (r.changed) modified = true;
      return `![${alt}](<${r.newPath}>)`;
    },
  );

  // --- HTML img src: <img src="path"> ---
  content = content.replace(
    /<img\s+([^>]*?)src="([^"]+)"([^>]*)>/g,
    (match, before, rawPath, after) => {
      const r = processPath(rawPath, "html-img");
      if (!r) return match;
      if (r.changed) modified = true;
      return `<img ${before}src="${r.newPath}"${after}>`;
    },
  );

  // --- GitBook file blocks: {% file src="path" %} ---
  content = content.replace(
    /{% file src="([^"]+)"([^%]*?)%}/g,
    (match, rawPath, rest) => {
      const r = processPath(rawPath, "file-block");
      if (!r) return match;
      if (r.changed) modified = true;
      return `{% file src="${r.newPath}"${rest}%}`;
    },
  );

  if (modified && !DRY_RUN) {
    fs.writeFileSync(filePath, content);
    filesModified++;
  } else if (modified) {
    filesModified++;
  }
}

// ---------------------------------------------------------------------------
// 6. Report
// ---------------------------------------------------------------------------

console.log("=== Phase 3: Image Reference Rewrite Results ===\n");
console.log(`Files modified:        ${filesModified}`);
console.log(`References rewritten:  ${changes.length}`);
console.log(`References unchanged:  ${unchangedCount}`);
console.log(`Skipped (external):    ${skippedExternal}`);
console.log(`Skipped (non-asset):   ${skippedOther}`);
console.log(`Asset not found:       ${notFound.length}`);
console.log(`Mode:                  ${DRY_RUN ? "DRY RUN" : "LIVE"}`);

if (changes.length > 0) {
  console.log("\n--- Sample rewrites (first 15) ---");
  for (const c of changes.slice(0, 15)) {
    console.log(`  ${c.file} [${c.type}]`);
    console.log(`    ${c.oldPath}`);
    console.log(`    → ${c.newPath}`);
  }
  if (changes.length > 15) {
    console.log(`  ... (${changes.length} total)`);
  }
}

if (notFound.length > 0) {
  console.log("\n--- Asset not found (.gitbook/assets refs that didn't resolve) ---");
  for (const n of notFound) {
    console.log(`  ${n.file} [${n.type}]`);
    console.log(`    raw: ${n.rawPath}`);
    console.log(`    resolved: ${n.resolved}`);
  }
}

// Save full report
const reportLines = ["file\ttype\told_path\tnew_path\tasset_filename"];
for (const c of changes) {
  reportLines.push(
    `${c.file}\t${c.type}\t${c.oldPath}\t${c.newPath}\t${c.assetFilename}`,
  );
}
fs.writeFileSync(
  path.join(REPO_ROOT, "scripts/phase3-changes.tsv"),
  reportLines.join("\n") + "\n",
);

if (notFound.length > 0) {
  const nfLines = ["file\ttype\traw_path\tresolved"];
  for (const n of notFound) {
    nfLines.push(`${n.file}\t${n.type}\t${n.rawPath}\t${n.resolved}`);
  }
  fs.writeFileSync(
    path.join(REPO_ROOT, "scripts/phase3-not-found.tsv"),
    nfLines.join("\n") + "\n",
  );
}

process.exit(0);
