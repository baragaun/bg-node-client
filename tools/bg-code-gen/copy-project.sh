#!/usr/bin/env bash

if [[ "$CHANNELS_ROOT" = "" ]]; then
  projectRoot="../bg-channels-web-client"
else
  projectRoot="$CHANNELS_ROOT"
fi

rsync -avP --delete "$projectRoot/tools/bg-code-gen/" "./src/projects/bg-channels-web-client/"
