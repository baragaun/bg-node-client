export default `
mutation VerifyMultiStepActionToken($input: VerifyMultiStepActionTokenInput!) {
  verifyMultiStepActionToken(input: $input) {
    actionId
    actionStatus
    actionType
    attemptCount
    authToken
    emailVerifiedAt
    expiresAt
    createdAt
    createdBy
  }
}`;
