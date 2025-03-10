export default `
query GetMultiStepActionProgress($actionId: String!, $confirmToken: String) {
  getMultiStepActionProgress(actionId: $actionId, confirmToken: $confirmToken) {
    actionId
    userId
    actionType
    actionStatus
    notificationMethod
    result
    attemptCount
    notificationSentAt
    notificationResult
    notificationId
    textData
    report
    emailPassed
    emailUpdatedAt
    emailVerifiedAt
    errors {
      id
      adminNotes
      createdAt
      createdBy
      updatedAt
      updatedBy
      deletedAt
      deletedBy
      key
      messageId
      message
    }
    authToken
    authTokenExpiresAt
    passwordPassed
    passwordResettedAt
    passwordUpdatedAt
    phoneNumberPassed
    phoneNumberUpdatedAt
    phoneNumberVerifiedAt
    signedInAt
    expiresAt
    events {
      time
      modelEventType
      message
    }
    createdAt
    createdBy
    updatedAt
    updatedBy
    deletedAt
    deletedBy
  }
}
`;
//# sourceMappingURL=getMultiStepActionProgress.graphql.js.map