#!/usr/bin/env bash
#
# One-command setup for the portfolio.
# Installs dependencies and starts the dev server.
#
# Usage:
#   ./setup.sh            # install + start dev server
#   ./setup.sh --build    # install + production build, then start
#
set -euo pipefail

# Always run from the directory this script lives in.
cd "$(dirname "$0")"

# ---- pretty logging -------------------------------------------------------
BOLD="$(printf '\033[1m')"; BLUE="$(printf '\033[34m')"
GREEN="$(printf '\033[32m')"; RED="$(printf '\033[31m')"
YELLOW="$(printf '\033[33m')"; RESET="$(printf '\033[0m')"
info()  { printf "%s==>%s %s\n" "$BLUE$BOLD" "$RESET" "$1"; }
ok()    { printf "%s✓%s %s\n" "$GREEN" "$RESET" "$1"; }
warn()  { printf "%s!%s %s\n" "$YELLOW" "$RESET" "$1"; }
die()   { printf "%s✗ %s%s\n" "$RED$BOLD" "$1" "$RESET" >&2; exit 1; }

MODE="dev"
[ "${1:-}" = "--build" ] && MODE="build"

# ---- 1. verify Node.js ----------------------------------------------------
info "Checking prerequisites..."
command -v node >/dev/null 2>&1 || die "Node.js is not installed. Install Node 18.18+ from https://nodejs.org and re-run."

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$NODE_MAJOR" -lt 18 ]; then
  die "Node.js $(node -v) is too old. This project needs Node 18.18 or newer."
fi
ok "Node.js $(node -v) detected."

command -v npm >/dev/null 2>&1 || die "npm is not installed (it normally ships with Node.js)."
ok "npm $(npm -v) detected."

# ---- 2. install dependencies ---------------------------------------------
info "Installing dependencies (this can take a minute)..."
if [ -f package-lock.json ]; then
  npm ci || npm install
else
  npm install
fi
ok "Dependencies installed."

# ---- 3. ensure placeholder images exist ----------------------------------
if [ ! -d "public/images/projects" ]; then
  info "Generating placeholder images..."
  node scripts/gen-placeholders.mjs || warn "Could not generate placeholders (continuing anyway)."
fi

# ---- 4. optional production build ----------------------------------------
if [ "$MODE" = "build" ]; then
  info "Creating production build..."
  npm run build
  ok "Build complete."
  info "Starting production server at http://localhost:3000 ..."
  exec npm run start
fi

# ---- 5. start dev server --------------------------------------------------
ok "Setup complete!"
info "Starting the dev server at ${BOLD}http://localhost:3000${RESET} (press Ctrl+C to stop)..."
exec npm run dev
