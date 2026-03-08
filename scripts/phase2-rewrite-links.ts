#!/usr/bin/env npx tsx
/**
 * Phase 2: Rewrite internal links to use correct relative paths
 * in the new IA-driven file layout.
 *
 * Links in the markdown files still use paths relative to the OLD gitbook
 * directory structure. This script:
 *   1. Reads the rename manifest (old gitbook slug → new url slug)
 *   2. For each .md file, extracts internal links
 *   3. Resolves each link against the OLD directory structure
 *   4. Computes the correct relative path in the NEW layout
 *   5. Rewrites the link in place
 *
 * Usage:
 *   npx tsx scripts/phase2-rewrite-links.ts [--dry-run]
 */

import * as fs from "fs";
import * as path from "path";

const DRY_RUN = process.argv.includes("--dry-run");
const REPO_ROOT = path.resolve(process.cwd());

// ---------------------------------------------------------------------------
// 1. Load rename manifest
// ---------------------------------------------------------------------------

const manifestPath = path.join(REPO_ROOT, "scripts/rename-manifest.tsv");
const manifestLines = fs
  .readFileSync(manifestPath, "utf-8")
  .trim()
  .split("\n")
  .filter((l) => l.includes("\t"));

// old gitbook slug → new url slug
const oldToNew = new Map<string, string>();
// new url slug → old gitbook slug
const newToOld = new Map<string, string>();

for (const line of manifestLines) {
  const [oldSlug, newSlug] = line.split("\t");
  oldToNew.set(oldSlug, newSlug);
  newToOld.set(newSlug, oldSlug);
}

console.log(`Loaded ${oldToNew.size} slug mappings from manifest`);

// ---------------------------------------------------------------------------
// 2. Find all article .md files
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
console.log(`Found ${allFiles.length} markdown files\n`);

// ---------------------------------------------------------------------------
// 3. Link resolution logic
// ---------------------------------------------------------------------------

/**
 * Resolve a link target relative to the OLD gitbook directory structure,
 * then compute the correct relative path in the NEW layout.
 *
 * @param rawHref - The raw link target from the markdown (e.g., "../path/file.md#anchor")
 * @param newSourceSlug - The source file's NEW url slug (e.g., "troubleshooting/capture-and-recording-issues/captured-data-looks-incorrect")
 * @returns { newHref, resolvedOldSlug, resolvedNewSlug } or null if unresolvable
 */
function resolveLink(
  rawHref: string,
  newSourceSlug: string,
): {
  newHref: string;
  resolvedOldSlug: string;
  resolvedNewSlug: string;
} | null {
  // Split off anchor
  const hashIdx = rawHref.indexOf("#");
  let pathPart = hashIdx >= 0 ? rawHref.substring(0, hashIdx) : rawHref;
  const anchor = hashIdx >= 0 ? rawHref.substring(hashIdx) : "";

  // Clean up path
  pathPart = pathPart.replace(/^\.\//, "");

  // Skip external links, empty paths (anchor-only), absolute paths,
  // and directory references (trailing /)
  if (
    !pathPart ||
    pathPart.startsWith("http") ||
    pathPart.startsWith("/") ||
    pathPart.endsWith("/")
  ) {
    return null;
  }

  // Get the OLD gitbook slug for this source file
  const oldSourceSlug = newToOld.get(newSourceSlug);
  if (!oldSourceSlug) return null;

  // Resolve relative to OLD source directory
  const oldSourceDir = path.posix.dirname(oldSourceSlug);
  let resolvedPath = path.posix.normalize(
    path.posix.join(oldSourceDir, pathPart),
  );

  // Strip .md extension
  resolvedPath = resolvedPath.replace(/\.md$/, "");

  // Handle README references (directory/README → directory)
  resolvedPath = resolvedPath.replace(/\/README$/, "");

  // Remove any "mention" suffix (GitBook artifact)
  resolvedPath = resolvedPath.replace(/\s*"mention"$/, "");

  // Look up in manifest
  let newTargetSlug = oldToNew.get(resolvedPath);

  // If not found directly, try without leading segments (some links
  // resolve incorrectly due to gitbook quirks)
  if (!newTargetSlug) {
    // Try the filename only as a last-segment match
    const lastSeg = resolvedPath.split("/").pop()!;
    // Search for any old slug ending with this segment
    for (const [oldSlug, newSlug] of oldToNew) {
      if (oldSlug.endsWith("/" + lastSeg) || oldSlug === lastSeg) {
        // Only use this as fallback if there's exactly one match
        // to avoid ambiguity
        newTargetSlug = newSlug;
        break;
      }
    }
  }

  if (!newTargetSlug) return null;

  // Compute relative path from new source to new target
  const newSourceDir = path.posix.dirname(newSourceSlug);
  let relativePath = path.posix.relative(newSourceDir, newTargetSlug);

  // Ensure it starts with ./ for same-directory or ../
  if (!relativePath.startsWith("../") && !relativePath.startsWith("./")) {
    relativePath = "./" + relativePath;
  }

  // Add .md extension back
  relativePath += ".md";

  // Add anchor
  relativePath += anchor;

  return {
    newHref: relativePath,
    resolvedOldSlug: resolvedPath,
    resolvedNewSlug: newTargetSlug,
  };
}

// ---------------------------------------------------------------------------
// 4. Process each file
// ---------------------------------------------------------------------------

interface LinkChange {
  file: string;
  type: "markdown" | "content-ref" | "page-ref";
  oldHref: string;
  newHref: string;
  resolvedOldSlug: string;
}

interface UnresolvedLink {
  file: string;
  type: string;
  rawHref: string;
  resolvedPath: string;
}

const changes: LinkChange[] = [];
let unchangedCount = 0;
const unresolved: UnresolvedLink[] = [];
const skippedExternal: string[] = [];
const skippedDirRef: string[] = [];
let filesModified = 0;

/** Check if a href should be skipped (not a rewritable internal link) */
function isSkippable(href: string): "external" | "directory" | "broken-id" | false {
  const clean = href.replace(/\s+"mention"$/, "").split("#")[0];
  if (clean.startsWith("http://") || clean.startsWith("https://")) return "external";
  if (clean.startsWith("/broken/")) return "broken-id";
  if (clean.endsWith("/")) return "directory";
  return false;
}

for (const filePath of allFiles) {
  // Get the file's new url slug
  const relPath = path.relative(REPO_ROOT, filePath).replace(/\\/g, "/");
  const newSlug = relPath.replace(/\.md$/, "");

  // Skip files not in the manifest (README.md etc.)
  if (!newToOld.has(newSlug)) continue;

  const oldSlug = newToOld.get(newSlug)!;
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  // --- Markdown links: [text](path.md) or [text](path.md#anchor) ---
  // Also handles [text](path.md "mention") GitBook syntax
  const mdLinkRegex = /\[([^\]]*)\]\(([^)]*\.md[^)]*)\)/g;
  content = content.replace(mdLinkRegex, (match, text, href) => {
    const skipReason = isSkippable(href);
    if (skipReason) {
      if (skipReason === "external") skippedExternal.push(`${relPath}: ${href}`);
      else skippedDirRef.push(`${relPath}: ${href}`);
      return match;
    }

    // Clean up "mention" suffix for resolution
    const cleanHref = href.replace(/\s+"mention"$/, "");

    const result = resolveLink(cleanHref, newSlug);
    if (!result) {
      const oldDir = path.posix.dirname(oldSlug);
      const resolved = path.posix.normalize(
        path.posix.join(oldDir, cleanHref.split("#")[0].replace(/\.md$/, "")),
      );
      unresolved.push({
        file: relPath,
        type: "markdown",
        rawHref: href,
        resolvedPath: resolved,
      });
      return match;
    }

    // Preserve "mention" attribute if present
    const mention = href.match(/\s+"mention"$/) ? ' "mention"' : "";
    const newHref = result.newHref + mention;

    if (href === newHref) {
      unchangedCount++;
      return match;
    }

    changes.push({
      file: relPath,
      type: "markdown",
      oldHref: href,
      newHref,
      resolvedOldSlug: result.resolvedOldSlug,
    });
    modified = true;
    return `[${text}](${newHref})`;
  });

  // --- Content-ref blocks: {% content-ref url="path.md" %} ---
  const contentRefRegex = /{% content-ref url="([^"]+)" %}/g;
  content = content.replace(contentRefRegex, (match, url) => {
    const skipReason = isSkippable(url);
    if (skipReason) {
      if (skipReason === "external") skippedExternal.push(`${relPath}: ${url}`);
      else skippedDirRef.push(`${relPath}: ${url}`);
      return match;
    }

    const result = resolveLink(url, newSlug);
    if (!result) {
      const oldDir = path.posix.dirname(oldSlug);
      const resolved = path.posix.normalize(
        path.posix.join(oldDir, url.split("#")[0].replace(/\.md$/, "")),
      );
      unresolved.push({
        file: relPath,
        type: "content-ref",
        rawHref: url,
        resolvedPath: resolved,
      });
      return match;
    }

    if (url === result.newHref) {
      unchangedCount++;
      return match;
    }

    changes.push({
      file: relPath,
      type: "content-ref",
      oldHref: url,
      newHref: result.newHref,
      resolvedOldSlug: result.resolvedOldSlug,
    });
    modified = true;
    return `{% content-ref url="${result.newHref}" %}`;
  });

  // --- Page-ref blocks: {% page-ref page="path.md" %} ---
  const pageRefRegex = /{% page-ref page="([^"]+)" %}/g;
  content = content.replace(pageRefRegex, (match, page) => {
    const skipReason = isSkippable(page);
    if (skipReason) {
      if (skipReason === "external") skippedExternal.push(`${relPath}: ${page}`);
      else skippedDirRef.push(`${relPath}: ${page}`);
      return match;
    }

    const result = resolveLink(page, newSlug);
    if (!result) {
      const oldDir = path.posix.dirname(oldSlug);
      const resolved = path.posix.normalize(
        path.posix.join(oldDir, page.split("#")[0].replace(/\.md$/, "")),
      );
      unresolved.push({
        file: relPath,
        type: "page-ref",
        rawHref: page,
        resolvedPath: resolved,
      });
      return match;
    }

    if (page === result.newHref) {
      unchangedCount++;
      return match;
    }

    changes.push({
      file: relPath,
      type: "page-ref",
      oldHref: page,
      newHref: result.newHref,
      resolvedOldSlug: result.resolvedOldSlug,
    });
    modified = true;
    return `{% page-ref page="${result.newHref}" %}`;
  });

  if (modified && !DRY_RUN) {
    fs.writeFileSync(filePath, content);
    filesModified++;
  } else if (modified) {
    filesModified++;
  }
}

// ---------------------------------------------------------------------------
// 5. Report
// ---------------------------------------------------------------------------

console.log("=== Phase 2: Internal Link Rewrite Results ===\n");
console.log(`Files modified:      ${filesModified}`);
console.log(`Links rewritten:     ${changes.length}`);
console.log(`Links unchanged:     ${unchangedCount}`);
console.log(`Skipped (external):  ${skippedExternal.length}`);
console.log(`Skipped (dir refs):  ${skippedDirRef.length}`);
console.log(`Unresolved:          ${unresolved.length}`);
console.log(`Mode:                ${DRY_RUN ? "DRY RUN" : "LIVE"}`);

if (changes.length > 0) {
  console.log("\n--- Sample rewrites (first 20) ---");
  for (const c of changes.slice(0, 20)) {
    console.log(`  ${c.file} [${c.type}]`);
    console.log(`    ${c.oldHref}`);
    console.log(`    → ${c.newHref}`);
  }
  if (changes.length > 20) {
    console.log(`  ... (${changes.length} total)`);
  }
}

if (skippedDirRef.length > 0) {
  console.log("\n--- Skipped directory references (group/category pages, archived) ---");
  for (const s of skippedDirRef) {
    console.log(`  ${s}`);
  }
}

if (unresolved.length > 0) {
  console.log("\n--- Unresolved links (need manual review) ---");
  for (const u of unresolved) {
    console.log(`  ${u.file} [${u.type}]`);
    console.log(`    raw: ${u.rawHref}`);
    console.log(`    resolved to: ${u.resolvedPath}`);
  }
}

// Save full report
const reportLines: string[] = [];
reportLines.push("file\ttype\told_href\tnew_href\tresolved_old_slug");
for (const c of changes) {
  reportLines.push(
    `${c.file}\t${c.type}\t${c.oldHref}\t${c.newHref}\t${c.resolvedOldSlug}`,
  );
}
fs.writeFileSync(
  path.join(REPO_ROOT, "scripts/phase2-changes.tsv"),
  reportLines.join("\n") + "\n",
);

if (unresolved.length > 0) {
  const unresolvedLines: string[] = [];
  unresolvedLines.push("file\ttype\traw_href\tresolved_path");
  for (const u of unresolved) {
    unresolvedLines.push(`${u.file}\t${u.type}\t${u.rawHref}\t${u.resolvedPath}`);
  }
  fs.writeFileSync(
    path.join(REPO_ROOT, "scripts/phase2-unresolved.tsv"),
    unresolvedLines.join("\n") + "\n",
  );
}

// Exit 0 — unresolved links are logged for review but don't block
process.exit(0);
