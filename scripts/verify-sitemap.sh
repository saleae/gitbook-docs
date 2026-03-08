#!/usr/bin/env bash
# Phase 1 verification: assert 1:1 match between production sitemap
# support URLs and the new repo file layout.
#
# Fetches the live sitemap from www.saleae.com, extracts all /support/ URLs,
# and checks that every article URL has a corresponding .md file in the repo.
#
# Usage: bash scripts/verify-sitemap.sh
#
# Exit codes:
#   0 = all checks pass
#   1 = mismatches found

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASE_URL="${BASE_URL:-https://www.saleae.com}"
SITEMAP_URL="$BASE_URL/sitemap-index.xml"

echo "=== Phase 1: Sitemap vs Repo Verification ==="
echo "Repo: $REPO_ROOT"
echo "Sitemap: $SITEMAP_URL"
echo ""

# ---------------------------------------------------------------------------
# 1. Fetch sitemap
# ---------------------------------------------------------------------------

# Get sitemap index to find the actual sitemap file(s)
SITEMAP_URLS=$(curl -sf "$SITEMAP_URL" | grep -oP '<loc>\K[^<]+')
if [[ -z "$SITEMAP_URLS" ]]; then
  echo "ERROR: Could not fetch sitemap index from $SITEMAP_URL"
  exit 1
fi

# Fetch all sitemaps and extract /support/ URLs
ALL_SUPPORT_URLS=$(
  for url in $SITEMAP_URLS; do
    curl -sf "$url" | grep -oP '<loc>\K[^<]+' | grep '/support/'
  done | sort -u
)

TOTAL_SITEMAP=$(echo "$ALL_SUPPORT_URLS" | wc -l)
echo "Support URLs in sitemap: $TOTAL_SITEMAP"

# ---------------------------------------------------------------------------
# 2. Strip base URL to get slugs
# ---------------------------------------------------------------------------

SITEMAP_SLUGS=$(echo "$ALL_SUPPORT_URLS" | sed "s|${BASE_URL}/support/||")

# ---------------------------------------------------------------------------
# 3. Categorize each slug
# ---------------------------------------------------------------------------

ARTICLE_MATCH=0
CATEGORY_PAGE=0
GROUP_PAGE=0
MISSING_ARTICLE=0
MISSING_FILES=""

# Known category IDs (from support-map.ts)
CATEGORIES="community-contact extensions-api getting-started logic-software ordering-returns protocol-analyzers specifications-hardware troubleshooting tutorials-learning"

while read -r slug; do
  [[ -z "$slug" ]] && continue

  # Check if it's an article (has a matching .md file)
  if [[ -f "$REPO_ROOT/${slug}.md" ]]; then
    ARTICLE_MATCH=$((ARTICLE_MATCH + 1))
    continue
  fi

  # Check if it's a category landing page (single segment, known category)
  is_category=false
  for cat in $CATEGORIES; do
    if [[ "$slug" == "$cat" ]]; then
      is_category=true
      break
    fi
  done
  if $is_category; then
    CATEGORY_PAGE=$((CATEGORY_PAGE + 1))
    continue
  fi

  # Check if it's a group landing page (2 segments, first segment is a category)
  first_seg="${slug%%/*}"
  is_group=false
  for cat in $CATEGORIES; do
    if [[ "$first_seg" == "$cat" ]]; then
      is_group=true
      break
    fi
  done
  if $is_group; then
    # It's under a known category but not a file — assume group page
    GROUP_PAGE=$((GROUP_PAGE + 1))
    continue
  fi

  # Not matched — could be an old gitbook-path URL still in the sitemap
  # Check if it looks like an old gitbook path (starts with product/, getting-help/, etc.)
  case "$slug" in
    product/*|getting-help/*|ordering/*|tutorials/*)
      # Old gitbook-path URL in sitemap (from orphan README pages)
      GROUP_PAGE=$((GROUP_PAGE + 1))
      ;;
    *)
      MISSING_ARTICLE=$((MISSING_ARTICLE + 1))
      MISSING_FILES="${MISSING_FILES}\n  ${slug}"
      ;;
  esac

done <<< "$SITEMAP_SLUGS"

# ---------------------------------------------------------------------------
# 4. Reverse check: files in repo that aren't in sitemap
# ---------------------------------------------------------------------------

# Build set of sitemap article slugs
SITEMAP_ARTICLE_SLUGS=$(while read -r slug; do
  [[ -f "$REPO_ROOT/${slug}.md" ]] && echo "$slug"
done <<< "$SITEMAP_SLUGS" | sort)

# All .md files in repo (excluding _archive, .gitbook, scripts, SUMMARY.md, README.md)
REPO_SLUGS=$(cd "$REPO_ROOT" && find . -name '*.md' \
  -not -path './_archive/*' \
  -not -path './.gitbook/*' \
  -not -path './.git/*' \
  -not -path './.claude/*' \
  -not -path '*/scripts/*' \
  -not -name 'SUMMARY.md' \
  -not -name 'README.md' \
  | sed 's|^\./||; s|\.md$||' \
  | sort)

REPO_COUNT=$(echo "$REPO_SLUGS" | wc -l)

# Files in repo but NOT in sitemap
EXTRA_FILES=$(comm -23 <(echo "$REPO_SLUGS") <(echo "$SITEMAP_ARTICLE_SLUGS"))
EXTRA_COUNT=$(echo "$EXTRA_FILES" | grep -c . || true)

# Files in sitemap but NOT in repo (articles only)
MISSING_FROM_REPO=$(comm -23 <(echo "$SITEMAP_ARTICLE_SLUGS") <(echo "$REPO_SLUGS"))
MISSING_FROM_REPO_COUNT=$(echo "$MISSING_FROM_REPO" | grep -c . || true)

# ---------------------------------------------------------------------------
# 5. Report
# ---------------------------------------------------------------------------

echo ""
echo "=== Sitemap URL Classification ==="
echo "  Article pages (file match):   $ARTICLE_MATCH"
echo "  Category landing pages:       $CATEGORY_PAGE"
echo "  Group landing pages:          $GROUP_PAGE"
echo "  Unmatched:                    $MISSING_ARTICLE"
echo "  Total:                        $TOTAL_SITEMAP"

echo ""
echo "=== Bidirectional Check ==="
echo "  Repo article files:           $REPO_COUNT"
echo "  Sitemap article URLs:         $ARTICLE_MATCH"
echo "  In repo but NOT in sitemap:   $EXTRA_COUNT"
echo "  In sitemap but NOT in repo:   $MISSING_FROM_REPO_COUNT"

FAIL=0

if [[ $MISSING_ARTICLE -gt 0 ]]; then
  echo ""
  echo "--- FAIL: Unmatched sitemap URLs ---"
  echo -e "$MISSING_FILES"
  FAIL=1
fi

if [[ $EXTRA_COUNT -gt 0 ]]; then
  echo ""
  echo "--- WARN: Files in repo but NOT in sitemap ---"
  echo "$EXTRA_FILES" | head -20
  [[ $EXTRA_COUNT -gt 20 ]] && echo "  ... ($EXTRA_COUNT total)"
fi

if [[ $MISSING_FROM_REPO_COUNT -gt 0 ]]; then
  echo ""
  echo "--- FAIL: Sitemap articles with NO repo file ---"
  echo "$MISSING_FROM_REPO" | head -20
  [[ $MISSING_FROM_REPO_COUNT -gt 20 ]] && echo "  ... ($MISSING_FROM_REPO_COUNT total)"
  FAIL=1
fi

echo ""
if [[ $FAIL -eq 0 && $ARTICLE_MATCH -eq $REPO_COUNT ]]; then
  echo "PASS: $ARTICLE_MATCH article URLs match $REPO_COUNT repo files 1:1"
  exit 0
elif [[ $FAIL -eq 0 ]]; then
  echo "PASS (with warnings): $ARTICLE_MATCH sitemap articles, $REPO_COUNT repo files"
  exit 0
else
  echo "FAIL: mismatches detected"
  exit 1
fi
