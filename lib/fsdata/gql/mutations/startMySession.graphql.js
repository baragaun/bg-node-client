export default `
mutation StartMySession($deviceUuid: String!, $pushNotificationToken: String) {
  startMySession(deviceUuid: $deviceUuid, pushNotificationToken: $pushNotificationToken)
}
`;
//# sourceMappingURL=startMySession.graphql.js.map