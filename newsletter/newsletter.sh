#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TOOLS_DIR="$SCRIPT_DIR/tools"

if [ ! -d "$TOOLS_DIR/node_modules" ]; then
    echo "Installing newsletter dependencies..."
    (cd "$TOOLS_DIR" && npm install)
fi

node "$TOOLS_DIR/src/build.js" "$@"
