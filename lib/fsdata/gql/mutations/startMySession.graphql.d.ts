declare const _default: "\nmutation M($returnContentStatus: Boolean, $pushNotificationToken: String) {\n  startMySessionV2(returnContentStatus: $returnContentStatus, pushNotificationToken: $pushNotificationToken) {\n    myUserInboxUpdatedAt\n    myUserUpdatedAt\n    optionsUpdatedAt\n  }\n}\n";
export default _default;
