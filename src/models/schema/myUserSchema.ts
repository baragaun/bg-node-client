export const MyUserSchema = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 32,
    },
    adminNotes: {
      type: 'string',
    },
    metadata: {},
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
    createdBy: {
      type: 'string',
      maxLength: 32,
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
    },
    updatedBy: {
      type: 'string',
      maxLength: 32,
    },
    deletedAt: {
      type: 'string',
      format: 'date-time',
    },
    deletedBy: {
      type: 'string',
      maxLength: 32,
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    userHandle: {
      type: 'string',
    },
    phoneNumber: {
      type: 'string',
    },
    phoneNumberUpdatedAt: {
      type: 'string',
      format: 'date-time',
    },
    isPhoneNumberVerified: {
      type: 'boolean',
    },
    email: {
      type: 'string',
    },
    emailSource: {
      description: 'The source of the email address, e.g. "google", "facebook", etc.',
      type: 'string',
    },
    emailUpdatedAt: {
      type: 'string',
      format: 'date-time',
    },
    isEmailVerified: {
      type: 'boolean',
    },
    genderTextId: {
      type: 'string',
    },
    cityOfResidence: {
      type: 'string',
    },
    regionOfResidence: {
      type: 'string',
    },
    countryOfResidenceTextId: {
      type: 'string',
    },
    postalCode: {
      type: 'string',
    },
    avatarUrl: {
      type: 'string',
    },
    websites: {},
    authType: {},
    inviteCode: {
      type: 'string',
    },
    passwordHash: {
      type: 'string',
    },
    tfaBackupCodes: {
      type: 'string',
    },
    passwordUpdatedAt: {
      type: 'string',
      format: 'date-time',
    },
    preferredLanguageTextId: {
      type: 'string',
    },
    spokenLanguagesTextIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    selectedUiLanguageTextId: {},
    fallbackUiLanguageTextId: {},
    discoverable: {
      description:
        'If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally.',
      type: 'boolean',
    },
    roles: {},
    appFeatures: {},
    source: {
      type: 'string',
    },
    timezone: {
      type: 'string',
    },
    preferences: {},
    trustLevel: {
      type: 'integer',
    },
    signedInAt: {
      type: 'string',
      format: 'date-time',
    },
    signedOutAt: {
      type: 'string',
      format: 'date-time',
    },
    latestActivityAt: {
      type: 'string',
      format: 'date-time',
    },
    userDevices: {},
    userBlocks: {},
    contacts: {},
    inactivatedAt: {
      type: 'string',
      format: 'date-time',
    },
    inactivatedBy: {
      type: 'string',
      maxLength: 32,
    },
    termsAndConditionsAcceptedAt: {
      type: 'string',
      format: 'date-time',
    },
    optIntoNewsletter: {
      type: 'boolean',
    },
    onboardingStage: {
      type: 'string',
    },
    suspendedAt: {
      type: 'string',
      format: 'date-time',
    },
    suspendedBy: {
      type: 'string',
      maxLength: 32,
    },
    addedToBgVaultAt: {
      type: 'string',
      format: 'date-time',
    },
    companyIds: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 32,
      },
    },
    companies: {},
    groupIds: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 32,
      },
    },
    parentGroupIds: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 32,
      },
    },
    externalGroupIds: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 32,
      },
    },
    pronounsTextIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    groupMemberships: {},
    seeksHelp: {
      type: 'boolean',
    },
    offersHelp: {
      type: 'boolean',
    },
    birthYear: {
      type: 'integer',
    },
    ethnicity: {
      type: 'string',
    },
    educationLevelTextId: {
      type: 'string',
    },
    personalBio: {
      type: 'string',
    },
    yearsManagementExperience: {
      type: 'integer',
    },
    yearsOwnershipExperience: {
      type: 'integer',
    },
    academicExperienceIds: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 32,
      },
    },
    academicExperiences: {},
    genderSelfDescribed: {
      description: 'This attribute is only used by the MM2 synchronizer.',
      type: 'string',
    },
    businessExperienceIds: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 32,
      },
    },
    businessExperiences: {},
    cityOfOrigin: {
      type: 'string',
    },
    regionOfOrigin: {
      type: 'string',
    },
    countryOfOriginTextId: {
      type: 'string',
    },
    isOnVacation: {
      type: 'boolean',
    },
    avatarAsset: {},
    profileRoleHistory: {},
    ssoIdp: {
      type: 'string',
    },
    originatedInMm2: {
      description: 'Records whether a user was originally created in MM2.',
      type: 'boolean',
    },
    syncedWithMm2At: {
      description: 'This attribute is only used by the MM2 synchronizer.',
      type: 'string',
      format: 'date-time',
    },
    mm2PasswordHash: {
      description: 'This is the MM2 password hash.',
      type: 'string',
    },
    mm2Id: {
      description: 'This attribute is only used by the MM2 synchronizer.',
      type: 'string',
    },
    mm2PhotoOriginal: {
      description: 'This attribute is only used by the MM2 synchronizer.',
      type: 'string',
    },
    mm2BasicAccountCompleted: {
      description: 'For MM2 users, this means a profile is completed.',
      type: 'boolean',
    },
    hasSignedInToMm3: {
      description: 'Records whether a user has logged into MM3.',
      type: 'boolean',
    },
    hasSignedInToMm2: {
      description: 'Records whether a user has logged into MM2.',
      type: 'boolean',
    },
    mentor: {
      description: 'This attribute is a copy of the mentor group membership.',
    },
    mentee: {
      description: 'This attribute is a copy of the mentee group membership.',
    },
  },
  required: ['id'],
};
