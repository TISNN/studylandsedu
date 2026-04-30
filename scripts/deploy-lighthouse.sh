#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REMOTE_HOST="${LIGHTHOUSE_HOST:-root@101.43.94.36}"
REMOTE_DIST_DIR="${LIGHTHOUSE_DIST_DIR:-/opt/xueyu/dist}"
SITE_URL="${SITE_URL:-https://www.studylandsedu.com}"
SKIP_BUILD="${SKIP_BUILD:-0}"

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

require_cmd npm
require_cmd rsync
require_cmd ssh
require_cmd curl

cd "$ROOT_DIR"

if [[ "$SKIP_BUILD" != "1" ]]; then
  echo "Building site locally..."
  npm run build
else
  echo "Skipping local build because SKIP_BUILD=1"
fi

if [[ ! -f "$ROOT_DIR/dist/index.html" ]]; then
  echo "Build output missing: $ROOT_DIR/dist/index.html" >&2
  exit 1
fi

echo "Ensuring remote dist directory exists..."
ssh "$REMOTE_HOST" "mkdir -p '$REMOTE_DIST_DIR'"

echo "Syncing dist/ to $REMOTE_HOST:$REMOTE_DIST_DIR ..."
rsync -av --delete "$ROOT_DIR/dist/" "$REMOTE_HOST:$REMOTE_DIST_DIR/"

echo "Verifying deployed HTML..."
html="$(curl -fsSL "$SITE_URL")"
if [[ "$html" != *"/assets/"* ]]; then
  echo "Verification failed: homepage does not reference built assets." >&2
  exit 1
fi

if [[ "$html" == *"/src/main.tsx"* ]]; then
  echo "Verification failed: homepage is still serving source entrypoint." >&2
  exit 1
fi

asset_path="$(printf '%s' "$html" | grep -oE '/assets/index-[^"]+\.js' | head -n 1 || true)"
if [[ -z "$asset_path" ]]; then
  echo "Verification failed: could not find built JS asset in homepage." >&2
  exit 1
fi

echo "Verifying asset content type..."
content_type="$(curl -fsSI "$SITE_URL$asset_path" | tr -d '\r' | awk -F': ' 'tolower($1) == "content-type" {print tolower($2)}' | tail -n 1)"
if [[ "$content_type" != text/javascript* && "$content_type" != application/javascript* ]]; then
  echo "Verification failed: unexpected asset content type: ${content_type:-<empty>}" >&2
  exit 1
fi

echo "Deploy succeeded."
echo "Site: $SITE_URL"
echo "Asset: $asset_path"
