#!/usr/bin/env bash

# see: https://stackoverflow.com/questions/27988160/why-does-rm-f-ask-me-for-confirmation-on-zsh
# setopt localoptions rmstarsilent

# rm -f ./tools/bg-code-gen/models/channels-service/*
# rm -f ./tools/bg-code-gen/models/secureid-service/*
# rm -f ./tools/bg-code-gen/models/first-spark-server/*

cp ../first-spark-server/tools/bg-code-gen/models/baseModel.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/channel.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/channelInbox.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/channelInvitation.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/channelMessage.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/channelParticipant.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/company.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/contact.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/multiStepAction.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/multiStepActionInput.ts "./tools/bg-code-gen/models/first-spark-server/"
cp ../first-spark-server/tools/bg-code-gen/models/myUser.ts "./tools/bg-code-gen/models/first-spark-server/"

cp ../channels-service/tools/bg-code-gen/models/* "./tools/bg-code-gen/models/channels-service/"

cp ../secureid-service/tools/bg-code-gen/models/labeledStringValue.ts "./tools/bg-code-gen/models/secureid-service/"
cp ../secureid-service/tools/bg-code-gen/models/sidCompany.ts "./tools/bg-code-gen/models/secureid-service/"
cp ../secureid-service/tools/bg-code-gen/models/sidContact.ts "./tools/bg-code-gen/models/secureid-service/"
cp ../secureid-service/tools/bg-code-gen/models/sidMultiStepAction.ts "./tools/bg-code-gen/models/secureid-service/"
cp ../secureid-service/tools/bg-code-gen/models/sidMultiStepActionInput.ts "./tools/bg-code-gen/models/secureid-service/"
cp ../secureid-service/tools/bg-code-gen/models/sidUser.ts "./tools/bg-code-gen/models/secureid-service/"
cp ../secureid-service/tools/bg-code-gen/models/sidUserBlock.ts "./tools/bg-code-gen/models/secureid-service/"
cp ../secureid-service/tools/bg-code-gen/models/sidUserPreferences.ts "./tools/bg-code-gen/models/secureid-service/"

BEFORE_STR="from '..\/"
AFTER_STR="from '..\/..\/"
find ./tools/bg-code-gen/models/channels-service \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
find ./tools/bg-code-gen/models/first-spark-server \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
find ./tools/bg-code-gen/models/secureid-service \( ! -regex '.*/\..*' \) -type f | LC_ALL=C  xargs sed -i '' "s/$BEFORE_STR/$AFTER_STR/g"
