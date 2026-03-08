#!/usr/bin/env npx tsx
/**
 * Phase 2 verification: check that every internal .md link in every
 * article resolves to an existing file on disk.
 *
 * Usage: npx tsx scripts/phase2-verify-links.ts
 */

import * as fs from "fs";
import * as path from "path";

const REPO_ROOT = path.resolve(process.cwd());

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
console.log(`Checking ${allFiles.length} markdown files...\n`);

let totalLinks = 0;
let validLinks = 0;
let externalLinks = 0;
let dirRefs = 0;
let brokenLinks = 0;
const broken: { file: string; href: string; resolvedTo: string }[] = [];

for (const filePath of allFiles) {
  const relPath = path.relative(REPO_ROOT, filePath).replace(/\\/g, "/");
  const content = fs.readFileSync(filePath, "utf-8");
  const fileDir = path.posix.dirname(relPath);

  // Extract all link targets (markdown links, content-ref, page-ref)
  const patterns = [
    /\[[^\]]*\]\(([^)]+)\)/g, // markdown links
    /{% content-ref url="([^"]+)" %}/g, // content-ref
    /{% page-ref page="([^"]+)" %}/g, // page-ref
  ];

  for (const regex of patterns) {
    let m;
    while ((m = regex.exec(content)) !== null) {
      let href = m[1];
      totalLinks++;

      // Skip non-.md links
      if (!href.includes(".md")) continue;

      // Strip anchor and "mention"
      href = href.replace(/\s+"mention"$/, "");
      const hrefPath = href.split("#")[0];

      // Skip external links
      if (hrefPath.startsWith("http://") || hrefPath.startsWith("https://")) {
        externalLinks++;
        continue;
      }

      // Skip absolute paths (broken GitBook IDs)
      if (hrefPath.startsWith("/")) {
        dirRefs++;
        continue;
      }

      // Skip directory references
      if (hrefPath.endsWith("/")) {
        dirRefs++;
        continue;
      }

      // Resolve relative to file's directory
      const resolved = path.posix.normalize(path.posix.join(fileDir, hrefPath));
      const fullResolved = path.join(REPO_ROOT, resolved);

      if (fs.existsSync(fullResolved)) {
        validLinks++;
      } else {
        brokenLinks++;
        broken.push({ file: relPath, href, resolvedTo: resolved });
      }
    }
  }
}

console.log("=== Phase 2 Link Verification ===\n");
console.log(`Total links found:   ${totalLinks}`);
console.log(`Valid (.md exists):   ${validLinks}`);
console.log(`External (skipped):  ${externalLinks}`);
console.log(`Dir refs (skipped):  ${dirRefs}`);
console.log(`Broken:              ${brokenLinks}`);

if (broken.length > 0) {
  console.log("\n--- Broken links ---");
  for (const b of broken) {
    console.log(`  ${b.file}`);
    console.log(`    href: ${b.href}`);
    console.log(`    resolved: ${b.resolvedTo}`);
  }
  console.log(`\nFAIL: ${brokenLinks} broken links`);
  process.exit(1);
} else {
  console.log(`\nPASS: All ${validLinks} internal .md links resolve to existing files`);
  process.exit(0);
}
