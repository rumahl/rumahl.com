#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RUMAHL_REPO="${RUMAHL_REPO:-$ROOT/../rumahl}"
PUBLIC="$ROOT/public/design/storybook"

if [ ! -d "$RUMAHL_REPO/frontend/packages/storybook" ]; then
  echo "RUI Storybook not found. Set RUMAHL_REPO to the rumahl repository." >&2
  exit 1
fi

echo "Building RUI Storybook from $RUMAHL_REPO"
pnpm --dir "$RUMAHL_REPO/frontend" build-storybook
rm -rf "$PUBLIC/rui"
cp -a "$RUMAHL_REPO/frontend/packages/storybook/dist" "$PUBLIC/rui"

echo "Building RWDS Storybook"
if [ ! -x "$ROOT/storybook-rwds/node_modules/.bin/storybook" ]; then
  echo "RWDS Storybook dependencies missing." >&2
  echo "Run: pnpm --dir storybook-rwds install --ignore-workspace" >&2
  echo "Then: pnpm --dir storybook-rwds approve-builds --all --ignore-workspace" >&2
  exit 1
fi
pnpm --dir "$ROOT/storybook-rwds" build-storybook
rm -rf "$PUBLIC/rwds"
cp -a "$ROOT/storybook-rwds/dist" "$PUBLIC/rwds"

echo "Synced Storybooks to $PUBLIC"
