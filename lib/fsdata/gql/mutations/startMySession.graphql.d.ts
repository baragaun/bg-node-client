declare const _default: "\nmutation M($deviceUuid: String!, $returnContentStatus: Boolean, $pushNotificationToken: String) {\n  startMySessionV2(deviceUuid: $deviceUuid, returnContentStatus: $returnContentStatus, pushNotificationToken: $pushNotificationToken) {\n    myUserInboxUpdatedAt\n    myUserUpdatedAt\n    optionsUpdatedAt\n  }\n}\n";
export default _default;
