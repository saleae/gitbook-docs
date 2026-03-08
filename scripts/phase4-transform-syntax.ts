#!/usr/bin/env npx tsx
/**
 * Phase 4: Eliminate GitBook-specific syntax from source markdown.
 *
 * Transforms applied:
 *   1. Strip YAML frontmatter (--- ... --- blocks at start of file)
 *   2. Strip first H1 heading (title comes from SUMMARY.md)
 *   3. Convert {% hint %} blocks to <div class="callout callout-{style}">
 *   4. Convert {% content-ref %} blocks to standard markdown links
 *      (with proper page titles from SUMMARY.md)
 *   5. Replace &#x20; entities with spaces
 *   6. Replace \& escaped ampersands with &
 *
 * Usage:
 *   npx tsx scripts/phase4-transform-syntax.ts [--dry-run]
 */

import * as fs from "fs";
import * as path from "path";

const DRY_RUN = process.argv.includes("--dry-run");
const REPO_ROOT = path.resolve(process.cwd());

// ---------------------------------------------------------------------------
// 1. Build title map from SUMMARY.md
// ---------------------------------------------------------------------------

const summaryContent = fs.readFileSync(
  path.join(REPO_ROOT, "SUMMARY.md"),
  "utf-8",
);

// Map: file slug (without .md) → title from SUMMARY.md
const titleMap = new Map<string, string>();

for (const line of summaryContent.split("\n")) {
  const m = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (!m) continue;
  const title = m[1];
  let filePath = m[2];
  // Normalize path
  filePath = filePath.replace(/\.md$/, "").replace(/\/README$/, "");
  titleMap.set(filePath, title);
}

console.log(`Title map: ${titleMap.size} entries from SUMMARY.md`);

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
console.log(`Markdown files: ${allFiles.length}\n`);

// ---------------------------------------------------------------------------
// 3. Transform counters
// ---------------------------------------------------------------------------

const stats = {
  frontmatterStripped: 0,
  h1Stripped: 0,
  hintConverted: 0,
  contentRefConverted: 0,
  contentRefDirSkipped: 0,
  entityReplaced: 0,
  ampersandFixed: 0,
  filesModified: 0,
};

// ---------------------------------------------------------------------------
// 4. Process each file
// ---------------------------------------------------------------------------

for (const filePath of allFiles) {
  const relPath = path.relative(REPO_ROOT, filePath).replace(/\\/g, "/");
  let content = fs.readFileSync(filePath, "utf-8");
  // Normalize CRLF to LF for consistent regex matching
  content = content.replace(/\r\n/g, "\n");
  const original = content;

  // --- 4a. Strip YAML frontmatter ---
  if (content.startsWith("---\n") || content.startsWith("---\r\n")) {
    const endIdx = content.indexOf("\n---", 4);
    if (endIdx !== -1) {
      // Find the end of the closing --- line
      const afterClose = content.indexOf("\n", endIdx + 1);
      if (afterClose !== -1) {
        content = content.substring(afterClose + 1).replace(/^\n+/, "");
        stats.frontmatterStripped++;
      }
    }
  }

  // --- 4b. Strip first H1 heading ---
  // Only strip if the first non-empty line is a # heading
  const lines = content.split("\n");
  let firstContentIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim()) {
      firstContentIdx = i;
      break;
    }
  }
  if (firstContentIdx >= 0 && /^# .+/.test(lines[firstContentIdx])) {
    lines.splice(firstContentIdx, 1);
    // Also remove blank line after the heading if present
    if (firstContentIdx < lines.length && lines[firstContentIdx].trim() === "") {
      lines.splice(firstContentIdx, 1);
    }
    content = lines.join("\n");
    stats.h1Stripped++;
  }

  // --- 4c. Convert {% hint %} blocks ---
  // Pattern: {% hint style="info" %}\ncontent\n{% endhint %}
  content = content.replace(
    /{% hint style="(\w+)" %}\n([\s\S]*?){% endhint %}/g,
    (_match, style: string, innerContent: string) => {
      stats.hintConverted++;
      // Trim trailing whitespace from inner content
      const trimmed = innerContent.trimEnd();
      return `<div class="callout callout-${style}">\n${trimmed}\n</div>`;
    },
  );

  // --- 4d. Convert {% content-ref %} blocks ---
  // Pattern: {% content-ref url="path" %}\n[label](path)\n{% endcontent-ref %}
  content = content.replace(
    /{% content-ref url="([^"]+)" %}\n([\s\S]*?){% endcontent-ref %}/g,
    (_match, url: string, innerContent: string) => {
      // Skip directory references (archived group pages)
      if (url.endsWith("/")) {
        stats.contentRefDirSkipped++;
        // Still remove the wrapper, but keep the inner link
        const innerLink = innerContent.trim();
        return innerLink || "";
      }

      stats.contentRefConverted++;

      // Try to find the target file's title
      const targetSlug = url
        .replace(/\.md$/, "")
        .replace(/^\.\//, "")
        .replace(/^\.\.\//, (m) => {
          // Resolve relative path
          return m;
        });

      // Resolve target slug relative to current file
      const fileSlug = relPath.replace(/\.md$/, "");
      const fileDir = path.posix.dirname(fileSlug);
      const resolvedSlug = path.posix.normalize(
        path.posix.join(fileDir, targetSlug),
      );

      // Look up title
      let title = titleMap.get(resolvedSlug);

      if (!title) {
        // Extract from inner content if it contains a markdown link
        const linkMatch = innerContent.match(/\[([^\]]+)\]\(/);
        if (linkMatch) {
          title = linkMatch[1];
          // Clean up if it's a filename
          if (title.endsWith(".md")) {
            title = title
              .replace(/\.md$/, "")
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase());
          }
        } else {
          title = resolvedSlug.split("/").pop() || url;
          title = title
            .replace(/\.md$/, "")
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
        }
      }

      return `[${title}](${url})`;
    },
  );

  // --- 4e. Replace &#x20; with space ---
  const entityCount = (content.match(/&#x20;/g) || []).length;
  if (entityCount > 0) {
    content = content.replace(/&#x20;/g, " ");
    stats.entityReplaced += entityCount;
  }

  // --- 4f. Replace \& with & ---
  // Match \& but NOT \\& (already escaped backslash)
  const ampCount = (content.match(/\\&/g) || []).length;
  if (ampCount > 0) {
    content = content.replace(/\\&/g, "&");
    stats.ampersandFixed += ampCount;
  }

  // --- Write if modified ---
  if (content !== original) {
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, content);
    }
    stats.filesModified++;
  }
}

// ---------------------------------------------------------------------------
// 5. Report
// ---------------------------------------------------------------------------

console.log("=== Phase 4: GitBook Syntax Transform Results ===\n");
console.log(`Files modified:            ${stats.filesModified}`);
console.log(`Frontmatter stripped:      ${stats.frontmatterStripped}`);
console.log(`H1 headings stripped:      ${stats.h1Stripped}`);
console.log(`Hint blocks converted:     ${stats.hintConverted}`);
console.log(`Content-ref converted:     ${stats.contentRefConverted}`);
console.log(`Content-ref dir skipped:   ${stats.contentRefDirSkipped}`);
console.log(`&#x20; entities replaced:  ${stats.entityReplaced}`);
console.log(`\\& ampersands fixed:       ${stats.ampersandFixed}`);
console.log(`Mode:                      ${DRY_RUN ? "DRY RUN" : "LIVE"}`);

process.exit(0);
