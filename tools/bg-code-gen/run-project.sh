#!/usr/bin/env bash

. ./src/projects/bg-channels-web-client/copy-project.sh
node --loader ts-node/esm ./src/projects/bg-channels-web-client/index.ts
