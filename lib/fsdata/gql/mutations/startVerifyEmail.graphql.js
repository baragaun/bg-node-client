export default `
mutation StartVerifyEmail($email: String!) {
  startVerifyEmail(email: $email) {
    actionId
    actionStatus
    actionType
    attemptCount
    authTokenExpiresAt
    authToken
    expiresAt
    result
    createdAt
  }
}`;
//# sourceMappingURL=startVerifyEmail.graphql.js.map