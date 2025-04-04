export default `
query FindMyUser {
  findMyUser {
    id
    adminNotes
    metadata {
      updatedAt
      totalTimeOnPlatform
      channelsMetadata {
        mentoringSessionCount
      }
      groupsMetadata {
        groupCount
        updatedAt
      }
    }
    createdAt
    createdBy
    updatedAt
    updatedBy
    deletedAt
    deletedBy
    firstName
    lastName
    userHandle
    phoneNumber
    phoneNumberUpdatedAt
    isPhoneNumberVerified
    email
    emailUpdatedAt
    isEmailVerified
    emailSource
    genderTextId
    cityOfResidence
    countryOfResidenceTextId
    postalCode
    avatarUrl
    websites {
      label
      value
      tags
    }
    authType
    tfaBackupCodes
    passwordUpdatedAt
    preferredLanguageTextId
    spokenLanguagesTextIds
    selectedUiLanguageTextId
    discoverable
    roles
    appFeatures
    source
    timezone
    preferences {
      id
      createdAt
      createdBy
      updatedAt
      updatedBy
      deletedAt
      deletedBy
      shareEmail
      sharePhoneNumber
      showWelcomeMessage
      notificationOptions {
        notificationType
        enableEmail
        enableInAppMessage
        enablePushNotification
        enableSms
        frequency
      }
    }
    trustLevel
    signedInAt
    signedOutAt
    latestActivityAt
    userBlocks {
      userId
      reasonTextId
      notes
      adminNotes
      createdAt
      syncedWithMm2At
      mm2Id
    }
    inactivatedAt
    inactivatedBy
    termsAndConditionsAcceptedAt
    optIntoNewsletter
    onboardingStage
    suspendedAt
    suspendedBy
    companyIds
    groupIds
    parentGroupIds
    externalGroupIds
    groupMemberships {
      groupId
      groupIdent
      id
      roles
      userId
    }
    seeksHelp
    offersHelp
    birthYear
    educationLevelTextId
    genderSelfDescribed
    cityOfOrigin
    isOnVacation
    avatarAsset {
      id
      adminNotes
      createdAt
      createdBy
      updatedAt
      updatedBy
      deletedAt
      deletedBy
      ownerId
      ownerModelType
      assetType
      hostingService
      url
      path
      s3Bucket
      s3Key
      mimeType
      uploadUrl
      uploadUrlExpiresAt
      uploadedAt
      expiresAt
    }
    fallbackUiLanguageTextId
  }
}
`;
