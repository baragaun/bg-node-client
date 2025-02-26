#!/usr/bin/env bash

# see: https://stackoverflow.com/questions/27988160/why-does-rm-f-ask-me-for-confirmation-on-zsh
setopt localoptions rmstarsilent

rm -f ./tools/bg-code-gen/models/channels-service/*
rm -f ./tools/bg-code-gen/models/secureid-service/*
rm -f ./tools/bg-code-gen/models/first-spark-server/*

cp ../first-spark-server/tools/bg-code-gen/models/baseModel.ts "./tools/bg-code-gen/models/first-spark-server/"
rsync -avP --delete ../channels-service/tools/bg-code-gen/models/* "./tools/bg-code-gen/models/channels-service/"
rsync -avP --delete ../secureid-service/tools/bg-code-gen/models/labeledStringValue.ts "./tools/bg-code-gen/models/secureid-service/"
rsync -avP --delete ../secureid-service/tools/bg-code-gen/models/sidContact.ts "./tools/bg-code-gen/models/secureid-service/"
rsync -avP --delete ../secureid-service/tools/bg-code-gen/models/sidUser.ts "./tools/bg-code-gen/models/secureid-service/"
rsync -avP --delete ../secureid-service/tools/bg-code-gen/models/sidUserBlock.ts "./tools/bg-code-gen/models/secureid-service/"
rsync -avP --delete ../secureid-service/tools/bg-code-gen/models/sidUserPreferences.ts "./tools/bg-code-gen/models/secureid-service/"

BEFORE_STR="from '..\/"
AFTER_STR="from '..\/..\/"
find ./tools/bg-code-gen/models/channels-service \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
find ./tools/bg-code-gen/models/first-spark-server \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
find ./tools/bg-code-gen/models/secureid-service \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
