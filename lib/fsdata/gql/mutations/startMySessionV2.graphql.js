export default `
mutation M($returnContentStatus: Boolean, $pushNotificationToken: String) {
  startMySessionV2(returnContentStatus: $returnContentStatus, pushNotificationToken: $pushNotificationToken) {
    myUserInboxUpdatedAt
    myUserUpdatedAt
    optionsUpdatedAt
  }
}
`;
//# sourceMappingURL=startMySessionV2.graphql.js.map