export default `
mutation StartMySession($deviceUuid: String!, $pushNotificationToken: String) {
  startMySession(deviceUuid: $deviceUuid, pushNotificationToken: $pushNotificationToken)
}
`;
