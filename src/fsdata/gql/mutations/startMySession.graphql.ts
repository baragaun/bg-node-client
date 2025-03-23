export default `
mutation M($deviceUuid: String!, $returnContentStatus: Boolean, $pushNotificationToken: String) {
  startMySessionV2(deviceUuid: $deviceUuid, returnContentStatus: $returnContentStatus, pushNotificationToken: $pushNotificationToken) {
    myUserInboxUpdatedAt
    myUserUpdatedAt
    optionsUpdatedAt
  }
}
`;
