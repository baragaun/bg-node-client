#!/usr/bin/env bash

CUR_DIR=$(pwd)

export BG_CODE_GEN_ROOT=$HOME/src/baragaun/bg-code-gen
export SERVER_ROOT=$HOME/src/baragaun/first-spark-server
export BG_NODE_CLIENT_HOME=$HOME/src/baragaun/bg-node-client
export CHANNELS_ROOT=$HOME/src/baragaun/channels-service
export SECURE_ID_ROOT=$HOME/src/baragaun/secureid-service

# source ./copy-model-defs.sh

rsync -avP --delete $BG_NODE_CLIENT_HOME/tools/bg-code-gen/                        $BG_CODE_GEN_ROOT/src/projects/bg-node-client/
rsync -avP --delete $SERVER_ROOT/tools/bg-code-gen/modelDefs/first-spark-server/*  $BG_CODE_GEN_ROOT/src/projects/bg-node-client/modelDefs/first-spark-server/
rsync -avP --delete $CHANNELS_ROOT/tools/bg-code-gen/modelDefs/*                   $BG_CODE_GEN_ROOT/src/projects/bg-node-client/modelDefs/channels-service/
rsync -avP --delete $SECURE_ID_ROOT/tools/bg-code-gen/modelDefs/*                  $BG_CODE_GEN_ROOT/src/projects/bg-node-client/modelDefs/secureid-service/

cd $BG_CODE_GEN_ROOT || exit
node --loader ts-node/esm ./src/projects/bg-node-client/index.ts

cd $CUR_DIR || exit

pnpm run lint --fix
