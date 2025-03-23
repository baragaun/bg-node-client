export default `
mutation M($returnContentStatus: Boolean, $pushNotificationToken: String) {
  startMySessionV2(returnContentStatus: $returnContentStatus, pushNotificationToken: $pushNotificationToken) {
    myUserInboxUpdatedAt
    myUserUpdatedAt
    optionsUpdatedAt
  }
}
`;
//# sourceMappingURL=startMySession.graphql.js.map