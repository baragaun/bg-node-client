#!/usr/bin/env bash

cp "../../first-spark-server/tools/bg-code-gen/models/baseModel.ts" "./tools/bg-code-gen/models/first-spark-server/"
rsync -avP --delete "../../channels-service/tools/bg-code-gen/classes/*" "./tools/bg-code-gen/models/channels-service/"
rsync -avP --delete "../../secureid-service/tools/bg-code-gen/classes/labeledStringValue.ts" "./tools/bg-code-gen/models/secureid-service/"
rsync -avP --delete "../../secureid-service/tools/bg-code-gen/classes/sidContact.ts" "./tools/bg-code-gen/models/secureid-service/"
rsync -avP --delete "../../secureid-service/tools/bg-code-gen/classes/sidUser.ts" "./tools/bg-code-gen/models/secureid-service/"
rsync -avP --delete "../../secureid-service/tools/bg-code-gen/classes/sidUserBlock.ts" "./tools/bg-code-gen/models/secureid-service/"
rsync -avP --delete "../../secureid-service/tools/bg-code-gen/classes/sidUserPreference.ts" "./tools/bg-code-gen/models/secureid-service/"

BEFORE_STR="from '..\/"
AFTER_STR="from '..\/..\/"
find ./tools/bg-code-gen/models/channels-service \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
find ./tools/bg-code-gen/models/first-spark-server \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
find ./tools/bg-code-gen/models/secureid-service \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
