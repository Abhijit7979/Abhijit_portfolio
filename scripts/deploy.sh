#!/bin/bash
# Deploy this portfolio to Vercel using the vercel-deploy skill.
# Usage: ./scripts/deploy.sh   or   bash scripts/deploy.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SKILL_SCRIPT="$REPO_ROOT/.cursor/skills/vercel-deploy/scripts/deploy.sh"

if [ ! -f "$SKILL_SCRIPT" ]; then
  echo "Error: vercel-deploy skill script not found at $SKILL_SCRIPT"
  exit 1
fi

exec bash "$SKILL_SCRIPT" "$REPO_ROOT"
