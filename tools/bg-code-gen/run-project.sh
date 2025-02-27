#!/usr/bin/env bash

. ./src/projects/bg-node-client/copy-project.sh
node --loader ts-node/esm ./src/projects/bg-node-client/index.ts
