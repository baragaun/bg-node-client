#!/usr/bin/env bash

cp "../../first-spark-server/tools/bg-code-gen/models/baseModel.ts" "./tools/bg-code-gen/models/first-spark-server/"
rsync -avP --delete "../../channels-service/tools/bg-code-gen/classes/*" "./tools/bg-code-gen/models/channels-service/"

BEFORE_STR="from '..\/"
AFTER_STR="from '..\/..\/"
find ./tools/bg-code-gen/models/channels-service \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
find ./tools/bg-code-gen/models/first-spark-server \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
