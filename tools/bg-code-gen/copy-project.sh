#!/usr/bin/env bash

if [[ "$BG_CHANNELS_WEB_CLIENT_ROOT" = "" ]]; then
  projectRoot="../bg-channels-web-client"
else
  projectRoot="$BG_CHANNELS_WEB_CLIENT_ROOT"
fi

rsync -avP --delete "$projectRoot/tools/bg-code-gen/" "./src/projects/bg-channels-web-client/"
