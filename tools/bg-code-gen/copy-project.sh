#!/usr/bin/env bash

if [[ "$BG_NODE_CLIENT_ROOT" = "" ]]; then
  projectRoot="../bg-node-client"
else
  projectRoot="$BG_NODE_CLIENT_ROOT"
fi

rsync -avP --delete "$projectRoot/tools/bg-code-gen/" "./src/projects/bg-node-client/"
