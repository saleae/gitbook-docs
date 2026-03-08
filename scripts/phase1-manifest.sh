#!/usr/bin/env bash
# Phase 1: Generate the rename manifest from support-map.ts
#
# Extracts the gitbook-slug -> url-slug mapping by parsing the TypeScript
# structure with awk. Outputs rename-manifest.tsv and cross-references
# against SUMMARY.md and files on disk.
#
# Run from the gitbook-docs repo root:
#   bash scripts/phase1-manifest.sh

set -euo pipefail

MAIN_REPO="${MAIN_REPO:-$(cd ../../../.. && pwd)}"
SUPPORT_MAP="$MAIN_REPO/src/data/support-map.ts"
GITBOOK_ROOT="$(pwd)"

if [[ ! -f "$SUPPORT_MAP" ]]; then
  echo "ERROR: support-map.ts not found at $SUPPORT_MAP"
  echo "Set MAIN_REPO env var to point to the www-saleae-com-4 root"
  exit 1
fi

echo "=== Phase 1: Rename Manifest Generator ==="
echo ""

# ---------------------------------------------------------------------------
# 1. Extract slug mapping from support-map.ts using awk
# ---------------------------------------------------------------------------
# Output: gitbook_slug<TAB>url_slug
#
# Logic: track current section id and group title. When we see a slug,
# compute the url slug from section_id / group_slug / last_segment.

awk '
function slugify_group(title,    s) {
  s = tolower(title)
  gsub(/&/, "and", s)
  gsub(/[^a-z0-9]+/, "-", s)
  gsub(/^-|-$/, "", s)
  return s
}

function last_segment(slug,    n, parts) {
  n = split(slug, parts, "/")
  return parts[n]
}

/id:\s*"[^"]+"/ {
  match($0, /id:\s*"([^"]+)"/, m)
  if (m[1] != "") current_id = m[1]
}

# Track brace depth to know when we exit a group children block
{
  for (i = 1; i <= length($0); i++) {
    c = substr($0, i, 1)
    if (c == "{") brace_depth++
    else if (c == "}") brace_depth--
  }
}

# Group title with children - push group context
/title:\s*"[^"]+"/ && /children/ {
  # This line or nearby has both title and children
  match($0, /title:\s*"([^"]+)"/, m)
  if (m[1] != "") {
    current_group = slugify_group(m[1])
    group_start_depth = brace_depth
  }
}

# Detect title on one line, children on a subsequent line
/title:\s*"[^"]+"/ && !/children/ && !/slug/ {
  match($0, /title:\s*"([^"]+)"/, m)
  if (m[1] != "") pending_title = m[1]
}

/children:\s*\[/ && !/title/ {
  if (pending_title != "") {
    current_group = slugify_group(pending_title)
    group_start_depth = brace_depth
    pending_title = ""
  }
}

# When we see a slug, emit the mapping
/slug:\s*"[^"]+"/ {
  match($0, /slug:\s*"([^"]+)"/, m)
  if (m[1] != "" && current_id != "") {
    gb = m[1]
    ls = last_segment(gb)
    if (current_group != "") {
      url = current_id "/" current_group "/" ls
    } else {
      url = current_id "/" ls
    }
    print gb "\t" url
  }
}

# Reset group when we exit the children block
# We track this by detecting closing of items arrays
# Simpler: reset group when we see a new top-level item marker
# Actually, let us use a different strategy: reset group at section boundaries
# and when we encounter a new item at items[] level

' "$SUPPORT_MAP" > /tmp/slug_mapping_raw.tsv

echo "Raw slug mappings extracted: $(wc -l < /tmp/slug_mapping_raw.tsv)"

# The awk above has a limitation with group tracking. Let me use a more
# reliable approach: parse the file structure explicitly.

# ---------------------------------------------------------------------------
# More reliable extraction: use a stateful parser
# ---------------------------------------------------------------------------

python3 -c "
import re, sys, json

with open('$SUPPORT_MAP', 'r') as f:
    src = f.read()

def slugify_group(title):
    s = title.lower().replace('&', 'and')
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

def last_seg(slug):
    return slug.split('/')[-1]

# Extract sections
mapping = {}
# Find each section block
section_pattern = r'id:\s*\"([^\"]+)\"'
slug_pattern = r'slug:\s*\"([^\"]+)\"'
title_children_pattern = r'title:\s*\"([^\"]+)\"'

# Split source into section chunks by the id: markers
id_positions = [(m.start(), m.group(1)) for m in re.finditer(section_pattern, src)]

for idx, (pos, section_id) in enumerate(id_positions):
    end_pos = id_positions[idx + 1][0] if idx + 1 < len(id_positions) else len(src)
    section_text = src[pos:end_pos]

    # Find all group blocks (title + children pairs)
    # and track which slugs are inside them
    groups = []
    for m in re.finditer(r'title:\s*\"([^\"]+)\"[\s\S]*?children:\s*\[', section_text):
        # Find the matching ] for this children array
        start = m.start() + len(m.group(0))
        depth = 1
        p = start
        while depth > 0 and p < len(section_text):
            if section_text[p] == '[': depth += 1
            elif section_text[p] == ']': depth -= 1
            p += 1
        groups.append({
            'title': m.group(1),
            'slug': slugify_group(m.group(1)),
            'start': m.start(),
            'end': p,
        })

    # Find all slug entries in this section
    for m in re.finditer(slug_pattern, section_text):
        gb_slug = m.group(1)
        slug_pos = m.start()

        # Determine group context
        group_slug = None
        for g in groups:
            if g['start'] < slug_pos < g['end']:
                group_slug = g['slug']
                break

        if group_slug:
            url_slug = f'{section_id}/{group_slug}/{last_seg(gb_slug)}'
        else:
            url_slug = f'{section_id}/{last_seg(gb_slug)}'

        mapping[gb_slug] = url_slug

# Output as TSV
for gb, url in sorted(mapping.items(), key=lambda x: x[1]):
    print(f'{gb}\t{url}')

sys.stderr.write(f'Extracted {len(mapping)} slug mappings\n')
" > scripts/rename-manifest.tsv 2>&1 || {
  # If python3 not available, try python
  echo "python3 not found, trying python..."
  # Fallback: we already have the awk output
  cp /tmp/slug_mapping_raw.tsv scripts/rename-manifest.tsv
}

# Check if we got a reasonable count
MANIFEST_COUNT=$(grep -c $'\t' scripts/rename-manifest.tsv 2>/dev/null || echo 0)

# If the python extraction includes the stderr line, separate it
if grep -q "^Extracted" scripts/rename-manifest.tsv; then
  grep -v "^Extracted" scripts/rename-manifest.tsv > /tmp/manifest_clean.tsv
  mv /tmp/manifest_clean.tsv scripts/rename-manifest.tsv
  MANIFEST_COUNT=$(wc -l < scripts/rename-manifest.tsv)
fi

echo "Slug mappings in manifest: $MANIFEST_COUNT"

# ---------------------------------------------------------------------------
# 2. Parse SUMMARY.md entries
# ---------------------------------------------------------------------------

grep -oP '^\s*\*\s+\[[^\]]+\]\(\K[^)]+' SUMMARY.md | while read -r filepath; do
  # Normalize: trailing / -> /README.md
  [[ "$filepath" == */ ]] && filepath="${filepath}README.md"
  # Convert to slug
  slug="${filepath%.md}"
  slug="${slug%/README}"
  echo "$slug"
done | grep -v "^README$" > /tmp/summary_slugs.txt

SUMMARY_COUNT=$(wc -l < /tmp/summary_slugs.txt)
echo "SUMMARY.md entries: $SUMMARY_COUNT"

# ---------------------------------------------------------------------------
# 3. Find all .md files on disk
# ---------------------------------------------------------------------------

find . -name '*.md' -not -path './.gitbook/*' -not -path './.git/*' \
  -not -path './.claude/*' -not -name 'SUMMARY.md' -not -path '*/scripts/*' \
  | sed 's|^\./||' | sort > /tmp/disk_files.txt

DISK_COUNT=$(wc -l < /tmp/disk_files.txt)
echo "Markdown files on disk: $DISK_COUNT"

# Convert disk files to slugs
while read -r f; do
  slug="${f%.md}"
  slug="${slug%/README}"
  echo "$slug"
done < /tmp/disk_files.txt > /tmp/disk_slugs.txt

# ---------------------------------------------------------------------------
# 4. Cross-reference
# ---------------------------------------------------------------------------

# Extract just gitbook slugs from manifest
cut -f1 scripts/rename-manifest.tsv | sort > /tmp/mapped_slugs.txt

# Orphans: in SUMMARY.md but NOT in support-map
comm -23 <(sort /tmp/summary_slugs.txt) <(sort /tmp/mapped_slugs.txt) > /tmp/orphans.txt
ORPHAN_COUNT=$(wc -l < /tmp/orphans.txt)

# In support-map but NOT in SUMMARY.md
comm -23 <(sort /tmp/mapped_slugs.txt) <(sort /tmp/summary_slugs.txt) > /tmp/mapped_not_summary.txt
MAPPED_NOT_SUMMARY=$(wc -l < /tmp/mapped_not_summary.txt)

# On disk but NOT in SUMMARY.md
comm -23 <(sort /tmp/disk_slugs.txt) <(sort /tmp/summary_slugs.txt) > /tmp/disk_not_summary.txt
DISK_NOT_SUMMARY=$(wc -l < /tmp/disk_not_summary.txt)

# README.md files
README_COUNT=$(grep -c "README.md" /tmp/disk_files.txt || true)

echo ""
echo "--- Cross-reference ---"
echo "Orphans (in SUMMARY.md, NOT mapped): $ORPHAN_COUNT"
echo "Mapped but NOT in SUMMARY.md: $MAPPED_NOT_SUMMARY"
echo "On disk but NOT in SUMMARY.md: $DISK_NOT_SUMMARY"
echo "README.md group pages: $README_COUNT"

if [[ $ORPHAN_COUNT -gt 0 ]]; then
  echo ""
  echo "--- Orphan articles (in SUMMARY.md, not mapped) ---"
  while read -r slug; do
    echo "  $slug"
  done < /tmp/orphans.txt
fi

if [[ $MAPPED_NOT_SUMMARY -gt 0 ]]; then
  echo ""
  echo "--- Mapped but NOT in SUMMARY.md (possible error) ---"
  while read -r slug; do
    echo "  $slug"
  done < /tmp/mapped_not_summary.txt
fi

if [[ $DISK_NOT_SUMMARY -gt 0 ]]; then
  echo ""
  echo "--- On disk but NOT in SUMMARY.md ---"
  while read -r f; do
    echo "  $f"
  done < /tmp/disk_not_summary.txt
fi

# ---------------------------------------------------------------------------
# 5. Save cross-reference outputs
# ---------------------------------------------------------------------------

cp /tmp/orphans.txt scripts/orphans.txt
cp /tmp/disk_not_summary.txt scripts/not-in-summary.txt

echo ""
echo "--- Sample renames (first 10) ---"
head -10 scripts/rename-manifest.tsv | while IFS=$'\t' read -r gb url; do
  echo "  ${gb}.md"
  echo "    -> ${url}.md"
done
echo "  ... ($MANIFEST_COUNT total)"

echo ""
echo "Outputs:"
echo "  scripts/rename-manifest.tsv   - gitbook_slug<TAB>url_slug"
echo "  scripts/orphans.txt           - slugs in SUMMARY.md but not mapped"
echo "  scripts/not-in-summary.txt    - slugs on disk but not in SUMMARY.md"
