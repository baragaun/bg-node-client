export default `
mutation M($input: MultiStepActionInput!) {
  createMultiStepAction(input: $input) {
    actionStatus
    actionType
    adminNotes
    attemptCount
    confirmToken
    createdAt
    createdBy
    deletedAt
    deletedBy
    deviceUuid
    email
    emailPassed
    emailUpdatedAt
    emailVerifiedAt
    errors {
      adminNotes
      createdAt
      createdBy
      deletedAt
      deletedBy
      events
      id
      key
      message
      messageId
      metadata
      updatedAt
      updatedBy
    }
    events {
      message
      modelEventType
      time
    }
    expiresAt
    id
    notificationId
    notificationMethod
    notificationResult
    notificationSentAt
    password
    passwordPassed
    passwordResettedAt
    passwordUpdatedAt
    phoneNumber
    phoneNumberPassed
    phoneNumberUpdatedAt
    phoneNumberVerifiedAt
    report
    result
    signedInAt
    textData
    tfaBackupCodes
    updatedAt
    updatedBy
    userHandle
    userId
    userIdent
  }
}`;
//# sourceMappingURL=createMultiStepAction.graphql.js.map