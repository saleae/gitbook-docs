#!/usr/bin/env bash
# Phase 1: Execute renames from the manifest.
#
# Reads scripts/rename-manifest.tsv and performs git mv for each entry.
# Creates directories as needed.
#
# Usage:
#   bash scripts/phase1-rename.sh [--dry-run]
#
# With --dry-run, prints what would happen without doing it.

set -euo pipefail

DRY_RUN="${1:-}"
MANIFEST="scripts/rename-manifest.tsv"
GITBOOK_ROOT="$(pwd)"

if [[ ! -f "$MANIFEST" ]]; then
  echo "ERROR: $MANIFEST not found. Run phase1-manifest.sh first."
  exit 1
fi

TOTAL=$(wc -l < "$MANIFEST")
MOVED=0
SKIPPED=0
ERRORS=0

echo "=== Phase 1: Rename Execution ==="
echo "Manifest entries: $TOTAL"
[[ "$DRY_RUN" == "--dry-run" ]] && echo "MODE: DRY RUN"
echo ""

while IFS=$'\t' read -r gb_slug url_slug; do
  # Determine source file path
  # Could be {slug}.md or {slug}/README.md
  if [[ -f "${gb_slug}.md" ]]; then
    src="${gb_slug}.md"
  elif [[ -f "${gb_slug}/README.md" ]]; then
    src="${gb_slug}/README.md"
  else
    echo "  SKIP (not found): ${gb_slug}.md"
    ((SKIPPED++)) || true
    continue
  fi

  dst="${url_slug}.md"

  # Skip if already in the right place
  if [[ "$src" == "$dst" ]]; then
    ((SKIPPED++)) || true
    continue
  fi

  # Create target directory
  dst_dir="$(dirname "$dst")"
  if [[ "$DRY_RUN" == "--dry-run" ]]; then
    echo "  mv $src -> $dst"
  else
    mkdir -p "$dst_dir"
    git mv "$src" "$dst"
  fi
  ((MOVED++)) || true

done < "$MANIFEST"

echo ""
echo "Moved: $MOVED"
echo "Skipped (already in place or not found): $SKIPPED"
echo "Errors: $ERRORS"
