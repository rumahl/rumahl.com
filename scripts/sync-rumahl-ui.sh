#!/usr/bin/env bash
set -euo pipefail

# Refresh the vendored RUI source used by /design/rui/components.
# The website repository must build without a sibling rumahl checkout.
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RUMAHL_REPO="${RUMAHL_REPO:-$ROOT/../rumahl}"
SOURCE="$RUMAHL_REPO/frontend/packages/ui"
DEST="$ROOT/vendor/rumahl-ui"

if [ ! -d "$SOURCE/src" ]; then
  echo "RUI source not found at $SOURCE" >&2
  echo "Set RUMAHL_REPO to the rumahl repository." >&2
  exit 1
fi
if [ ! -f "$RUMAHL_REPO/LICENSE" ]; then
  echo "Apache-2.0 LICENSE not found in $RUMAHL_REPO" >&2
  exit 1
fi

rm -rf "$DEST/src"
mkdir -p "$DEST"
cp -a "$SOURCE/src" "$DEST/src"
cp "$SOURCE/package.json" "$DEST/package.json"
cp "$RUMAHL_REPO/LICENSE" "$DEST/LICENSE"

# Tests are not part of the website build and would require the RUI dev stack.
find "$DEST/src" \( -name '*.test.ts' -o -name '*.test.tsx' \) -delete
rm -rf "$DEST/src/test"

echo "Synced RUI source from $SOURCE to $DEST"
