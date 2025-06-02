import * as $$Scalar from './scalar.js';
//
//
//
//
//
//
// ==================================================================================================
//                                           ScalarStandard
// ==================================================================================================
//
//
//
//
//
//
const Int = $$Scalar.Int;
const ID = $$Scalar.ID;
const String = $$Scalar.String;
const Boolean = $$Scalar.Boolean;
const Float = $$Scalar.Float;
//
//
//
//
//
//
// ==================================================================================================
//                                            ScalarCustom
// ==================================================================================================
//
//
//
//
//
//
const DateTimeISO = 'DateTimeISO';
const Long = 'Long';
//
//
//
//
//
//
// ==================================================================================================
//                                                Enum
// ==================================================================================================
//
//
//
//
//
//
const GroupMembershipRole = {
    k: 'enum',
    n: 'GroupMembershipRole',
};
const ModelEventType = {
    k: 'enum',
    n: 'ModelEventType',
};
const OptionType = {
    k: 'enum',
    n: 'OptionType',
};
const UiLanguage = {
    k: 'enum',
    n: 'UiLanguage',
};
const MastercardCardType = {
    k: 'enum',
    n: 'MastercardCardType',
};
const UserIdentType = {
    k: 'enum',
    n: 'UserIdentType',
};
const AuthType = {
    k: 'enum',
    n: 'AuthType',
};
const UserRole = {
    k: 'enum',
    n: 'UserRole',
};
const AppFeature = {
    k: 'enum',
    n: 'AppFeature',
};
const NotificationType = {
    k: 'enum',
    n: 'NotificationType',
};
const IdentityProvider = {
    k: 'enum',
    n: 'IdentityProvider',
};
const ModelType = {
    k: 'enum',
    n: 'ModelType',
};
const UploadedAssetType = {
    k: 'enum',
    n: 'UploadedAssetType',
};
const AssetHostingService = {
    k: 'enum',
    n: 'AssetHostingService',
};
const UserProfileRole = {
    k: 'enum',
    n: 'UserProfileRole',
};
const AppAction = {
    k: 'enum',
    n: 'AppAction',
};
const ChannelType = {
    k: 'enum',
    n: 'ChannelType',
};
const ChannelInvitationStatus = {
    k: 'enum',
    n: 'ChannelInvitationStatus',
};
const ChannelMessageType = {
    k: 'enum',
    n: 'ChannelMessageType',
};
const ChannelParticipantRole = {
    k: 'enum',
    n: 'ChannelParticipantRole',
};
const ModerationConcernType = {
    k: 'enum',
    n: 'ModerationConcernType',
};
const GroupRuleEventType = {
    k: 'enum',
    n: 'GroupRuleEventType',
};
const SortDirection = {
    k: 'enum',
    n: 'SortDirection',
};
const IncludeFilterOption = {
    k: 'enum',
    n: 'IncludeFilterOption',
};
const FederatedIdentityProvider = {
    k: 'enum',
    n: 'FederatedIdentityProvider',
};
const AdminTaskType = {
    k: 'enum',
    n: 'AdminTaskType',
};
const AdminTaskResult = {
    k: 'enum',
    n: 'AdminTaskResult',
};
const ChannelInvitationDirection = {
    k: 'enum',
    n: 'ChannelInvitationDirection',
};
const UserSearchType = {
    k: 'enum',
    n: 'UserSearchType',
};
const UserSearchFieldOption = {
    k: 'enum',
    n: 'UserSearchFieldOption',
};
const UserSearchSubscriptionType = {
    k: 'enum',
    n: 'UserSearchSubscriptionType',
};
const ServiceRequestType = {
    k: 'enum',
    n: 'ServiceRequestType',
};
const ServiceRequestResult = {
    k: 'enum',
    n: 'ServiceRequestResult',
};
const ServiceRequestMessageId = {
    k: 'enum',
    n: 'ServiceRequestMessageId',
};
const ErrorCode = {
    k: 'enum',
    n: 'ErrorCode',
};
const ServiceRequestSource = {
    k: 'enum',
    n: 'ServiceRequestSource',
};
const MultiStepActionType = {
    k: 'enum',
    n: 'MultiStepActionType',
};
const MultiStepActionStatus = {
    k: 'enum',
    n: 'MultiStepActionStatus',
};
const NotificationMethod = {
    k: 'enum',
    n: 'NotificationMethod',
};
const MultiStepActionResult = {
    k: 'enum',
    n: 'MultiStepActionResult',
};
const MultiStepActionSendNotificationResult = {
    k: 'enum',
    n: 'MultiStepActionSendNotificationResult',
};
const CookieChoiceTextId = {
    k: 'enum',
    n: 'CookieChoiceTextId',
};
const ReportUserReasonTextId = {
    k: 'enum',
    n: 'ReportUserReasonTextId',
};
const DeclineChannelInvitationReasonTextId = {
    k: 'enum',
    n: 'DeclineChannelInvitationReasonTextId',
};
const ChannelMessageEvent = {
    k: 'enum',
    n: 'ChannelMessageEvent',
};
const NotificationTemplateName = {
    k: 'enum',
    n: 'NotificationTemplateName',
};
const ChannelChangedEventType = {
    k: 'enum',
    n: 'ChannelChangedEventType',
};
const ObjectChangedEventType = {
    k: 'enum',
    n: 'ObjectChangedEventType',
};
//
//
//
//
//
//
// ==================================================================================================
//                                            InputObject
// ==================================================================================================
//
//
//
//
//
//
const FindObjectsOptions = {
    n: 'FindObjectsOptions',
    f: {
        limit: {},
        sort: {},
        skip: {},
        timeout: {},
        tailable: {},
        awaitData: {},
        batchSize: {},
        returnKey: {},
        maxTimeMS: {},
        maxAwaitTimeMS: {},
        noCursorTimeout: {},
        singleBatch: {},
        allowPartialResults: {},
        showRecordId: {},
        includeArchived: {},
        includeBlocked: {},
        includeDeleted: {},
        includeSuspended: {},
    },
};
const SortItem = {
    n: 'SortItem',
    f: {
        field: {},
        direction: {},
    },
};
const FindUserByIdentOptions = {
    n: 'FindUserByIdentOptions',
    f: {
        includeDeleted: {},
        includeGroupProfiles: {},
    },
};
const UserInput = {
    n: 'UserInput',
    fcs: [
        'events',
        'metadata',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'phoneNumberUpdatedAt',
        'emailUpdatedAt',
        'preferences',
        'signedInAt',
        'signedOutAt',
        'latestActivityAt',
        'inactivatedAt',
        'termsAndConditionsAcceptedAt',
        'suspendedAt',
        'syncedToAnalyticsAt',
        'companies',
        'groupMemberships',
        'company',
        'academicExperiences',
        'businessExperiences',
        'profileRoleHistory',
    ],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        firstName: {},
        lastName: {},
        fullName: {},
        userHandle: {},
        phoneNumber: {},
        phoneNumberUpdatedAt: {
            nt: DateTimeISO,
        },
        isPhoneNumberVerified: {},
        email: {},
        emailUpdatedAt: {
            nt: DateTimeISO,
        },
        isEmailVerified: {},
        emailSource: {},
        genderTextId: {},
        cityOfResidence: {},
        regionOfResidence: {},
        countryOfResidenceTextId: {},
        postalCode: {},
        avatarUrl: {},
        websites: {},
        authType: {},
        inviteCode: {},
        currentPassword: {},
        newPassword: {},
        preferredLanguageTextId: {},
        spokenLanguagesTextIds: {},
        selectedUiLanguageTextId: {},
        fallbackUiLanguageTextId: {},
        discoverable: {},
        roles: {},
        appFeatures: {},
        source: {},
        timezone: {},
        preferences: {
        // nt: UserPreferencesInput, <-- Assigned later to avoid potential circular dependency.
        },
        trustLevel: {},
        signedInAt: {
            nt: DateTimeISO,
        },
        signedOutAt: {
            nt: DateTimeISO,
        },
        latestActivityAt: {
            nt: DateTimeISO,
        },
        inactivatedAt: {
            nt: DateTimeISO,
        },
        inactivatedBy: {},
        termsAndConditionsAcceptedAt: {
            nt: DateTimeISO,
        },
        optIntoNewsletter: {},
        onboardingStage: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        syncedToAnalyticsAt: {
            nt: DateTimeISO,
        },
        companyIds: {},
        companies: {
        // nt: CompanyInput, <-- Assigned later to avoid potential circular dependency.
        },
        groupIds: {},
        parentGroupIds: {},
        externalGroupIds: {},
        pronounsTextIds: {},
        groupMemberships: {
        // nt: GroupMembershipInput, <-- Assigned later to avoid potential circular dependency.
        },
        addToGroupIds: {},
        removeFromGroupIds: {},
        seeksHelp: {},
        offersHelp: {},
        birthYear: {},
        ethnicity: {},
        educationLevelTextId: {},
        personalBio: {},
        yearsManagementExperience: {},
        yearsOwnershipExperience: {},
        academicExperienceIds: {},
        company: {
        // nt: CompanyInput, <-- Assigned later to avoid potential circular dependency.
        },
        academicExperiences: {
        // nt: AcademicExperienceInput, <-- Assigned later to avoid potential circular dependency.
        },
        businessExperienceIds: {},
        businessExperiences: {
        // nt: BusinessExperienceInput, <-- Assigned later to avoid potential circular dependency.
        },
        cityOfOrigin: {},
        regionOfOrigin: {},
        countryOfOriginTextId: {},
        isOnVacation: {},
        profileRoleHistory: {
        // nt: UserProfileRoleHistoryItemInput, <-- Assigned later to avoid potential circular dependency.
        },
        ssoIdp: {},
    },
};
const ModelEventInput = {
    n: 'ModelEventInput',
    fcs: ['time'],
    f: {
        time: {
            nt: DateTimeISO,
        },
        modelEventType: {},
        message: {},
    },
};
const BaseModelMetadataInput = {
    n: 'BaseModelMetadataInput',
    fcs: ['updatedAt'],
    f: {
        updatedAt: {
            nt: DateTimeISO,
        },
    },
};
const LabeledStringValueInput = {
    n: 'LabeledStringValueInput',
    f: {
        label: {},
        value: {},
        tags: {},
    },
};
const UserPreferencesInput = {
    n: 'UserPreferencesInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        shareEmail: {},
        sharePhoneNumber: {},
        showWelcomeMessage: {},
        notificationOptionsInput: {},
    },
};
const NotificationOptionsInput = {
    n: 'NotificationOptionsInput',
    f: {
        notificationType: {},
        enableEmail: {},
        enableInAppMessage: {},
        enablePushNotification: {},
        enableSms: {},
        frequency: {},
    },
};
const CompanyInput = {
    n: 'CompanyInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'foundedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        name: {},
        description: {},
        location: {},
        companyTypeTextId: {},
        companyStageTextId: {},
        websites: {},
        industries: {},
        isOperational: {},
        isFundraising: {},
        annualRevenue: {},
        employeeCount: {},
        foundedAt: {
            nt: DateTimeISO,
        },
        addUserIds: {},
    },
};
const GroupMembershipInput = {
    n: 'GroupMembershipInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
    },
};
const AcademicExperienceInput = {
    n: 'AcademicExperienceInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'startDate', 'endDate'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        institutionName: {},
        degreeType: {},
        fieldOfStudy: {},
        startDate: {
            nt: DateTimeISO,
        },
        endDate: {
            nt: DateTimeISO,
        },
        userId: {},
    },
};
const BusinessExperienceInput = {
    n: 'BusinessExperienceInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'startDate', 'endDate'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        businessName: {},
        jobTitle: {},
        city: {},
        state: {},
        country: {},
        startDate: {
            nt: DateTimeISO,
        },
        endDate: {
            nt: DateTimeISO,
        },
        userId: {},
    },
};
const UserProfileRoleHistoryItemInput = {
    n: 'UserProfileRoleHistoryItemInput',
    fcs: ['createdAt'],
    f: {
        newRole: {},
        createdAt: {
            nt: DateTimeISO,
        },
    },
};
const UserListFilter = {
    n: 'UserListFilter',
    fcs: [
        'createdAtFrom',
        'createdAtUntil',
        'updatedAtFrom',
        'updatedAtUntil',
        'createdAtGreaterThan',
        'latestActivityAtGreaterThan',
    ],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
        ident: {},
        emailIn: {},
        phoneNumberIn: {},
        inviteCodeIn: {},
        rolesIn: {},
        excludeRoles: {},
        excludeContacts: {},
        createdAtGreaterThan: {
            nt: DateTimeISO,
        },
        latestActivityAtGreaterThan: {
            nt: DateTimeISO,
        },
        companyId: {},
        syncedWithMm2: {},
        isMm2User: {},
    },
};
const UserDeviceInput = {
    n: 'UserDeviceInput',
    fcs: [
        'events',
        'metadata',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'phoneNumberUpdatedAt',
        'signedInAt',
        'signedOutAt',
        'sessionStartedAt',
        'sessionEndedAt',
        'oauthTokenCreatedAt',
        'oauthTokenExpiresAt',
        'oauthRefreshTokenCreatedAt',
        'oauthRefreshTokenExpiresAt',
        'trustedAt',
    ],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        deviceUuid: {},
        deviceType: {},
        trusted: {},
        phoneNumber: {},
        phoneNumberUpdatedAt: {
            nt: DateTimeISO,
        },
        isPhoneNumberVerified: {},
        brand: {},
        model: {},
        isTablet: {},
        screenWidth: {},
        screenHeight: {},
        os: {},
        osVersion: {},
        timezone: {},
        ipAddress: {},
        consumer: {},
        consumerVersion: {},
        acceptedLanguage: {},
        locale: {},
        countryCode: {},
        appVersion: {},
        signedInAt: {
            nt: DateTimeISO,
        },
        signedOutAt: {
            nt: DateTimeISO,
        },
        sessionStartedAt: {
            nt: DateTimeISO,
        },
        sessionEndedAt: {
            nt: DateTimeISO,
        },
        authType: {},
        identityProvider: {},
        oauthFederatedProvider: {},
        oauthUserId: {},
        oauthDelegateUserId: {},
        oauthProfileUrl: {},
        oauthToken: {},
        oauthTokenCreatedAt: {
            nt: DateTimeISO,
        },
        oauthTokenExpiresAt: {
            nt: DateTimeISO,
        },
        oauthRefreshToken: {},
        oauthRefreshTokenCreatedAt: {
            nt: DateTimeISO,
        },
        oauthRefreshTokenExpiresAt: {
            nt: DateTimeISO,
        },
        pushNotificationToken: {},
        trustedAt: {
            nt: DateTimeISO,
        },
    },
};
const UserDeviceListFilter = {
    n: 'UserDeviceListFilter',
    fcs: ['createdAtFrom', 'createdAtUntil', 'updatedAtFrom', 'updatedAtUntil'],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
    },
};
const UploadedAssetInput = {
    n: 'UploadedAssetInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'uploadUrlExpiresAt', 'uploadedAt', 'expiresAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        ownerId: {},
        ownerModelType: {},
        assetType: {},
        hostingService: {},
        url: {},
        path: {},
        s3Bucket: {},
        s3Key: {},
        mimeType: {},
        uploadUrl: {},
        uploadUrlExpiresAt: {
            nt: DateTimeISO,
        },
        uploadedAt: {
            nt: DateTimeISO,
        },
        expiresAt: {
            nt: DateTimeISO,
        },
    },
};
const UploadedAssetListFilter = {
    n: 'UploadedAssetListFilter',
    fcs: ['createdAtFrom', 'createdAtUntil', 'updatedAtFrom', 'updatedAtUntil'],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
    },
};
const ChannelInput = {
    n: 'ChannelInput',
    fcs: [
        'events',
        'metadata',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'statuses',
        'pausedAt',
        'suspendedAt',
        'archivedAt',
        'syncedWithMm2At',
    ],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        name: {},
        topic: {},
        description: {},
        tags: {},
        channelType: {},
        statuses: {
        // nt: BgChannelStatusInput, <-- Assigned later to avoid potential circular dependency.
        },
        userIds: {},
        otherUserId: {},
        inviteUserIds: {},
        pausedAt: {
            nt: DateTimeISO,
        },
        pausedBy: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        archivedAt: {
            nt: DateTimeISO,
        },
        archivedBy: {},
        assumedMentorId: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
    },
};
const BgChannelStatusInput = {
    n: 'BgChannelStatusInput',
    fcs: ['archivedAt'],
    f: {
        userId: {},
        archivedAt: {
            nt: DateTimeISO,
        },
    },
};
const ChannelListFilter = {
    n: 'ChannelListFilter',
    fcs: ['createdAtFrom', 'createdAtUntil', 'updatedAtFrom', 'updatedAtUntil'],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
        userId: {},
        userIds: {},
        mustHaveMessages: {},
        invitationMustBeAccepted: {},
        includeArchivedMessages: {},
        includeSystemMessages: {},
    },
};
const ChannelMessageInput = {
    n: 'ChannelMessageInput',
    fcs: [
        'events',
        'metadata',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'statuses',
        'editedAt',
        'suspendedAt',
        'syncedWithMm2At',
    ],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        channelId: {},
        replyToMessageId: {},
        channelMessageType: {},
        messageText: {},
        statuses: {
        // nt: ChannelMessageStatusInput, <-- Assigned later to avoid potential circular dependency.
        },
        editedAt: {
            nt: DateTimeISO,
        },
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        mm2ConversationId: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
    },
};
const ChannelMessageStatusInput = {
    n: 'ChannelMessageStatusInput',
    fcs: ['receivedAt', 'seenAt'],
    f: {
        userId: {},
        receivedAt: {
            nt: DateTimeISO,
        },
        seenAt: {
            nt: DateTimeISO,
        },
    },
};
const ChannelMessageListFilter = {
    n: 'ChannelMessageListFilter',
    fcs: ['createdAtFrom', 'createdAtUntil', 'updatedAtFrom', 'updatedAtUntil'],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
        channelId: {},
        userIds: {},
        receiverUserId: {},
        replyToMessageId: {},
        includeChannelMessageType: {},
        received: {},
        seen: {},
    },
};
const ChannelParticipantInput = {
    n: 'ChannelParticipantInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'suspendedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        channelId: {},
        userId: {},
        invitedBy: {},
        channelName: {},
        role: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
    },
};
const ChannelParticipantListFilter = {
    n: 'ChannelParticipantListFilter',
    fcs: ['createdAtFrom', 'createdAtUntil', 'updatedAtFrom', 'updatedAtUntil'],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
        channelIds: {},
    },
};
const GroupMembershipListFilter = {
    n: 'GroupMembershipListFilter',
    fcs: ['createdAtFrom', 'createdAtUntil', 'updatedAtFrom', 'updatedAtUntil'],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
        userId: {},
        embedded: {},
        roles: {},
    },
};
const GroupInput = {
    n: 'GroupInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'appliedGroupRules'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        parentGroupId: {},
        matchingEngineId: {},
        name: {},
        shortName: {},
        ident: {},
        slug: {},
        domain: {},
        badgeName: {},
        description: {},
        planType: {},
        embedded: {},
        appliedGroupRules: {
        // nt: AppliedGroupRuleInput, <-- Assigned later to avoid potential circular dependency.
        },
        languageTextId: {},
        allowProfileRoleOnSignUp: {},
    },
};
const AppliedGroupRuleInput = {
    n: 'AppliedGroupRuleInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupRuleId: {},
        groupId: {},
        subscribedToEvents: {},
        config: {},
    },
};
const GroupRuleBaseConfigInput = {
    n: 'GroupRuleBaseConfigInput',
    f: {
        value: {},
    },
};
const GroupListFilter = {
    n: 'GroupListFilter',
    fcs: ['createdAtFrom', 'createdAtUntil', 'updatedAtFrom', 'updatedAtUntil'],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
        embedded: {},
        syncedWithMm2: {},
    },
};
const UserSearchInput = {
    n: 'UserSearchInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'filter', 'expiresAt', 'resultExpiresAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        matchingEngineId: {},
        userSearchType: {},
        name: {},
        filter: {
        // nt: UserSearchFilterInput, <-- Assigned later to avoid potential circular dependency.
        },
        excludeUserIds: {},
        maxResultCount: {},
        subscription: {},
        expiresAt: {
            nt: DateTimeISO,
        },
        resultExpiresAt: {
            nt: DateTimeISO,
        },
        startSearch: {},
    },
};
const UserSearchFilterInput = {
    n: 'UserSearchFilterInput',
    fcs: ['latestActivityAfter'],
    f: {
        searchText: {},
        seeksHelp: {},
        offersHelp: {},
        languagesTextIds: {},
        expertisesTextIds: {},
        industriesTextIds: {},
        countryTextIds: {},
        companyStagesTextIds: {},
        latestActivityAfter: {
            nt: DateTimeISO,
        },
    },
};
const UserSearchListFilter = {
    n: 'UserSearchListFilter',
    fcs: ['createdAtFrom', 'createdAtUntil', 'updatedAtFrom', 'updatedAtUntil'],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
    },
};
const ContactInput = {
    n: 'ContactInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'archivedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        channelId: {},
        nickname: {},
        typeTextIds: {},
        favorite: {},
        notes: {},
        archivedAt: {
            nt: DateTimeISO,
        },
    },
};
const SidContactListFilter = {
    n: 'SidContactListFilter',
    fcs: ['createdAtFrom', 'createdAtUntil', 'updatedAtFrom', 'updatedAtUntil'],
    f: {
        ids: {},
        excludeIds: {},
        searchText: {},
        caseSensitive: {},
        textSearchFields: {},
        createdAtFrom: {
            nt: DateTimeISO,
        },
        createdAtUntil: {
            nt: DateTimeISO,
        },
        updatedAtFrom: {
            nt: DateTimeISO,
        },
        updatedAtUntil: {
            nt: DateTimeISO,
        },
        userIdIn: {},
        createdBy: {},
    },
};
const SignInUserInput = {
    n: 'SignInUserInput',
    f: {
        authType: {},
        ident: {},
        identType: {},
        password: {},
        pushNotificationToken: {},
        cookieConsentChoice: {},
        allowToTrack: {},
        captchaService: {},
        captchaToken: {},
    },
};
const SignInOauthUserInput = {
    n: 'SignInOauthUserInput',
    fcs: ['oauthTokenCreatedAt', 'oauthTokenExpiresAt', 'oauthRefreshTokenCreatedAt', 'oauthRefreshTokenExpiresAt'],
    f: {
        ident: {},
        identType: {},
        firstName: {},
        lastName: {},
        displayName: {},
        userHandle: {},
        email: {},
        emailVerified: {},
        phoneNumber: {},
        phoneNumberVerified: {},
        identityProvider: {},
        oauthFederatedProvider: {},
        oauthUserId: {},
        oauthDelegateUserId: {},
        oauthProfileUrl: {},
        oauthToken: {},
        oauthTokenId: {},
        oauthIdToken: {},
        oauthTokenCreatedAt: {
            nt: DateTimeISO,
        },
        oauthTokenExpiresAt: {
            nt: DateTimeISO,
        },
        oauthRefreshToken: {},
        oauthRefreshTokenCreatedAt: {
            nt: DateTimeISO,
        },
        oauthRefreshTokenExpiresAt: {
            nt: DateTimeISO,
        },
        pushNotificationToken: {},
        source: {},
        trackId: {},
        cookieConsentChoice: {},
        allowToTrack: {},
        checkAvailable: {},
    },
};
const SignUpUserInput = {
    n: 'SignUpUserInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'emailVerifiedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        firstName: {},
        lastName: {},
        userHandle: {},
        email: {},
        emailVerifiedAt: {
            nt: DateTimeISO,
        },
        emailSource: {},
        phoneNumber: {},
        authType: {},
        password: {},
        avatarUrl: {},
        source: {},
        timezone: {},
        optIntoNewsletter: {},
        pushNotificationToken: {},
        cookieConsentChoice: {},
        allowToTrack: {},
        trackId: {},
        captchaService: {},
        captchaToken: {},
        checkAvailable: {},
        isTestUser: {},
        offersHelp: {},
        seeksHelp: {},
    },
};
const VerifyOneTimeAuthTokenInput = {
    n: 'VerifyOneTimeAuthTokenInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userIdent: {},
        userIdentType: {},
        deviceUuid: {},
        token: {},
    },
};
const ReportUserInput = {
    n: 'ReportUserInput',
    f: {
        userId: {},
        reasonTextId: {},
        messageText: {},
        createdBy: {},
    },
};
const AdminTaskInput = {
    n: 'AdminTaskInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'startedAt', 'expiresAt', 'finishedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        adminTaskType: {},
        result: {},
        resultMessage: {},
        error: {},
        args: {},
        timeout: {},
        autoRun: {},
        synchronous: {},
        startedAt: {
            nt: DateTimeISO,
        },
        expiresAt: {
            nt: DateTimeISO,
        },
        finishedAt: {
            nt: DateTimeISO,
        },
    },
};
const ChannelInvitationInput = {
    n: 'ChannelInvitationInput',
    fcs: [
        'events',
        'metadata',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'dismissedFromInboxBySenderAt',
        'dismissedFromInboxByRecipientAt',
        'readByRecipientAt',
        'suspendedAt',
        'syncedWithMm2At',
    ],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        channelId: {},
        recipientId: {},
        channelName: {},
        channelTopic: {},
        messageText: {},
        autoAccept: {},
        declineReasonTextId: {},
        dismissedFromInboxBySenderAt: {
            nt: DateTimeISO,
        },
        dismissedFromInboxByRecipientAt: {
            nt: DateTimeISO,
        },
        readByRecipientAt: {
            nt: DateTimeISO,
        },
        status: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        userSearchId: {},
        searchRank: {},
        mm2ConversationId: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
    },
};
const BgAddChannelMessageEventInput = {
    n: 'BgAddChannelMessageEventInput',
    f: {
        channelId: {},
        messageIds: {},
        recipientId: {},
        event: {},
    },
};
const ContentTagInput = {
    n: 'ContentTagInput',
    fcs: [
        'events',
        'metadata',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'moderationConcern',
        'allModerationConcerns',
        'approvedByRecipientAt',
        'verifiedAt',
        'dismissedAt',
    ],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        objectId: {},
        contentModelType: {},
        userId: {},
        contentTagTypeTextId: {},
        childContentTagTypeTextId: {},
        messageText: {},
        moderationConcern: {
        // nt: ModerationConcernInput, <-- Assigned later to avoid potential circular dependency.
        },
        allModerationConcerns: {
        // nt: ModerationConcernInput, <-- Assigned later to avoid potential circular dependency.
        },
        approvedByRecipientAt: {
            nt: DateTimeISO,
        },
        verifiedBy: {},
        verifiedAt: {
            nt: DateTimeISO,
        },
        dismissedBy: {},
        dismissedAt: {
            nt: DateTimeISO,
        },
    },
};
const ModerationConcernInput = {
    n: 'ModerationConcernInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        moderationConcernType: {},
        name: {},
        description: {},
        value: {},
        languageTextId: {},
        isCaseSensitive: {},
        isWord: {},
        isRegex: {},
        isNameOfBadActor: {},
        isCompanyNameOfBadActor: {},
        isEmailOfBadActor: {},
        isPhoneNumberOfBadActor: {},
        isWebsiteOfBadActor: {},
        deleteContent: {},
        trustLevelImpact: {},
        version: {},
    },
};
const MenteesGroupMembershipInput = {
    n: 'MenteesGroupMembershipInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        soughtExpertisesTextIds: {},
        additionalSoughtExpertisesTextIds: {},
        industryTextId: {},
        mm2SoughtExpertisesTextIds: {},
        mm2IndustryTextId: {},
        actionsTaken: {},
        currentChallenges: {},
        futureGoals: {},
        motivationsForMentorship: {},
        reasonsForStartingBusiness: {},
        howCanMentorSupportMe: {},
    },
};
const MentorsGroupMembershipInput = {
    n: 'MentorsGroupMembershipInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        expertisesTextIds: {},
        additionalExpertisesTextIds: {},
        industriesTextIds: {},
        mm2ExpertisesTextIds: {},
        mm2IndustriesTextIds: {},
        helpICanOffer: {},
        expectationsForMentees: {},
        menteePreparationInstructions: {},
        endorsements: {},
        reasonsForMentoring: {},
        howICanHelpMentees: {},
    },
};
const IqlaaGroupMembershipInput = {
    n: 'IqlaaGroupMembershipInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'birthDate'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        fatherName: {},
        birthDate: {
            nt: DateTimeISO,
        },
        isBusinessHomeBased: {},
        isBusinessRegisteredWithCCD: {},
        businessRegistrationNumber: {},
        isJordanNational: {},
    },
};
const MastercardGroupMembershipInput = {
    n: 'MastercardGroupMembershipInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        bankNames: {},
        bankTextIds: {},
        smallBusinessCardTypes: {},
        personalCardTypes: {},
    },
};
const SupportChannelConfigInput = {
    n: 'SupportChannelConfigInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        senderUserId: {},
        isActive: {},
        createSupportChannelForMentees: {},
        createSupportChannelForMentors: {},
        channelLanguageTextId: {},
        filterByGenderTextIds: {},
        firstMessageText: {},
        sendNotifications: {},
    },
};
const NotificationInput = {
    n: 'NotificationInput',
    fcs: [
        'events',
        'metadata',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'emailSentAt',
        'inAppMessageSentAt',
        'inAppMessageReceivedAt',
        'pushNotificationSentAt',
        'smsSentAt',
        'context',
    ],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        notificationType: {},
        templateId: {},
        templateName: {},
        recipientId: {},
        multiStepActionId: {},
        initiatorId: {},
        replyingToId: {},
        title: {},
        messageText: {},
        shortMessageText: {},
        htmlMessage: {},
        language: {},
        isTranslated: {},
        appLink: {},
        action0: {},
        action1: {},
        action2: {},
        actionTaken: {},
        sendEmail: {},
        sendInAppMessage: {},
        sendPushNotification: {},
        sendSms: {},
        allowSendingToSuspendedUser: {},
        emailSentAt: {
            nt: DateTimeISO,
        },
        inAppMessageSentAt: {
            nt: DateTimeISO,
        },
        inAppMessageReceivedAt: {
            nt: DateTimeISO,
        },
        pushNotificationSentAt: {
            nt: DateTimeISO,
        },
        smsSentAt: {
            nt: DateTimeISO,
        },
        emailSendReport: {},
        pushNotificationSendReport: {},
        smsSendReport: {},
        sentMessagesCount: {},
        context: {
        // nt: NotificationInput, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const SendMultiStepActionNotificationInput = {
    n: 'SendMultiStepActionNotificationInput',
    f: {
        actionId: {},
        email: {},
        phoneNumber: {},
        notificationMethod: {},
    },
};
const NotificationTemplateInput = {
    n: 'NotificationTemplateInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        templateId: {},
        name: {},
        description: {},
        titleAr: {},
        messageTextAr: {},
        shortMessageTextAr: {},
        htmlMessageAr: {},
        titleEn: {},
        messageTextEn: {},
        shortMessageTextEn: {},
        htmlMessageEn: {},
        titleEs: {},
        messageTextEs: {},
        shortMessageTextEs: {},
        htmlMessageEs: {},
        titleId: {},
        messageTextId: {},
        shortMessageTextId: {},
        htmlMessageId: {},
        titleRu: {},
        messageTextRu: {},
        shortMessageTextRu: {},
        htmlMessageRu: {},
        titleSo: {},
        messageTextSo: {},
        shortMessageTextSo: {},
        htmlMessageSo: {},
        version: {},
        senderName: {},
        senderEmail: {},
        action0: {},
        action1: {},
        action2: {},
        sendEmail: {},
        sendInAppMessage: {},
        sendPushNotification: {},
        sendSms: {},
        isCore: {},
    },
};
const SidMultiStepActionInput = {
    n: 'SidMultiStepActionInput',
    fcs: [
        'events',
        'metadata',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'notificationSentAt',
        'emailUpdatedAt',
        'emailVerifiedAt',
        'errors',
        'passwordResettedAt',
        'passwordUpdatedAt',
        'phoneNumberUpdatedAt',
        'phoneNumberVerifiedAt',
        'signedInAt',
        'expiresAt',
    ],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        userIdent: {},
        userHandle: {},
        email: {},
        phoneNumber: {},
        actionType: {},
        actionStatus: {},
        notificationMethod: {},
        result: {},
        confirmToken: {},
        attemptCount: {},
        notificationSentAt: {
            nt: DateTimeISO,
        },
        notificationResult: {},
        notificationId: {},
        textData: {},
        report: {},
        emailPassed: {},
        emailUpdatedAt: {
            nt: DateTimeISO,
        },
        emailVerifiedAt: {
            nt: DateTimeISO,
        },
        errors: {
        // nt: MultiStepActionErrorInput, <-- Assigned later to avoid potential circular dependency.
        },
        password: {},
        passwordPassed: {},
        passwordResettedAt: {
            nt: DateTimeISO,
        },
        passwordUpdatedAt: {
            nt: DateTimeISO,
        },
        phoneNumberPassed: {},
        phoneNumberUpdatedAt: {
            nt: DateTimeISO,
        },
        phoneNumberVerifiedAt: {
            nt: DateTimeISO,
        },
        signedInAt: {
            nt: DateTimeISO,
        },
        tfaBackupCodes: {},
        expiresAt: {
            nt: DateTimeISO,
        },
    },
};
const MultiStepActionErrorInput = {
    n: 'MultiStepActionErrorInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        key: {},
        messageId: {},
        message: {},
    },
};
const UserIdentInput = {
    n: 'UserIdentInput',
    f: {
        userId: {},
        userIdent: {},
        userHandle: {},
        email: {},
        phoneNumber: {},
        inviteCode: {},
    },
};
const VerifyMultiStepActionTokenInput = {
    n: 'VerifyMultiStepActionTokenInput',
    f: {
        actionId: {},
        token: {},
        newPassword: {},
    },
};
const MyUserInput = {
    n: 'MyUserInput',
    fcs: [
        'events',
        'metadata',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'phoneNumberUpdatedAt',
        'emailUpdatedAt',
        'preferences',
        'signedInAt',
        'signedOutAt',
        'latestActivityAt',
        'inactivatedAt',
        'termsAndConditionsAcceptedAt',
        'suspendedAt',
        'syncedToAnalyticsAt',
        'companies',
        'groupMemberships',
        'company',
        'academicExperiences',
        'businessExperiences',
        'profileRoleHistory',
    ],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        firstName: {},
        lastName: {},
        fullName: {},
        userHandle: {},
        phoneNumber: {},
        phoneNumberUpdatedAt: {
            nt: DateTimeISO,
        },
        isPhoneNumberVerified: {},
        email: {},
        emailUpdatedAt: {
            nt: DateTimeISO,
        },
        isEmailVerified: {},
        emailSource: {},
        genderTextId: {},
        cityOfResidence: {},
        regionOfResidence: {},
        countryOfResidenceTextId: {},
        postalCode: {},
        avatarUrl: {},
        websites: {},
        authType: {},
        inviteCode: {},
        currentPassword: {},
        newPassword: {},
        preferredLanguageTextId: {},
        spokenLanguagesTextIds: {},
        selectedUiLanguageTextId: {},
        fallbackUiLanguageTextId: {},
        discoverable: {},
        roles: {},
        appFeatures: {},
        source: {},
        timezone: {},
        preferences: {
        // nt: UserPreferencesInput, <-- Assigned later to avoid potential circular dependency.
        },
        trustLevel: {},
        signedInAt: {
            nt: DateTimeISO,
        },
        signedOutAt: {
            nt: DateTimeISO,
        },
        latestActivityAt: {
            nt: DateTimeISO,
        },
        inactivatedAt: {
            nt: DateTimeISO,
        },
        inactivatedBy: {},
        termsAndConditionsAcceptedAt: {
            nt: DateTimeISO,
        },
        optIntoNewsletter: {},
        onboardingStage: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        syncedToAnalyticsAt: {
            nt: DateTimeISO,
        },
        companyIds: {},
        companies: {
        // nt: CompanyInput, <-- Assigned later to avoid potential circular dependency.
        },
        groupIds: {},
        parentGroupIds: {},
        externalGroupIds: {},
        pronounsTextIds: {},
        groupMemberships: {
        // nt: GroupMembershipInput, <-- Assigned later to avoid potential circular dependency.
        },
        addToGroupIds: {},
        removeFromGroupIds: {},
        seeksHelp: {},
        offersHelp: {},
        birthYear: {},
        ethnicity: {},
        educationLevelTextId: {},
        personalBio: {},
        yearsManagementExperience: {},
        yearsOwnershipExperience: {},
        academicExperienceIds: {},
        company: {
        // nt: CompanyInput, <-- Assigned later to avoid potential circular dependency.
        },
        academicExperiences: {
        // nt: AcademicExperienceInput, <-- Assigned later to avoid potential circular dependency.
        },
        businessExperienceIds: {},
        businessExperiences: {
        // nt: BusinessExperienceInput, <-- Assigned later to avoid potential circular dependency.
        },
        cityOfOrigin: {},
        regionOfOrigin: {},
        countryOfOriginTextId: {},
        isOnVacation: {},
        profileRoleHistory: {
        // nt: UserProfileRoleHistoryItemInput, <-- Assigned later to avoid potential circular dependency.
        },
        ssoIdp: {},
    },
};
const UserTrackingInput = {
    n: 'UserTrackingInput',
    fcs: ['events', 'metadata', 'createdAt', 'updatedAt', 'deletedAt', 'syncedToAnalyticsAt'],
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEventInput, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadataInput, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        trackId: {},
        metaPixelId: {},
        metaClickId: {},
        metaBrowserId: {},
        googleId: {},
        googleClickId: {},
        cookieConsentChoice: {},
        allowToTrack: {},
        syncedToAnalyticsAt: {
            nt: DateTimeISO,
        },
    },
};
//
//
//
//
//
//
// ==================================================================================================
//                                            OutputObject
// ==================================================================================================
//
//
//
//
//
//
const UserMetadata = {
    f: {
        updatedAt: {
            nt: DateTimeISO,
        },
        totalTimeOnPlatform: {},
        channelsMetadata: {
        // nt: ChannelsUserMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        groupsMetadata: {
        // nt: GroupsUserMetadata, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ChannelsUserMetadata = {
    f: {
        mentoringSessionCount: {},
    },
};
const GroupsUserMetadata = {
    f: {
        groupCount: {},
        updatedAt: {
            nt: DateTimeISO,
        },
    },
};
const GroupMembership = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        expertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        industries: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        industry: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        soughtExpertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ModelEvent = {
    f: {
        time: {
            nt: DateTimeISO,
        },
        modelEventType: {},
        message: {},
    },
};
const Expertise = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        childExpertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        parentExpertise: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const Option = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const Industry = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const MenteesGroupMembership = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        expertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        industries: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        industry: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        soughtExpertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        soughtExpertisesTextIds: {},
        additionalSoughtExpertisesTextIds: {},
        industryTextId: {},
        mm2SoughtExpertisesTextIds: {},
        mm2IndustryTextId: {},
        actionsTaken: {},
        currentChallenges: {},
        futureGoals: {},
        motivationsForMentorship: {},
        reasonsForStartingBusiness: {},
        howCanMentorSupportMe: {},
    },
};
const MentorsGroupMembership = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        expertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        industries: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        industry: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        soughtExpertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        expertisesTextIds: {},
        additionalExpertisesTextIds: {},
        industriesTextIds: {},
        mm2ExpertisesTextIds: {},
        mm2IndustriesTextIds: {},
        helpICanOffer: {},
        expectationsForMentees: {},
        menteePreparationInstructions: {},
        endorsements: {},
        reasonsForMentoring: {},
        howICanHelpMentees: {},
    },
};
const MastercardGroupMembership = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        expertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        industries: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        industry: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        soughtExpertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        bankNames: {},
        bankTextIds: {},
        smallBusinessCardTypes: {},
        personalCardTypes: {},
    },
};
const IqlaaGroupMembership = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        expertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        industries: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        industry: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        soughtExpertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        fatherName: {},
        birthDate: {
            nt: DateTimeISO,
        },
        isBusinessHomeBased: {},
        isBusinessRegisteredWithCCD: {},
        businessRegistrationNumber: {},
        isJordanNational: {},
    },
};
const StriveIndonesiaGroupMembership = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        groupIdent: {},
        userId: {},
        roles: {},
        expertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        industries: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        industry: {
        // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        soughtExpertises: {
        // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        ventureStartDate: {
            nt: DateTimeISO,
        },
        numberOfEmployees: {},
    },
};
const User = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: UserMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        firstName: {},
        lastName: {},
        userHandle: {},
        phoneNumber: {},
        phoneNumberUpdatedAt: {
            nt: DateTimeISO,
        },
        isPhoneNumberVerified: {},
        email: {},
        emailSource: {},
        emailUpdatedAt: {
            nt: DateTimeISO,
        },
        isEmailVerified: {},
        genderTextId: {},
        cityOfResidence: {},
        regionOfResidence: {},
        countryOfResidenceTextId: {},
        postalCode: {},
        avatarUrl: {},
        websites: {
        // nt: LabeledStringValue, <-- Assigned later to avoid potential circular dependency.
        },
        authType: {},
        inviteCode: {},
        tfaBackupCodes: {},
        passwordUpdatedAt: {
            nt: DateTimeISO,
        },
        preferredLanguageTextId: {},
        spokenLanguagesTextIds: {},
        selectedUiLanguageTextId: {},
        fallbackUiLanguageTextId: {},
        discoverable: {},
        roles: {},
        appFeatures: {},
        source: {},
        timezone: {},
        preferences: {
        // nt: UserPreferences, <-- Assigned later to avoid potential circular dependency.
        },
        trustLevel: {},
        signedInAt: {
            nt: DateTimeISO,
        },
        signedOutAt: {
            nt: DateTimeISO,
        },
        latestActivityAt: {
            nt: DateTimeISO,
        },
        userDevices: {
        // nt: UserDeviceWithoutAuth, <-- Assigned later to avoid potential circular dependency.
        },
        userBlocks: {
        // nt: UserBlock, <-- Assigned later to avoid potential circular dependency.
        },
        contacts: {
        // nt: Contact, <-- Assigned later to avoid potential circular dependency.
        },
        inactivatedAt: {
            nt: DateTimeISO,
        },
        inactivatedBy: {},
        termsAndConditionsAcceptedAt: {
            nt: DateTimeISO,
        },
        optIntoNewsletter: {},
        onboardingStage: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        anonymizedAt: {
            nt: DateTimeISO,
        },
        addedToBgVaultAt: {
            nt: DateTimeISO,
        },
        syncedToAnalyticsAt: {
            nt: DateTimeISO,
        },
        companyIds: {},
        companies: {
        // nt: Company, <-- Assigned later to avoid potential circular dependency.
        },
        groupIds: {},
        parentGroupIds: {},
        externalGroupIds: {},
        pronounsTextIds: {},
        groupMemberships: {
        // nt: IGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        seeksHelp: {},
        offersHelp: {},
        birthYear: {},
        ethnicity: {},
        educationLevelTextId: {},
        personalBio: {},
        yearsManagementExperience: {},
        yearsOwnershipExperience: {},
        academicExperienceIds: {},
        academicExperiences: {
        // nt: AcademicExperience, <-- Assigned later to avoid potential circular dependency.
        },
        genderSelfDescribed: {},
        businessExperienceIds: {},
        businessExperiences: {
        // nt: BusinessExperience, <-- Assigned later to avoid potential circular dependency.
        },
        cityOfOrigin: {},
        regionOfOrigin: {},
        countryOfOriginTextId: {},
        isOnVacation: {},
        avatarAsset: {
        // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
        profileRoleHistory: {
        // nt: UserProfileRoleHistoryItem, <-- Assigned later to avoid potential circular dependency.
        },
        ssoIdp: {},
        originatedInMm2: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2PasswordHash: {},
        mm2Id: {},
        mm2PhotoOriginal: {},
        mm2BasicAccountCompleted: {},
        hasSignedInToMm3: {},
        hasSignedInToMm2: {},
        mentor: {
        // nt: MentorsGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        mentee: {
        // nt: MenteesGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        countryOfResidence: {
        // nt: Country, <-- Assigned later to avoid potential circular dependency.
        },
        gender: {
        // nt: Gender, <-- Assigned later to avoid potential circular dependency.
        },
        latestUserDevice: {
        // nt: UserDeviceWithoutAuth, <-- Assigned later to avoid potential circular dependency.
        },
        spokenLanguages: {
        // nt: Language, <-- Assigned later to avoid potential circular dependency.
        },
        preferredLanguage: {
        // nt: Language, <-- Assigned later to avoid potential circular dependency.
        },
        fallbackUiLanguage: {
        // nt: Language, <-- Assigned later to avoid potential circular dependency.
        },
        preferredUiLanguage: {
        // nt: Language, <-- Assigned later to avoid potential circular dependency.
        },
        unreadInAppMessages: {
        // nt: Notification, <-- Assigned later to avoid potential circular dependency.
        },
        channels: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                mustBeAccepted: {
                    nt: Boolean,
                    it: [0],
                },
                mustHaveMessages: {
                    nt: Boolean,
                    it: [0],
                },
            },
            // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        channelInvitations: {
        // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        channelParticipants: {
        // nt: ChannelParticipant, <-- Assigned later to avoid potential circular dependency.
        },
        countryOfOrigin: {
        // nt: Country, <-- Assigned later to avoid potential circular dependency.
        },
        educationLevel: {
        // nt: EducationLevel, <-- Assigned later to avoid potential circular dependency.
        },
        endorsements: {
        // nt: EndorsementWithTypes, <-- Assigned later to avoid potential circular dependency.
        },
        groupMembers: {
        // nt: IGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        groups: {
        // nt: Group, <-- Assigned later to avoid potential circular dependency.
        },
        hasTrainings: {},
        profileCompletionPercentage: {},
        profileRole: {},
        pronouns: {
        // nt: Pronoun, <-- Assigned later to avoid potential circular dependency.
        },
        pronounsDisplay: {},
        uploadedAssets: {
        // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const LabeledStringValue = {
    f: {
        label: {},
        value: {},
        tags: {},
    },
};
const UserPreferences = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        shareEmail: {},
        sharePhoneNumber: {},
        showWelcomeMessage: {},
        notificationOptions: {
        // nt: NotificationOptions, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const NotificationOptions = {
    f: {
        notificationType: {},
        enableEmail: {},
        enableInAppMessage: {},
        enablePushNotification: {},
        enableSms: {},
        frequency: {},
    },
};
const UserDeviceWithoutAuth = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        deviceUuid: {},
        deviceType: {},
        trusted: {},
        phoneNumber: {},
        phoneNumberUpdatedAt: {
            nt: DateTimeISO,
        },
        isPhoneNumberVerified: {},
        brand: {},
        model: {},
        isTablet: {},
        screenWidth: {},
        screenHeight: {},
        os: {},
        osVersion: {},
        timezone: {},
        ipAddress: {},
        consumer: {},
        consumerVersion: {},
        acceptedLanguage: {},
        locale: {},
        countryCode: {},
        appVersion: {},
        signedInAt: {
            nt: DateTimeISO,
        },
        signedOutAt: {
            nt: DateTimeISO,
        },
        sessionStartedAt: {
            nt: DateTimeISO,
        },
        sessionEndedAt: {
            nt: DateTimeISO,
        },
        identityProvider: {},
        oauthProfileUrl: {},
        trustedAt: {
            nt: DateTimeISO,
        },
    },
};
const UserBlock = {
    f: {
        userId: {},
        reasonTextId: {},
        notes: {},
        adminNotes: {},
        syncedToAnalyticsAt: {
            nt: DateTimeISO,
        },
        createdAt: {
            nt: DateTimeISO,
        },
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2Id: {},
    },
};
const Contact = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: ContactMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        channelId: {},
        nickname: {},
        typeTextIds: {},
        favorite: {},
        notes: {},
        archivedAt: {
            nt: DateTimeISO,
        },
        user: {
        // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
        contactTypes: {
        // nt: ContactType, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ContactMetadata = {
    f: {
        updatedAt: {
            nt: DateTimeISO,
        },
        firstName: {},
        lastName: {},
        userHandle: {},
        avatarUrl: {},
    },
};
const ContactType = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const Company = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userIds: {},
        name: {},
        description: {},
        location: {},
        companyTypeTextId: {},
        companyStageTextId: {},
        websites: {
        // nt: LabeledStringValue, <-- Assigned later to avoid potential circular dependency.
        },
        industries: {},
        isOperational: {},
        isFundraising: {},
        annualRevenue: {},
        employeeCount: {},
        foundedAt: {
            nt: DateTimeISO,
        },
        mm2UserId: {},
        mm2CompanyRole: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        companyStage: {
        // nt: CompanyStage, <-- Assigned later to avoid potential circular dependency.
        },
        companyType: {
        // nt: CompanyType, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const CompanyStage = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const CompanyType = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const AcademicExperience = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        institutionName: {},
        degreeType: {},
        fieldOfStudy: {},
        startDate: {
            nt: DateTimeISO,
        },
        endDate: {
            nt: DateTimeISO,
        },
        userId: {},
    },
};
const BusinessExperience = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        businessName: {},
        jobTitle: {},
        city: {},
        state: {},
        country: {},
        startDate: {
            nt: DateTimeISO,
        },
        endDate: {
            nt: DateTimeISO,
        },
        userId: {},
    },
};
const UploadedAsset = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        ownerId: {},
        ownerModelType: {},
        assetType: {},
        hostingService: {},
        url: {},
        path: {},
        s3Bucket: {},
        s3Key: {},
        mimeType: {},
        uploadUrl: {},
        uploadUrlExpiresAt: {
            nt: DateTimeISO,
        },
        uploadedAt: {
            nt: DateTimeISO,
        },
        expiresAt: {
            nt: DateTimeISO,
        },
    },
};
const UserProfileRoleHistoryItem = {
    f: {
        newRole: {},
        createdAt: {
            nt: DateTimeISO,
        },
    },
};
const Country = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        alpha2Key: {},
        alpha3Key: {},
        phoneCode: {},
    },
};
const Gender = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const Language = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        shortLangCode: {},
        longLangCode: {},
        isUiLanguage: {},
        isRtl: {},
    },
};
const Notification = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        notificationType: {},
        templateId: {},
        recipientId: {},
        multiStepActionId: {},
        initiatorId: {},
        replyingToId: {},
        title: {},
        messageText: {},
        shortMessageText: {},
        htmlMessage: {},
        language: {},
        isTranslated: {},
        appLink: {},
        action0: {},
        action1: {},
        action2: {},
        actionTaken: {},
        sendEmail: {},
        sendInAppMessage: {},
        sendPushNotification: {},
        sendSms: {},
        emailSentAt: {
            nt: DateTimeISO,
        },
        inAppMessageSentAt: {
            nt: DateTimeISO,
        },
        inAppMessageReceivedAt: {
            nt: DateTimeISO,
        },
        pushNotificationSentAt: {
            nt: DateTimeISO,
        },
        smsSentAt: {
            nt: DateTimeISO,
        },
        emailSendReport: {},
        pushNotificationSendReport: {},
        smsSendReport: {},
        sentMessagesCount: {},
        context: {
        // nt: NotificationContext, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const NotificationContext = {
    f: {
        title: {},
        senderId: {},
        senderFirstName: {},
        senderLastName: {},
        senderFullName: {},
        senderEmail: {},
        senderPhoneNumber: {},
        recipientId: {},
        recipientFirstName: {},
        recipientLastName: {},
        recipientFullName: {},
        recipientEmail: {},
        recipientPhoneNumber: {},
        displayedUserId: {},
        displayedUserFirstName: {},
        displayedUserLastName: {},
        displayedUserFullName: {},
        displayedUserEmail: {},
        displayedUserPhoneNumber: {},
        displayedUserCountry: {},
        displayedUserBusinessOrJobTitle: {},
        appLink: {},
        locale: {},
        textDirection: {},
        confirmToken: {},
    },
};
const Channel = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: ChannelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        name: {},
        topic: {},
        description: {},
        tags: {},
        channelType: {},
        statuses: {
        // nt: BgChannelStatus, <-- Assigned later to avoid potential circular dependency.
        },
        userIds: {},
        otherUserId: {},
        pausedAt: {
            nt: DateTimeISO,
        },
        pausedBy: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        lockedAt: {
            nt: DateTimeISO,
        },
        lockedBy: {},
        archivedAt: {
            nt: DateTimeISO,
        },
        archivedBy: {},
        assumedMentorId: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        creator: {
        // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
        status: {
        // nt: BgChannelStatus, <-- Assigned later to avoid potential circular dependency.
        },
        invitations: {
        // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        isArchivedForMe: {},
        latestMessage: {
        // nt: ChannelMessage, <-- Assigned later to avoid potential circular dependency.
        },
        messages: {
        // nt: ChannelMessage, <-- Assigned later to avoid potential circular dependency.
        },
        myContacts: {
        // nt: Contact, <-- Assigned later to avoid potential circular dependency.
        },
        participants: {
        // nt: ChannelParticipant, <-- Assigned later to avoid potential circular dependency.
        },
        pendingInvitations: {
        // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ChannelMetadata = {
    f: {
        updatedAt: {
            nt: DateTimeISO,
        },
        channelInvitationAccepted: {},
        messagesSentByCreatorCount: {},
        messagesSentByFirstParticipantCount: {},
    },
};
const BgChannelStatus = {
    f: {
        userId: {},
        archivedAt: {
            nt: DateTimeISO,
        },
    },
};
const ChannelInvitation = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        channelId: {},
        recipientId: {},
        channelName: {},
        channelTopic: {},
        messageText: {},
        autoAccept: {},
        declineReasonTextId: {},
        dismissedFromInboxBySenderAt: {
            nt: DateTimeISO,
        },
        dismissedFromInboxByRecipientAt: {
            nt: DateTimeISO,
        },
        readByRecipientAt: {
            nt: DateTimeISO,
        },
        status: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        userSearchId: {},
        searchRank: {},
        mm2ConversationId: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        channel: {
        // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        declineReason: {
        // nt: DeclineChannelInvitationReason, <-- Assigned later to avoid potential circular dependency.
        },
        recipient: {
        // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
        sender: {
        // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const DeclineChannelInvitationReason = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ChannelMessage = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: ChannelMessageMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        channelId: {},
        replyToMessageId: {},
        channelMessageType: {},
        messageText: {},
        statuses: {
        // nt: ChannelMessageStatus, <-- Assigned later to avoid potential circular dependency.
        },
        editedAt: {
            nt: DateTimeISO,
        },
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        mm2ConversationId: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        channel: {
        // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        sender: {
        // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ChannelMessageMetadata = {
    f: {
        updatedAt: {
            nt: DateTimeISO,
        },
        senderUserHandle: {},
        senderFirstName: {},
        senderLastName: {},
        senderAvatarUrl: {},
    },
};
const ChannelMessageStatus = {
    f: {
        userId: {},
        isInArchivedChannel: {},
        receivedAt: {
            nt: DateTimeISO,
        },
        seenAt: {
            nt: DateTimeISO,
        },
    },
};
const ChannelParticipant = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        channelId: {},
        userId: {},
        userInfo: {
        // nt: BgChannelParticipantUserInfo, <-- Assigned later to avoid potential circular dependency.
        },
        invitedBy: {},
        channelName: {},
        role: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        channel: {
        // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        myContact: {
        // nt: Contact, <-- Assigned later to avoid potential circular dependency.
        },
        user: {
        // nt: UserListItem, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const BgChannelParticipantUserInfo = {
    f: {
        updatedAt: {
            nt: DateTimeISO,
        },
        userHandle: {},
        firstName: {},
        lastName: {},
        avatarUrl: {},
    },
};
const UserListItem = {
    f: {
        id: {},
        createdAt: {
            nt: DateTimeISO,
        },
        updatedAt: {
            nt: DateTimeISO,
        },
        deletedAt: {
            nt: DateTimeISO,
        },
        userHandle: {},
        firstName: {},
        lastName: {},
        avatarUrl: {},
        genderTextId: {},
        websites: {
        // nt: LabeledStringValue, <-- Assigned later to avoid potential circular dependency.
        },
        preferredLanguageTextId: {},
        spokenLanguagesTextIds: {},
        countryOfResidenceTextId: {},
        regionOfResidence: {},
        cityOfResidence: {},
        timezone: {},
        roles: {},
        trustLevel: {},
        userBlocks: {
        // nt: UserBlock, <-- Assigned later to avoid potential circular dependency.
        },
        latestActivityAt: {
            nt: DateTimeISO,
        },
        seeksHelp: {},
        offersHelp: {},
        yearsManagementExperience: {},
        yearsOwnershipExperience: {},
        academicExperiences: {
        // nt: AcademicExperience, <-- Assigned later to avoid potential circular dependency.
        },
        businessExperiences: {
        // nt: BusinessExperience, <-- Assigned later to avoid potential circular dependency.
        },
        isOnVacation: {},
        mentor: {
        // nt: MentorsGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        mentee: {
        // nt: MenteesGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        groupMemberships: {
        // nt: IGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        companies: {
        // nt: Company, <-- Assigned later to avoid potential circular dependency.
        },
        countryOfOrigin: {
        // nt: Country, <-- Assigned later to avoid potential circular dependency.
        },
        countryOfResidence: {
        // nt: Country, <-- Assigned later to avoid potential circular dependency.
        },
        educationLevel: {
        // nt: EducationLevel, <-- Assigned later to avoid potential circular dependency.
        },
        endorsements: {
        // nt: EndorsementWithTypes, <-- Assigned later to avoid potential circular dependency.
        },
        groups: {
        // nt: Group, <-- Assigned later to avoid potential circular dependency.
        },
        profileCompletionPercentage: {},
        profileRole: {},
        pronouns: {
        // nt: Pronoun, <-- Assigned later to avoid potential circular dependency.
        },
        pronounsDisplay: {},
    },
};
const EducationLevel = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const EndorsementWithTypes = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        objectId: {},
        contentModelType: {},
        userId: {},
        contentTagTypeTextId: {},
        childContentTagTypeTextId: {},
        messageText: {},
        moderationConcern: {
        // nt: ModerationConcern, <-- Assigned later to avoid potential circular dependency.
        },
        allModerationConcerns: {
        // nt: ModerationConcern, <-- Assigned later to avoid potential circular dependency.
        },
        approvedByRecipientAt: {
            nt: DateTimeISO,
        },
        verifiedBy: {},
        verifiedAt: {
            nt: DateTimeISO,
        },
        dismissedBy: {},
        dismissedAt: {
            nt: DateTimeISO,
        },
        childContentTagType: {
        // nt: ContentTagType, <-- Assigned later to avoid potential circular dependency.
        },
        contentTagType: {
        // nt: ContentTagType, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ModerationConcern = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        moderationConcernType: {},
        name: {},
        description: {},
        value: {},
        languageTextId: {},
        isCaseSensitive: {},
        isWord: {},
        isRegex: {},
        isNameOfBadActor: {},
        isCompanyNameOfBadActor: {},
        isEmailOfBadActor: {},
        isPhoneNumberOfBadActor: {},
        isWebsiteOfBadActor: {},
        deleteContent: {},
        trustLevelImpact: {},
        version: {},
    },
};
const ContentTagType = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        addToTrustLevel: {},
    },
};
const Group = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        parentGroupId: {},
        matchingEngineId: {},
        name: {},
        shortName: {},
        ident: {},
        slug: {},
        domain: {},
        badgeName: {},
        description: {},
        planType: {},
        embedded: {},
        appliedGroupRules: {
        // nt: AppliedGroupRule, <-- Assigned later to avoid potential circular dependency.
        },
        languageTextId: {},
        allowProfileRoleOnSignUp: {},
        mm2Id: {},
        isMm2Organization: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        isMigratedToMm3: {},
        mm2RedirectUrl: {},
        mm3DeepLinksUrl: {},
        groupCms: {
        // nt: GroupCms, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const AppliedGroupRule = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupRuleId: {},
        groupId: {},
        subscribedToEvents: {},
        config: {
        // nt: GroupRuleBaseConfig, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const GroupRuleBaseConfig = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        value: {},
    },
};
const GroupCms = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        onboarding: {
        // nt: GroupCmsOnboarding, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const GroupCmsOnboarding = {
    f: {
        allowProfileRoleOnSignUp: {},
        showDataConsentPage: {},
        showPreferredLanguagePage: {},
        showLocationPage: {},
        showPhoneNumberPage: {},
        showGenderPage: {},
        showBirthYearPage: {},
        showProfileRolePage: {},
        showExpertisesPage: {},
        showIndustryPage: {},
        showVentureNamePage: {},
        showVentureStartDatePage: {},
        showVentureStagePage: {},
        showReasonToJoinPage: {},
        showMentorRolePage: {},
        showAcceptTermsPage: {},
        nextRoute: {},
    },
};
const Pronoun = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const UserCms = {
    f: {
        userId: {},
        groupCms: {
        // nt: GroupCms, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const UserInbox = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        channels: {
        // nt: ChannelInbox, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ChannelInbox = {
    f: {
        userId: {},
        unseenMessages: {
        // nt: ChannelInboxItemMessage, <-- Assigned later to avoid potential circular dependency.
        },
        unseenSystemMessages: {
        // nt: ChannelInboxItemMessage, <-- Assigned later to avoid potential circular dependency.
        },
        unseenArchivedMessages: {
        // nt: ChannelInboxItemMessage, <-- Assigned later to avoid potential circular dependency.
        },
        latestMessages: {
        // nt: ChannelInboxItemMessage, <-- Assigned later to avoid potential circular dependency.
        },
        latestArchivedMessages: {
        // nt: ChannelInboxItemMessage, <-- Assigned later to avoid potential circular dependency.
        },
        pendingInvitations: {
        // nt: ChannelInboxItemInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        invitations: {
        // nt: ChannelInboxItemInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        itemIdHash: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        channelsExceedMaxCount: {},
        invitationsExceedMaxCount: {},
    },
};
const ChannelInboxItemMessage = {
    f: {
        id: {},
        channelId: {},
        replyToMessageId: {},
        channelMessageType: {},
        messageText: {},
        senderUserHandle: {},
        senderFirstName: {},
        senderLastName: {},
        senderAvatarUrl: {},
        seenAt: {
            nt: DateTimeISO,
        },
        isArchived: {},
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        userIds: {},
    },
};
const ChannelInboxItemInvitation = {
    f: {
        id: {},
        channelId: {},
        messageText: {},
        readByRecipientAt: {
            nt: DateTimeISO,
        },
        status: {},
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        recipientId: {},
    },
};
const AdminTask = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        adminTaskType: {},
        result: {},
        resultMessage: {},
        error: {},
        args: {},
        timeout: {},
        autoRun: {},
        synchronous: {},
        startedAt: {
            nt: DateTimeISO,
        },
        expiresAt: {
            nt: DateTimeISO,
        },
        finishedAt: {
            nt: DateTimeISO,
        },
    },
};
const AdminTaskDef = {
    f: {
        adminTaskType: {},
        label: {},
        description: {},
        args: {
        // nt: AdminTaskArgDef, <-- Assigned later to avoid potential circular dependency.
        },
        available: {},
        timeout: {},
    },
};
const AdminTaskArgDef = {
    f: {
        name: {},
        label: {},
        dataType: {},
        choices: {},
        optional: {},
        description: {},
    },
};
const ChannelListItem = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: ChannelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        name: {},
        topic: {},
        description: {},
        tags: {},
        channelType: {},
        statuses: {
        // nt: BgChannelStatus, <-- Assigned later to avoid potential circular dependency.
        },
        userIds: {},
        otherUserId: {},
        pausedAt: {
            nt: DateTimeISO,
        },
        pausedBy: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        lockedAt: {
            nt: DateTimeISO,
        },
        lockedBy: {},
        archivedAt: {
            nt: DateTimeISO,
        },
        archivedBy: {},
        assumedMentorId: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        creator: {
        // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
        status: {
        // nt: BgChannelStatus, <-- Assigned later to avoid potential circular dependency.
        },
        invitations: {
        // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        isArchivedForMe: {},
        latestMessage: {
        // nt: ChannelMessage, <-- Assigned later to avoid potential circular dependency.
        },
        messages: {
        // nt: ChannelMessage, <-- Assigned later to avoid potential circular dependency.
        },
        myContacts: {
        // nt: Contact, <-- Assigned later to avoid potential circular dependency.
        },
        participants: {
        // nt: ChannelParticipant, <-- Assigned later to avoid potential circular dependency.
        },
        pendingInvitations: {
        // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ErrorCodeOption = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const IndonesianCity = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const IndonesianProvince = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const IqlaaJordanianDistrict = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const IqlaaJordanianGovernorate = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const MastercardBank = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        countryTextId: {},
        name: {},
        enDisplayName: {},
        esDisplayName: {},
        displayName: {},
    },
};
const UserSearch = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        matchingEngineId: {},
        userSearchType: {},
        name: {},
        filter: {
        // nt: UserSearchFilter, <-- Assigned later to avoid potential circular dependency.
        },
        excludeUserIds: {},
        maxResultCount: {},
        subscription: {},
        expiresAt: {
            nt: DateTimeISO,
        },
        resultExpiresAt: {
            nt: DateTimeISO,
        },
        runInfos: {
        // nt: UserSearchRunInfo, <-- Assigned later to avoid potential circular dependency.
        },
        topFoundUsers: {
        // nt: UserListItem, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const UserSearchFilter = {
    f: {
        searchText: {},
        seeksHelp: {},
        offersHelp: {},
        languagesTextIds: {},
        expertisesTextIds: {},
        industriesTextIds: {},
        countryTextIds: {},
        companyStagesTextIds: {},
        latestActivityAfter: {
            nt: DateTimeISO,
        },
    },
};
const UserSearchRunInfo = {
    f: {
        topUserIds: {},
        userCount: {},
        matchCount: {},
        batchSize: {},
        batchCount: {},
        startedAt: {
            nt: DateTimeISO,
        },
        finishedAt: {
            nt: DateTimeISO,
        },
        durationInSecs: {},
        durationHuman: {},
        totalDurationSearchInDb: {},
        totalDurationReadFromDb: {},
        totalDurationWriteToDb: {},
        totalDurationMatching: {},
    },
};
const UserWithScore = {
    f: {
        id: {},
        createdAt: {
            nt: DateTimeISO,
        },
        updatedAt: {
            nt: DateTimeISO,
        },
        deletedAt: {
            nt: DateTimeISO,
        },
        userHandle: {},
        firstName: {},
        lastName: {},
        avatarUrl: {},
        genderTextId: {},
        websites: {
        // nt: LabeledStringValue, <-- Assigned later to avoid potential circular dependency.
        },
        preferredLanguageTextId: {},
        spokenLanguagesTextIds: {},
        countryOfResidenceTextId: {},
        regionOfResidence: {},
        cityOfResidence: {},
        timezone: {},
        roles: {},
        trustLevel: {},
        userBlocks: {
        // nt: UserBlock, <-- Assigned later to avoid potential circular dependency.
        },
        latestActivityAt: {
            nt: DateTimeISO,
        },
        seeksHelp: {},
        offersHelp: {},
        yearsManagementExperience: {},
        yearsOwnershipExperience: {},
        academicExperiences: {
        // nt: AcademicExperience, <-- Assigned later to avoid potential circular dependency.
        },
        businessExperiences: {
        // nt: BusinessExperience, <-- Assigned later to avoid potential circular dependency.
        },
        isOnVacation: {},
        mentor: {
        // nt: MentorsGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        mentee: {
        // nt: MenteesGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        groupMemberships: {
        // nt: IGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        companies: {
        // nt: Company, <-- Assigned later to avoid potential circular dependency.
        },
        countryOfOrigin: {
        // nt: Country, <-- Assigned later to avoid potential circular dependency.
        },
        countryOfResidence: {
        // nt: Country, <-- Assigned later to avoid potential circular dependency.
        },
        educationLevel: {
        // nt: EducationLevel, <-- Assigned later to avoid potential circular dependency.
        },
        endorsements: {
        // nt: EndorsementWithTypes, <-- Assigned later to avoid potential circular dependency.
        },
        groups: {
        // nt: Group, <-- Assigned later to avoid potential circular dependency.
        },
        profileCompletionPercentage: {},
        profileRole: {},
        pronouns: {
        // nt: Pronoun, <-- Assigned later to avoid potential circular dependency.
        },
        pronounsDisplay: {},
        score: {},
    },
};
const ServiceRequest = {
    f: {
        id: {},
        serviceRequestType: {},
        userId: {},
        userRoles: {},
        objectIds: {},
        modelTypes: {},
        result: {},
        messageIds: {},
        message: {},
        errorCode: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        deviceUuid: {},
        source: {},
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        finishedAt: {
            nt: DateTimeISO,
        },
        expiresAt: {
            nt: DateTimeISO,
        },
    },
};
const ContactListItem = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: ContactMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        channelId: {},
        nickname: {},
        typeTextIds: {},
        favorite: {},
        notes: {},
        archivedAt: {
            nt: DateTimeISO,
        },
    },
};
const SidMultiStepAction = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        userId: {},
        userIdent: {},
        userHandle: {},
        email: {},
        phoneNumber: {},
        deviceUuid: {},
        actionType: {},
        actionStatus: {},
        notificationMethod: {},
        result: {},
        confirmToken: {},
        attemptCount: {},
        notificationSentAt: {
            nt: DateTimeISO,
        },
        notificationResult: {},
        notificationId: {},
        textData: {},
        report: {},
        emailPassed: {},
        emailUpdatedAt: {
            nt: DateTimeISO,
        },
        emailVerifiedAt: {
            nt: DateTimeISO,
        },
        errors: {
        // nt: MultiStepActionError, <-- Assigned later to avoid potential circular dependency.
        },
        password: {},
        passwordPassed: {},
        passwordResettedAt: {
            nt: DateTimeISO,
        },
        passwordUpdatedAt: {
            nt: DateTimeISO,
        },
        phoneNumberPassed: {},
        phoneNumberUpdatedAt: {
            nt: DateTimeISO,
        },
        phoneNumberVerifiedAt: {
            nt: DateTimeISO,
        },
        signedInAt: {
            nt: DateTimeISO,
        },
        tfaBackupCodes: {},
        expiresAt: {
            nt: DateTimeISO,
        },
    },
};
const MultiStepActionError = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        key: {},
        messageId: {},
        message: {},
    },
};
const SidMultiStepActionProgress = {
    f: {
        actionId: {},
        userId: {},
        actionType: {},
        actionStatus: {},
        notificationMethod: {},
        result: {},
        attemptCount: {},
        notificationSentAt: {
            nt: DateTimeISO,
        },
        notificationResult: {},
        notificationId: {},
        textData: {},
        report: {},
        emailPassed: {},
        emailUpdatedAt: {
            nt: DateTimeISO,
        },
        emailVerifiedAt: {
            nt: DateTimeISO,
        },
        errors: {
        // nt: MultiStepActionError, <-- Assigned later to avoid potential circular dependency.
        },
        authToken: {},
        authTokenExpiresAt: {
            nt: DateTimeISO,
        },
        passwordPassed: {},
        passwordResettedAt: {
            nt: DateTimeISO,
        },
        passwordUpdatedAt: {
            nt: DateTimeISO,
        },
        phoneNumberPassed: {},
        phoneNumberUpdatedAt: {
            nt: DateTimeISO,
        },
        phoneNumberVerifiedAt: {
            nt: DateTimeISO,
        },
        signedInAt: {
            nt: DateTimeISO,
        },
        expiresAt: {
            nt: DateTimeISO,
        },
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
    },
};
const MyUser = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: UserMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        firstName: {},
        lastName: {},
        userHandle: {},
        phoneNumber: {},
        phoneNumberUpdatedAt: {
            nt: DateTimeISO,
        },
        isPhoneNumberVerified: {},
        email: {},
        emailSource: {},
        emailUpdatedAt: {
            nt: DateTimeISO,
        },
        isEmailVerified: {},
        genderTextId: {},
        cityOfResidence: {},
        regionOfResidence: {},
        countryOfResidenceTextId: {},
        postalCode: {},
        avatarUrl: {},
        websites: {
        // nt: LabeledStringValue, <-- Assigned later to avoid potential circular dependency.
        },
        authType: {},
        inviteCode: {},
        tfaBackupCodes: {},
        passwordUpdatedAt: {
            nt: DateTimeISO,
        },
        preferredLanguageTextId: {},
        spokenLanguagesTextIds: {},
        selectedUiLanguageTextId: {},
        fallbackUiLanguageTextId: {},
        discoverable: {},
        roles: {},
        appFeatures: {},
        source: {},
        timezone: {},
        preferences: {
        // nt: UserPreferences, <-- Assigned later to avoid potential circular dependency.
        },
        trustLevel: {},
        signedInAt: {
            nt: DateTimeISO,
        },
        signedOutAt: {
            nt: DateTimeISO,
        },
        latestActivityAt: {
            nt: DateTimeISO,
        },
        userDevices: {
        // nt: UserDeviceWithoutAuth, <-- Assigned later to avoid potential circular dependency.
        },
        userBlocks: {
        // nt: UserBlock, <-- Assigned later to avoid potential circular dependency.
        },
        contacts: {
        // nt: Contact, <-- Assigned later to avoid potential circular dependency.
        },
        inactivatedAt: {
            nt: DateTimeISO,
        },
        inactivatedBy: {},
        termsAndConditionsAcceptedAt: {
            nt: DateTimeISO,
        },
        optIntoNewsletter: {},
        onboardingStage: {},
        suspendedAt: {
            nt: DateTimeISO,
        },
        suspendedBy: {},
        anonymizedAt: {
            nt: DateTimeISO,
        },
        addedToBgVaultAt: {
            nt: DateTimeISO,
        },
        syncedToAnalyticsAt: {
            nt: DateTimeISO,
        },
        companyIds: {},
        companies: {
        // nt: Company, <-- Assigned later to avoid potential circular dependency.
        },
        groupIds: {},
        parentGroupIds: {},
        externalGroupIds: {},
        pronounsTextIds: {},
        groupMemberships: {
        // nt: IGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        seeksHelp: {},
        offersHelp: {},
        birthYear: {},
        ethnicity: {},
        educationLevelTextId: {},
        personalBio: {},
        yearsManagementExperience: {},
        yearsOwnershipExperience: {},
        academicExperienceIds: {},
        academicExperiences: {
        // nt: AcademicExperience, <-- Assigned later to avoid potential circular dependency.
        },
        genderSelfDescribed: {},
        businessExperienceIds: {},
        businessExperiences: {
        // nt: BusinessExperience, <-- Assigned later to avoid potential circular dependency.
        },
        cityOfOrigin: {},
        regionOfOrigin: {},
        countryOfOriginTextId: {},
        isOnVacation: {},
        avatarAsset: {
        // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
        profileRoleHistory: {
        // nt: UserProfileRoleHistoryItem, <-- Assigned later to avoid potential circular dependency.
        },
        ssoIdp: {},
        originatedInMm2: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2PasswordHash: {},
        mm2Id: {},
        mm2PhotoOriginal: {},
        mm2BasicAccountCompleted: {},
        hasSignedInToMm3: {},
        hasSignedInToMm2: {},
        mentor: {
        // nt: MentorsGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        mentee: {
        // nt: MenteesGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        countryOfResidence: {
        // nt: Country, <-- Assigned later to avoid potential circular dependency.
        },
        gender: {
        // nt: Gender, <-- Assigned later to avoid potential circular dependency.
        },
        latestUserDevice: {
        // nt: UserDeviceWithoutAuth, <-- Assigned later to avoid potential circular dependency.
        },
        spokenLanguages: {
        // nt: Language, <-- Assigned later to avoid potential circular dependency.
        },
        preferredLanguage: {
        // nt: Language, <-- Assigned later to avoid potential circular dependency.
        },
        fallbackUiLanguage: {
        // nt: Language, <-- Assigned later to avoid potential circular dependency.
        },
        preferredUiLanguage: {
        // nt: Language, <-- Assigned later to avoid potential circular dependency.
        },
        unreadInAppMessages: {
        // nt: Notification, <-- Assigned later to avoid potential circular dependency.
        },
        channels: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                mustBeAccepted: {
                    nt: Boolean,
                    it: [0],
                },
                mustHaveMessages: {
                    nt: Boolean,
                    it: [0],
                },
            },
            // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        channelInvitations: {
        // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        channelParticipants: {
        // nt: ChannelParticipant, <-- Assigned later to avoid potential circular dependency.
        },
        countryOfOrigin: {
        // nt: Country, <-- Assigned later to avoid potential circular dependency.
        },
        educationLevel: {
        // nt: EducationLevel, <-- Assigned later to avoid potential circular dependency.
        },
        endorsements: {
        // nt: EndorsementWithTypes, <-- Assigned later to avoid potential circular dependency.
        },
        groupMembers: {
        // nt: IGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        groups: {
        // nt: Group, <-- Assigned later to avoid potential circular dependency.
        },
        hasTrainings: {},
        profileCompletionPercentage: {},
        profileRole: {},
        pronouns: {
        // nt: Pronoun, <-- Assigned later to avoid potential circular dependency.
        },
        pronounsDisplay: {},
        uploadedAssets: {
        // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const ReportUserReason = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        textId: {},
        parentTextId: {},
        isParent: {},
        optionType: {},
        value: {},
        translatedValue: {},
        supportedLanguages: {},
        materialIconName: {},
        description: {},
        translatedDescription: {},
        language: {},
        mm2Id: {},
        mm2Value: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        mm2TextId: {},
        mm3TextId: {},
        childOptions: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        parentOption: {
        // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const Training = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        title: {},
        titleAr: {},
        titleEn: {},
        titleEs: {},
        titleInd: {},
        titleRu: {},
        titleSo: {},
        slug: {},
        slugAr: {},
        slugEn: {},
        slugEs: {},
        slugInd: {},
        slugRu: {},
        slugSo: {},
        urlPath: {},
        urlPathAr: {},
        urlPathEn: {},
        urlPathEs: {},
        urlPathInd: {},
        urlPathRu: {},
        urlPathSo: {},
        relativeUrlPath: {},
        relativeUrlPathAr: {},
        relativeUrlPathEn: {},
        relativeUrlPathEs: {},
        relativeUrlPathInd: {},
        relativeUrlPathRu: {},
        relativeUrlPathSo: {},
        live: {},
        locked: {},
        expired: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        numCorrectAnswersToPass: {},
        about: {},
        aboutAr: {},
        aboutEn: {},
        aboutEs: {},
        aboutInd: {},
        aboutRu: {},
        aboutSo: {},
        aboutMm2: {},
        aboutArMm2: {},
        aboutEnMm2: {},
        aboutEsMm2: {},
        aboutIndMm2: {},
        aboutRuMm2: {},
        aboutSoMm2: {},
        introduction: {},
        introductionAr: {},
        introductionEn: {},
        introductionEs: {},
        introductionInd: {},
        introductionRu: {},
        introductionSo: {},
        introductionMm2: {},
        introductionArMm2: {},
        introductionEnMm2: {},
        introductionEsMm2: {},
        introductionIndMm2: {},
        introductionRuMm2: {},
        introductionSoMm2: {},
        lessonPlanLevels: {},
        certificateTemplateId: {},
        code: {},
        tags: {},
        restricted: {},
        showInMenus: {},
        countriesTextIds: {},
        groupIds: {},
        languagesTextIds: {},
        seeksHelp: {},
        offersHelp: {},
        imageUrls: {},
        lessonPlan: {},
        lessonPlanAr: {},
        lessonPlanEn: {},
        lessonPlanEs: {},
        lessonPlanInd: {},
        lessonPlanRu: {},
        lessonPlanSo: {},
        trainingContentPages: {
        // nt: TrainingContentPage, <-- Assigned later to avoid potential circular dependency.
        },
        myTrainingSessions: {
        // nt: TrainingSession, <-- Assigned later to avoid potential circular dependency.
        },
        myLatestTrainingSession: {
        // nt: TrainingSession, <-- Assigned later to avoid potential circular dependency.
        },
        isTrainingCompletedForMe: {},
        isTrainingPassedForMe: {},
    },
};
const TrainingContentPage = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        title: {},
        titleAr: {},
        titleEn: {},
        titleEs: {},
        titleInd: {},
        titleRu: {},
        titleSo: {},
        slug: {},
        slugAr: {},
        slugEn: {},
        slugEs: {},
        slugInd: {},
        slugRu: {},
        slugSo: {},
        urlPath: {},
        urlPathAr: {},
        urlPathEn: {},
        urlPathEs: {},
        urlPathInd: {},
        urlPathRu: {},
        urlPathSo: {},
        relativeUrlPath: {},
        relativeUrlPathAr: {},
        relativeUrlPathEn: {},
        relativeUrlPathEs: {},
        relativeUrlPathInd: {},
        relativeUrlPathRu: {},
        relativeUrlPathSo: {},
        live: {},
        locked: {},
        expired: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        children: {
        // nt: TrainingContentPage, <-- Assigned later to avoid potential circular dependency.
        },
        trainingId: {},
    },
};
const TrainingSession = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        startedAt: {
            nt: DateTimeISO,
        },
        trainingId: {},
        userId: {},
        isInProgress: {},
        percentCompleted: {},
        completionInfo: {
        // nt: TrainingSessionCompletionInfo, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const TrainingSessionCompletionInfo = {
    f: {
        updatedAt: {
            nt: DateTimeISO,
        },
        mm2Id: {},
        syncedWithMm2At: {
            nt: DateTimeISO,
        },
        completedAt: {
            nt: DateTimeISO,
        },
        questionsAnsweredCorrectly: {},
        numberOfQuestions: {},
        numCorrectAnswersToPass: {},
        isPassingScore: {},
        preTestQuestionsAnsweredCorrectly: {},
        numberOfPreTestQuestions: {},
    },
};
const UserAuthResponse = {
    f: {
        userId: {},
        firstName: {},
        lastName: {},
        userHandle: {},
        email: {},
        phoneNumber: {},
        roles: {},
        onboardingStage: {},
        foundUser: {},
        authType: {},
        authToken: {},
        authTokenExpiresAt: {
            nt: DateTimeISO,
        },
    },
};
const ContentTag = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        objectId: {},
        contentModelType: {},
        userId: {},
        contentTagTypeTextId: {},
        childContentTagTypeTextId: {},
        messageText: {},
        moderationConcern: {
        // nt: ModerationConcern, <-- Assigned later to avoid potential circular dependency.
        },
        allModerationConcerns: {
        // nt: ModerationConcern, <-- Assigned later to avoid potential circular dependency.
        },
        approvedByRecipientAt: {
            nt: DateTimeISO,
        },
        verifiedBy: {},
        verifiedAt: {
            nt: DateTimeISO,
        },
        dismissedBy: {},
        dismissedAt: {
            nt: DateTimeISO,
        },
        childContentTagType: {
        // nt: ContentTagType, <-- Assigned later to avoid potential circular dependency.
        },
        contentTagType: {
        // nt: ContentTagType, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const SupportChannelConfig = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        groupId: {},
        senderUserId: {},
        isActive: {},
        createSupportChannelForMentees: {},
        createSupportChannelForMentors: {},
        channelLanguageTextId: {},
        filterByGenderTextIds: {},
        firstMessageText: {},
        sendNotifications: {},
    },
};
const NotificationTemplate = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        name: {},
        description: {},
        titleAr: {},
        messageTextAr: {},
        shortMessageTextAr: {},
        htmlMessageAr: {},
        titleEn: {},
        messageTextEn: {},
        shortMessageTextEn: {},
        htmlMessageEn: {},
        titleEs: {},
        messageTextEs: {},
        shortMessageTextEs: {},
        htmlMessageEs: {},
        titleId: {},
        messageTextId: {},
        shortMessageTextId: {},
        htmlMessageId: {},
        titleRu: {},
        messageTextRu: {},
        shortMessageTextRu: {},
        htmlMessageRu: {},
        titleSo: {},
        messageTextSo: {},
        shortMessageTextSo: {},
        htmlMessageSo: {},
        version: {},
        senderName: {},
        senderEmail: {},
        action0: {},
        action1: {},
        action2: {},
        sendEmail: {},
        sendInAppMessage: {},
        sendPushNotification: {},
        sendSms: {},
        isCore: {},
    },
};
const ContentStatus = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
        optionsUpdatedAt: {
            nt: Long,
        },
        myUserUpdatedAt: {
            nt: Long,
        },
        myUserInboxUpdatedAt: {
            nt: Long,
        },
    },
};
const BgChannelChangedEvent = {
    f: {
        serviceRequest: {
        // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        channelId: {},
        invitationId: {},
        messageId: {},
        participantId: {},
        eventType: {},
        requestId: {},
    },
};
const ObjectChangedEvent = {
    f: {
        serviceRequest: {
        // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        objectId: {},
        modelType: {},
        ownerUserId: {},
        messageType: {},
        requestId: {},
        object: {
        // nt: BaseModel, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const BaseModel = {
    f: {
        id: {},
        adminNotes: {},
        events: {
        // nt: ModelEvent, <-- Assigned later to avoid potential circular dependency.
        },
        metadata: {
        // nt: BaseModelMetadata, <-- Assigned later to avoid potential circular dependency.
        },
        createdAt: {
            nt: DateTimeISO,
        },
        createdBy: {},
        updatedAt: {
            nt: DateTimeISO,
        },
        updatedBy: {},
        deletedAt: {
            nt: DateTimeISO,
        },
        deletedBy: {},
    },
};
//
//
//
//
//
//
// ==================================================================================================
//                                             Interface
// ==================================================================================================
//
//
//
//
//
//
const BaseModelMetadata = {
    f: {
        ...UserMetadata.f,
    },
};
const IGroupMembership = {
    f: {
        ...GroupMembership.f,
        ...MenteesGroupMembership.f,
        ...MentorsGroupMembership.f,
        ...MastercardGroupMembership.f,
        ...IqlaaGroupMembership.f,
        ...StriveIndonesiaGroupMembership.f,
    },
};
//
//
//
//
//
//
// ==================================================================================================
//                                               Union
// ==================================================================================================
//
//
//
//
//
//
// None of your Unions have custom scalars.
//
//
//
//
//
//
// ==================================================================================================
//                                                Root
// ==================================================================================================
//
//
//
//
//
//
const Query = {
    f: {
        doesUserExist: {
            a: {
                identType: {
                    nt: UserIdentType,
                    it: [1],
                },
                ident: {
                    nt: String,
                    it: [1],
                },
            },
        },
        findUserById: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
        findUserByIdent: {
            a: {
                options: {
                    nt: FindUserByIdentOptions,
                    it: [0],
                },
                identType: {
                    nt: UserIdentType,
                    it: [0],
                },
                ident: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
        isUserIdentAvailable: {
            a: {
                identType: {
                    nt: UserIdentType,
                    it: [0],
                },
                ident: {
                    nt: String,
                    it: [1],
                },
            },
        },
        findUsers: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: UserInput,
                    it: [0],
                },
                filter: {
                    nt: UserListFilter,
                    it: [0],
                },
            },
            // nt: UserListItem, <-- Assigned later to avoid potential circular dependency.
        },
        findUserDeviceById: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: UserDeviceWithoutAuth, <-- Assigned later to avoid potential circular dependency.
        },
        findUserDevices: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: UserDeviceInput,
                    it: [0],
                },
                filter: {
                    nt: UserDeviceListFilter,
                    it: [0],
                },
            },
            // nt: UserDeviceWithoutAuth, <-- Assigned later to avoid potential circular dependency.
        },
        findMyUserDevices: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
            },
            // nt: UserDeviceWithoutAuth, <-- Assigned later to avoid potential circular dependency.
        },
        findCompanyStages: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: CompanyStage, <-- Assigned later to avoid potential circular dependency.
        },
        findCompanyTypes: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: CompanyType, <-- Assigned later to avoid potential circular dependency.
        },
        findEducationLevels: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: EducationLevel, <-- Assigned later to avoid potential circular dependency.
        },
        findExpertises: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
                isParent: {
                    nt: Boolean,
                    it: [0],
                },
                parentTextId: {
                    nt: String,
                    it: [0],
                },
            },
            // nt: Expertise, <-- Assigned later to avoid potential circular dependency.
        },
        findGenders: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: Gender, <-- Assigned later to avoid potential circular dependency.
        },
        findPronouns: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: Pronoun, <-- Assigned later to avoid potential circular dependency.
        },
        findUserCmsByUserId: {
            a: {
                userId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: UserCms, <-- Assigned later to avoid potential circular dependency.
        },
        myInbox: {
            a: {
                refresh: {
                    nt: Boolean,
                    it: [0],
                },
            },
            // nt: UserInbox, <-- Assigned later to avoid potential circular dependency.
        },
        findMyInbox: {
            a: {
                refresh: {
                    nt: Boolean,
                    it: [0],
                },
            },
            // nt: UserInbox, <-- Assigned later to avoid potential circular dependency.
        },
        findAdminTaskById: {
            a: {
                adminTaskId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: AdminTask, <-- Assigned later to avoid potential circular dependency.
        },
        findAdminTaskDefs: {
        // nt: AdminTaskDef, <-- Assigned later to avoid potential circular dependency.
        },
        findUploadedAssetById: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
        findUploadedAssets: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: UploadedAssetInput,
                    it: [0],
                },
                filter: {
                    nt: UploadedAssetListFilter,
                    it: [0],
                },
            },
            // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
        findUploadedAssetsForUser: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelInvitationById: {
            a: {
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelInvitationsBetweenUsers: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                onlyUnseen: {
                    nt: Boolean,
                    it: [0],
                },
                onlyPending: {
                    nt: Boolean,
                    it: [0],
                },
                userIds: {
                    nt: String,
                    it: [1, [1]],
                },
            },
            // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelInvitationsForUser: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                onlyUnseen: {
                    nt: Boolean,
                    it: [0],
                },
                onlyPending: {
                    nt: Boolean,
                    it: [0],
                },
                direction: {
                    nt: ChannelInvitationDirection,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        myChannelInvitations: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                onlyUnseen: {
                    nt: Boolean,
                    it: [0],
                },
                onlyPending: {
                    nt: Boolean,
                    it: [0],
                },
                direction: {
                    nt: ChannelInvitationDirection,
                    it: [0],
                },
            },
            // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        findPendingChannelInvitationsForUser: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelById: {
            a: {
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        findChannels: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: ChannelInput,
                    it: [0],
                },
                filter: {
                    nt: ChannelListFilter,
                    it: [0],
                },
            },
            // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelsForUser: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                mustBeAccepted: {
                    nt: Boolean,
                    it: [0],
                },
                mustHaveMessages: {
                    nt: Boolean,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        find1On1Channel: {
            a: {
                userIds: {
                    nt: String,
                    it: [1, [1]],
                },
            },
            // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        findMyChannels: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                addLatestMessage: {
                    nt: Boolean,
                    it: [0],
                },
                participantLimit: {
                    nt: Int,
                    it: [0],
                },
            },
            // nt: ChannelListItem, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelMessageById: {
            a: {
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ChannelMessage, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelMessages: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: ChannelMessageInput,
                    it: [0],
                },
                filter: {
                    nt: ChannelMessageListFilter,
                    it: [0],
                },
            },
            // nt: ChannelMessage, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelParticipants: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: ChannelParticipantInput,
                    it: [0],
                },
                filter: {
                    nt: ChannelParticipantListFilter,
                    it: [0],
                },
            },
            // nt: ChannelParticipant, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelParticipantsForChannel: {
            a: {
                match: {
                    nt: ChannelParticipantInput,
                    it: [0],
                },
                channelId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ChannelParticipant, <-- Assigned later to avoid potential circular dependency.
        },
        findChannelParticipantById: {
            a: {
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ChannelParticipant, <-- Assigned later to avoid potential circular dependency.
        },
        findDeclineChannelInvitationReasons: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: DeclineChannelInvitationReason, <-- Assigned later to avoid potential circular dependency.
        },
        findOptions: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
                isParent: {
                    nt: Boolean,
                    it: [0],
                },
                parentTextId: {
                    nt: String,
                    it: [0],
                },
                optionType: {
                    nt: OptionType,
                    it: [1],
                },
            },
            // nt: Option, <-- Assigned later to avoid potential circular dependency.
        },
        findCountries: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: Country, <-- Assigned later to avoid potential circular dependency.
        },
        findErrorCodes: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: ErrorCodeOption, <-- Assigned later to avoid potential circular dependency.
        },
        findIndustries: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: Industry, <-- Assigned later to avoid potential circular dependency.
        },
        findLanguages: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: Language, <-- Assigned later to avoid potential circular dependency.
        },
        apiVersion: {},
        findGroupCmsByGroupIdent: {
            a: {
                groupIdent: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: GroupCms, <-- Assigned later to avoid potential circular dependency.
        },
        findGroupCmsByGroupId: {
            a: {
                groupId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: GroupCms, <-- Assigned later to avoid potential circular dependency.
        },
        findGroupCmsById: {
            a: {
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: GroupCms, <-- Assigned later to avoid potential circular dependency.
        },
        findGroupMembershipById: {
            a: {
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: GroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        myGroupMemberships: {
        // nt: IGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        findGroupMemberships: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: GroupMembershipInput,
                    it: [0],
                },
                filter: {
                    nt: GroupMembershipListFilter,
                    it: [0],
                },
            },
            // nt: IGroupMembership, <-- Assigned later to avoid potential circular dependency.
        },
        findGroupById: {
            a: {
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: Group, <-- Assigned later to avoid potential circular dependency.
        },
        findGroupByIdent: {
            a: {
                groupIdent: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: Group, <-- Assigned later to avoid potential circular dependency.
        },
        findGroups: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: GroupInput,
                    it: [0],
                },
                filter: {
                    nt: GroupListFilter,
                    it: [0],
                },
            },
            // nt: Group, <-- Assigned later to avoid potential circular dependency.
        },
        findIndonesianCities: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: IndonesianCity, <-- Assigned later to avoid potential circular dependency.
        },
        findIndonesianProvinces: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: IndonesianProvince, <-- Assigned later to avoid potential circular dependency.
        },
        findIqlaaJordanianDistricts: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: IqlaaJordanianDistrict, <-- Assigned later to avoid potential circular dependency.
        },
        findIqlaaJordanianGovernorates: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: IqlaaJordanianGovernorate, <-- Assigned later to avoid potential circular dependency.
        },
        findMastercardBanks: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: MastercardBank, <-- Assigned later to avoid potential circular dependency.
        },
        userWillReceiveWelcomeMessage: {
            a: {
                userId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        findUserSearchById: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                userSearchId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: UserSearch, <-- Assigned later to avoid potential circular dependency.
        },
        findUserSearches: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: UserSearchInput,
                    it: [0],
                },
                filter: {
                    nt: UserSearchListFilter,
                    it: [0],
                },
            },
            // nt: UserSearch, <-- Assigned later to avoid potential circular dependency.
        },
        findUserSearchResults: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                runIndex: {
                    nt: Int,
                    it: [0],
                },
                userSearchId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: UserWithScore, <-- Assigned later to avoid potential circular dependency.
        },
        myUserSearches: {
        // nt: UserSearch, <-- Assigned later to avoid potential circular dependency.
        },
        findServiceRequestById: {
            a: {
                serviceRequestId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        findContactById: {
            a: {
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: Contact, <-- Assigned later to avoid potential circular dependency.
        },
        findContact: {
            a: {
                createIfNotExist: {
                    nt: Boolean,
                    it: [0],
                },
                match: {
                    nt: ContactInput,
                    it: [1],
                },
            },
            // nt: Contact, <-- Assigned later to avoid potential circular dependency.
        },
        findContacts: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: ContactInput,
                    it: [0],
                },
                filter: {
                    nt: SidContactListFilter,
                    it: [0],
                },
            },
            // nt: ContactListItem, <-- Assigned later to avoid potential circular dependency.
        },
        findMyActiveMultiStepActions: {
        // nt: SidMultiStepAction, <-- Assigned later to avoid potential circular dependency.
        },
        findMyActiveMultiStepAction: {
        // nt: SidMultiStepAction, <-- Assigned later to avoid potential circular dependency.
        },
        getMultiStepActionProgress: {
            a: {
                confirmToken: {
                    nt: String,
                    it: [0],
                },
                actionId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: SidMultiStepActionProgress, <-- Assigned later to avoid potential circular dependency.
        },
        findAvailableUserHandle: {
            a: {
                startValue: {
                    nt: String,
                    it: [1],
                },
            },
        },
        getMyUser: {
        // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
        findMyUser: {
        // nt: MyUser, <-- Assigned later to avoid potential circular dependency.
        },
        getMyBlockedUsers: {
        // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
        findMyBlockedUsers: {
        // nt: User, <-- Assigned later to avoid potential circular dependency.
        },
        verifyMyPassword: {
            a: {
                password: {
                    nt: String,
                    it: [1],
                },
            },
        },
        findReportUserReasons: {
            a: {
                fallbackUiLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
            },
            // nt: ReportUserReason, <-- Assigned later to avoid potential circular dependency.
        },
        findTrainingsForMe: {
            a: {
                displayInTrainingsList: {
                    nt: Boolean,
                    it: [0],
                },
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
            },
            // nt: Training, <-- Assigned later to avoid potential circular dependency.
        },
        findTrainingsForUser: {
            a: {
                displayInTrainingsList: {
                    nt: Boolean,
                    it: [0],
                },
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: Training, <-- Assigned later to avoid potential circular dependency.
        },
        findTrainingById: {
            a: {
                selectedLanguage: {
                    nt: UiLanguage,
                    it: [0],
                },
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: Training, <-- Assigned later to avoid potential circular dependency.
        },
        findTrainingSessionById: {
            a: {
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: TrainingSession, <-- Assigned later to avoid potential circular dependency.
        },
        findTrainingSessionsForMe: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                trainingId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: TrainingSession, <-- Assigned later to avoid potential circular dependency.
        },
        findTrainingSessionsByTrainingId: {
            a: {
                userId: {
                    nt: String,
                    it: [0],
                },
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                trainingId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: TrainingSession, <-- Assigned later to avoid potential circular dependency.
        },
        findLatestTrainingSessionForMe: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                trainingId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: TrainingSession, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
const Mutation = {
    f: {
        createOneTimeAuthTokenForMe: {},
        signInUser: {
            a: {
                input: {
                    nt: SignInUserInput,
                    it: [1],
                },
            },
            // nt: UserAuthResponse, <-- Assigned later to avoid potential circular dependency.
        },
        signInOauthUser: {
            a: {
                input: {
                    nt: SignInOauthUserInput,
                    it: [1],
                },
            },
            // nt: UserAuthResponse, <-- Assigned later to avoid potential circular dependency.
        },
        signMeOut: {},
        signUpUser: {
            a: {
                input: {
                    nt: SignUpUserInput,
                    it: [1],
                },
            },
            // nt: UserAuthResponse, <-- Assigned later to avoid potential circular dependency.
        },
        verifyOneTimeAuthToken: {
            a: {
                input: {
                    nt: VerifyOneTimeAuthTokenInput,
                    it: [1],
                },
            },
        },
        addAppFeatureToUser: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: UserInput,
                    it: [0],
                },
                filter: {
                    nt: UserListFilter,
                    it: [0],
                },
                appFeature: {
                    nt: AppFeature,
                    it: [1],
                },
            },
        },
        deleteUser: {
            a: {
                anonymizePersonalData: {
                    nt: Boolean,
                    it: [0],
                },
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                description: {
                    nt: String,
                    it: [0],
                },
                cause: {
                    nt: String,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        removeAppFeatureFromUser: {
            a: {
                options: {
                    nt: FindObjectsOptions,
                    it: [0],
                },
                match: {
                    nt: UserInput,
                    it: [0],
                },
                filter: {
                    nt: UserListFilter,
                    it: [0],
                },
                appFeature: {
                    nt: AppFeature,
                    it: [1],
                },
            },
        },
        reportUser: {
            a: {
                input: {
                    nt: ReportUserInput,
                    it: [1],
                },
            },
        },
        updateUser: {
            a: {
                input: {
                    nt: UserInput,
                    it: [1],
                },
            },
        },
        createUserDevice: {
            a: {
                input: {
                    nt: UserDeviceInput,
                    it: [1],
                },
            },
            // nt: UserDeviceWithoutAuth, <-- Assigned later to avoid potential circular dependency.
        },
        updateUserDevice: {
            a: {
                input: {
                    nt: UserDeviceInput,
                    it: [1],
                },
            },
        },
        createAcademicExperience: {
            a: {
                input: {
                    nt: AcademicExperienceInput,
                    it: [1],
                },
            },
            // nt: AcademicExperience, <-- Assigned later to avoid potential circular dependency.
        },
        deleteAcademicExperience: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                academicExperienceId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateAcademicExperience: {
            a: {
                input: {
                    nt: AcademicExperienceInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        createBusinessExperience: {
            a: {
                input: {
                    nt: BusinessExperienceInput,
                    it: [1],
                },
            },
            // nt: BusinessExperience, <-- Assigned later to avoid potential circular dependency.
        },
        deleteBusinessExperience: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                businessExperienceId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateBusinessExperience: {
            a: {
                input: {
                    nt: BusinessExperienceInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        createCompany: {
            a: {
                input: {
                    nt: CompanyInput,
                    it: [1],
                },
            },
            // nt: Company, <-- Assigned later to avoid potential circular dependency.
        },
        deleteCompany: {
            a: {
                anonymizePersonalData: {
                    nt: Boolean,
                    it: [1],
                },
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                companyId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateCompany: {
            a: {
                input: {
                    nt: CompanyInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        findAndUpdateAllMm2Users: {},
        createAdminTask: {
            a: {
                adminTaskInput: {
                    nt: AdminTaskInput,
                    it: [1],
                },
            },
            // nt: AdminTask, <-- Assigned later to avoid potential circular dependency.
        },
        deleteAdminTask: {
            a: {
                adminTaskId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        runAdminTask: {
            a: {
                adminTaskId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateAdminTask: {
            a: {
                adminTaskInput: {
                    nt: AdminTaskInput,
                    it: [1],
                },
            },
            // nt: AdminTask, <-- Assigned later to avoid potential circular dependency.
        },
        createUploadedAsset: {
            a: {
                input: {
                    nt: UploadedAssetInput,
                    it: [1],
                },
            },
            // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
        deleteUploadedAsset: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                id: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
        initAssetUpload: {
            a: {
                input: {
                    nt: UploadedAssetInput,
                    it: [1],
                },
            },
            // nt: UploadedAsset, <-- Assigned later to avoid potential circular dependency.
        },
        updateUploadedAsset: {
            a: {
                input: {
                    nt: UploadedAssetInput,
                    it: [1],
                },
            },
        },
        acceptChannelInvitation: {
            a: {
                channelInvitationId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        createChannelInvitation: {
            a: {
                input: {
                    nt: ChannelInvitationInput,
                    it: [1],
                },
            },
            // nt: ChannelInvitation, <-- Assigned later to avoid potential circular dependency.
        },
        declineChannelInvitation: {
            a: {
                reasonTextId: {
                    nt: DeclineChannelInvitationReasonTextId,
                    it: [1],
                },
                channelInvitationId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        deleteChannelInvitation: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                channelInvitationId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        dismissChannelInvitationFromInbox: {
            a: {
                channelInvitationId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        updateChannelInvitation: {
            a: {
                input: {
                    nt: ChannelInvitationInput,
                    it: [1],
                },
            },
        },
        archiveChannelForMe: {
            a: {
                channelId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        createChannel: {
            a: {
                input: {
                    nt: ChannelInput,
                    it: [1],
                },
            },
            // nt: Channel, <-- Assigned later to avoid potential circular dependency.
        },
        deleteChannel: {
            a: {
                anonymizePersonalData: {
                    nt: Boolean,
                    it: [0],
                },
                deletePhysically: {
                    nt: Boolean,
                    it: [0],
                },
                channelId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        markChannelMessagesAsSeenByMe: {
            a: {
                channelId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        updateChannel: {
            a: {
                input: {
                    nt: ChannelInput,
                    it: [1],
                },
            },
        },
        unarchiveChannelForMe: {
            a: {
                channelId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        addChannelMessageEvent: {
            a: {
                input: {
                    nt: BgAddChannelMessageEventInput,
                    it: [1],
                },
            },
        },
        createChannelMessage: {
            a: {
                input: {
                    nt: ChannelMessageInput,
                    it: [1],
                },
            },
            // nt: ChannelMessage, <-- Assigned later to avoid potential circular dependency.
        },
        deleteChannelMessage: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                channelMessageId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        updateChannelMessage: {
            a: {
                input: {
                    nt: ChannelMessageInput,
                    it: [1],
                },
            },
        },
        createChannelParticipant: {
            a: {
                input: {
                    nt: ChannelParticipantInput,
                    it: [1],
                },
            },
            // nt: ChannelParticipant, <-- Assigned later to avoid potential circular dependency.
        },
        deleteChannelParticipant: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                channelParticipantId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        updateChannelParticipant: {
            a: {
                input: {
                    nt: ChannelParticipantInput,
                    it: [1],
                },
            },
        },
        createContentTag: {
            a: {
                input: {
                    nt: ContentTagInput,
                    it: [1],
                },
            },
            // nt: ContentTag, <-- Assigned later to avoid potential circular dependency.
        },
        deleteContentTag: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                contentTagId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateContentTag: {
            a: {
                input: {
                    nt: ContentTagInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        createGroupMembership: {
            a: {
                input: {
                    nt: GroupMembershipInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        createMenteesGroupMembership: {
            a: {
                input: {
                    nt: MenteesGroupMembershipInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        createMentorsGroupMembership: {
            a: {
                input: {
                    nt: MentorsGroupMembershipInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        deleteGroupMembership: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                groupMembershipId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        updateGroupMembership: {
            a: {
                input: {
                    nt: GroupMembershipInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateIqlaaGroupMembership: {
            a: {
                input: {
                    nt: IqlaaGroupMembershipInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateMastercardGroupMembership: {
            a: {
                input: {
                    nt: MastercardGroupMembershipInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateMenteesGroupMembership: {
            a: {
                input: {
                    nt: MenteesGroupMembershipInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateMentorsGroupMembership: {
            a: {
                input: {
                    nt: MentorsGroupMembershipInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        addUserToGroup: {
            a: {
                roles: {
                    nt: GroupMembershipRole,
                    it: [1, [1]],
                },
                groupIdent: {
                    nt: String,
                    it: [0],
                },
                groupId: {
                    nt: String,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        createGroup: {
            a: {
                input: {
                    nt: GroupInput,
                    it: [1],
                },
            },
            // nt: Group, <-- Assigned later to avoid potential circular dependency.
        },
        deleteGroup: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                groupId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        removeUserFromGroup: {
            a: {
                force: {
                    nt: Boolean,
                    it: [1],
                },
                groupIdent: {
                    nt: String,
                    it: [0],
                },
                groupId: {
                    nt: String,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        updateGroup: {
            a: {
                input: {
                    nt: GroupInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        createSupportChannelConfig: {
            a: {
                input: {
                    nt: SupportChannelConfigInput,
                    it: [1],
                },
            },
            // nt: SupportChannelConfig, <-- Assigned later to avoid potential circular dependency.
        },
        deleteSupportChannelConfig: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                supportChannelConfigId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateSupportChannelConfig: {
            a: {
                input: {
                    nt: SupportChannelConfigInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        createUserSearch: {
            a: {
                input: {
                    nt: UserSearchInput,
                    it: [1],
                },
            },
            // nt: UserSearch, <-- Assigned later to avoid potential circular dependency.
        },
        deleteUserSearch: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                userSearchId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateUserSearch: {
            a: {
                input: {
                    nt: UserSearchInput,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        createNotification: {
            a: {
                notificationInput: {
                    nt: NotificationInput,
                    it: [1],
                },
            },
            // nt: Notification, <-- Assigned later to avoid potential circular dependency.
        },
        deleteNotification: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                notificationId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        markInAppMessageReceived: {
            a: {
                actionTaken: {
                    nt: AppAction,
                    it: [1],
                },
                notificationId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        sendMultiStepActionNotification: {
            a: {
                input: {
                    nt: SendMultiStepActionNotificationInput,
                    it: [1],
                },
            },
        },
        updateNotification: {
            a: {
                notificationInput: {
                    nt: NotificationInput,
                    it: [1],
                },
            },
        },
        createNotificationTemplate: {
            a: {
                notificationTemplateInput: {
                    nt: NotificationTemplateInput,
                    it: [1],
                },
            },
            // nt: NotificationTemplate, <-- Assigned later to avoid potential circular dependency.
        },
        deleteNotificationTemplate: {
            a: {
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                notificationTemplateId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        updateNotificationTemplate: {
            a: {
                notificationTemplateInput: {
                    nt: NotificationTemplateInput,
                    it: [1],
                },
            },
        },
        createContact: {
            a: {
                input: {
                    nt: ContactInput,
                    it: [1],
                },
            },
            // nt: Contact, <-- Assigned later to avoid potential circular dependency.
        },
        updateContact: {
            a: {
                input: {
                    nt: ContactInput,
                    it: [1],
                },
            },
        },
        createMultiStepAction: {
            a: {
                input: {
                    nt: SidMultiStepActionInput,
                    it: [1],
                },
            },
            // nt: SidMultiStepActionProgress, <-- Assigned later to avoid potential circular dependency.
        },
        startResetPassword: {
            a: {
                input: {
                    nt: UserIdentInput,
                    it: [1],
                },
            },
            // nt: SidMultiStepActionProgress, <-- Assigned later to avoid potential circular dependency.
        },
        startVerifyEmail: {
            a: {
                email: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: SidMultiStepActionProgress, <-- Assigned later to avoid potential circular dependency.
        },
        startVerifyPhoneNumber: {
            a: {
                phoneNumber: {
                    nt: String,
                    it: [0],
                },
            },
            // nt: SidMultiStepActionProgress, <-- Assigned later to avoid potential circular dependency.
        },
        verifyMultiStepActionToken: {
            a: {
                input: {
                    nt: VerifyMultiStepActionTokenInput,
                    it: [1],
                },
            },
            // nt: SidMultiStepActionProgress, <-- Assigned later to avoid potential circular dependency.
        },
        blockUserForMe: {
            a: {
                notes: {
                    nt: String,
                    it: [0],
                },
                reasonTextId: {
                    nt: String,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        blockUserForMeV2: {
            a: {
                notes: {
                    nt: String,
                    it: [0],
                },
                reasonTextId: {
                    nt: String,
                    it: [0],
                },
                userId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        deleteMyUser: {
            a: {
                anonymizePersonalData: {
                    nt: Boolean,
                    it: [0],
                },
                deletePhysically: {
                    nt: Boolean,
                    it: [1],
                },
                description: {
                    nt: String,
                    it: [0],
                },
                cause: {
                    nt: String,
                    it: [0],
                },
            },
        },
        endMySession: {
            a: {
                deviceUuid: {
                    nt: String,
                    it: [1],
                },
            },
        },
        endMySessionV2: {},
        startMySession: {
            a: {
                pushNotificationToken: {
                    nt: String,
                    it: [0],
                },
                deviceUuid: {
                    nt: String,
                    it: [1],
                },
            },
        },
        startMySessionV2: {
            a: {
                returnContentStatus: {
                    nt: Boolean,
                    it: [0],
                },
                pushNotificationToken: {
                    nt: String,
                    it: [0],
                },
            },
            // nt: ContentStatus, <-- Assigned later to avoid potential circular dependency.
        },
        unblockUserForMe: {
            a: {
                userId: {
                    nt: String,
                    it: [1],
                },
            },
        },
        unblockUserForMeV2: {
            a: {
                userId: {
                    nt: String,
                    it: [1],
                },
            },
            // nt: ServiceRequest, <-- Assigned later to avoid potential circular dependency.
        },
        updateMyUser: {
            a: {
                input: {
                    nt: MyUserInput,
                    it: [1],
                },
            },
        },
        createUserTracking: {
            a: {
                input: {
                    nt: UserTrackingInput,
                    it: [1],
                },
            },
        },
    },
};
const Subscription = {
    f: {
        channelChanged: {
            a: {
                channelId: {
                    nt: ID,
                    it: [1],
                },
            },
            // nt: BgChannelChangedEvent, <-- Assigned later to avoid potential circular dependency.
        },
        objectChanged: {
            a: {
                objectId: {
                    nt: ID,
                    it: [1],
                },
                modelType: {
                    nt: ModelType,
                    it: [0],
                },
                ownerUserId: {
                    nt: ID,
                    it: [0],
                },
            },
            // nt: ObjectChangedEvent, <-- Assigned later to avoid potential circular dependency.
        },
    },
};
//
//
//
//
//
//
// ==================================================================================================
//                                       Reference Assignments
//                                (avoids circular assignment issues)
// ==================================================================================================
//
//
//
//
//
//
UserInput.f['events'].nt = ModelEventInput;
UserInput.f['metadata'].nt = BaseModelMetadataInput;
UserInput.f['preferences'].nt = UserPreferencesInput;
UserInput.f['companies'].nt = CompanyInput;
UserInput.f['groupMemberships'].nt = GroupMembershipInput;
UserInput.f['company'].nt = CompanyInput;
UserInput.f['academicExperiences'].nt = AcademicExperienceInput;
UserInput.f['businessExperiences'].nt = BusinessExperienceInput;
UserInput.f['profileRoleHistory'].nt = UserProfileRoleHistoryItemInput;
UserPreferencesInput.f['events'].nt = ModelEventInput;
UserPreferencesInput.f['metadata'].nt = BaseModelMetadataInput;
CompanyInput.f['events'].nt = ModelEventInput;
CompanyInput.f['metadata'].nt = BaseModelMetadataInput;
GroupMembershipInput.f['events'].nt = ModelEventInput;
GroupMembershipInput.f['metadata'].nt = BaseModelMetadataInput;
AcademicExperienceInput.f['events'].nt = ModelEventInput;
AcademicExperienceInput.f['metadata'].nt = BaseModelMetadataInput;
BusinessExperienceInput.f['events'].nt = ModelEventInput;
BusinessExperienceInput.f['metadata'].nt = BaseModelMetadataInput;
UserDeviceInput.f['events'].nt = ModelEventInput;
UserDeviceInput.f['metadata'].nt = BaseModelMetadataInput;
UploadedAssetInput.f['events'].nt = ModelEventInput;
UploadedAssetInput.f['metadata'].nt = BaseModelMetadataInput;
ChannelInput.f['events'].nt = ModelEventInput;
ChannelInput.f['metadata'].nt = BaseModelMetadataInput;
ChannelInput.f['statuses'].nt = BgChannelStatusInput;
ChannelMessageInput.f['events'].nt = ModelEventInput;
ChannelMessageInput.f['metadata'].nt = BaseModelMetadataInput;
ChannelMessageInput.f['statuses'].nt = ChannelMessageStatusInput;
ChannelParticipantInput.f['events'].nt = ModelEventInput;
ChannelParticipantInput.f['metadata'].nt = BaseModelMetadataInput;
GroupInput.f['events'].nt = ModelEventInput;
GroupInput.f['metadata'].nt = BaseModelMetadataInput;
GroupInput.f['appliedGroupRules'].nt = AppliedGroupRuleInput;
AppliedGroupRuleInput.f['events'].nt = ModelEventInput;
AppliedGroupRuleInput.f['metadata'].nt = BaseModelMetadataInput;
UserSearchInput.f['events'].nt = ModelEventInput;
UserSearchInput.f['metadata'].nt = BaseModelMetadataInput;
UserSearchInput.f['filter'].nt = UserSearchFilterInput;
ContactInput.f['events'].nt = ModelEventInput;
ContactInput.f['metadata'].nt = BaseModelMetadataInput;
SignUpUserInput.f['events'].nt = ModelEventInput;
SignUpUserInput.f['metadata'].nt = BaseModelMetadataInput;
VerifyOneTimeAuthTokenInput.f['events'].nt = ModelEventInput;
VerifyOneTimeAuthTokenInput.f['metadata'].nt = BaseModelMetadataInput;
AdminTaskInput.f['events'].nt = ModelEventInput;
AdminTaskInput.f['metadata'].nt = BaseModelMetadataInput;
ChannelInvitationInput.f['events'].nt = ModelEventInput;
ChannelInvitationInput.f['metadata'].nt = BaseModelMetadataInput;
ContentTagInput.f['events'].nt = ModelEventInput;
ContentTagInput.f['metadata'].nt = BaseModelMetadataInput;
ContentTagInput.f['moderationConcern'].nt = ModerationConcernInput;
ContentTagInput.f['allModerationConcerns'].nt = ModerationConcernInput;
ModerationConcernInput.f['events'].nt = ModelEventInput;
ModerationConcernInput.f['metadata'].nt = BaseModelMetadataInput;
MenteesGroupMembershipInput.f['events'].nt = ModelEventInput;
MenteesGroupMembershipInput.f['metadata'].nt = BaseModelMetadataInput;
MentorsGroupMembershipInput.f['events'].nt = ModelEventInput;
MentorsGroupMembershipInput.f['metadata'].nt = BaseModelMetadataInput;
IqlaaGroupMembershipInput.f['events'].nt = ModelEventInput;
IqlaaGroupMembershipInput.f['metadata'].nt = BaseModelMetadataInput;
MastercardGroupMembershipInput.f['events'].nt = ModelEventInput;
MastercardGroupMembershipInput.f['metadata'].nt = BaseModelMetadataInput;
SupportChannelConfigInput.f['events'].nt = ModelEventInput;
SupportChannelConfigInput.f['metadata'].nt = BaseModelMetadataInput;
NotificationInput.f['events'].nt = ModelEventInput;
NotificationInput.f['metadata'].nt = BaseModelMetadataInput;
NotificationInput.f['context'].nt = NotificationInput;
NotificationTemplateInput.f['events'].nt = ModelEventInput;
NotificationTemplateInput.f['metadata'].nt = BaseModelMetadataInput;
SidMultiStepActionInput.f['events'].nt = ModelEventInput;
SidMultiStepActionInput.f['metadata'].nt = BaseModelMetadataInput;
SidMultiStepActionInput.f['errors'].nt = MultiStepActionErrorInput;
MultiStepActionErrorInput.f['events'].nt = ModelEventInput;
MultiStepActionErrorInput.f['metadata'].nt = BaseModelMetadataInput;
MyUserInput.f['events'].nt = ModelEventInput;
MyUserInput.f['metadata'].nt = BaseModelMetadataInput;
MyUserInput.f['preferences'].nt = UserPreferencesInput;
MyUserInput.f['companies'].nt = CompanyInput;
MyUserInput.f['groupMemberships'].nt = GroupMembershipInput;
MyUserInput.f['company'].nt = CompanyInput;
MyUserInput.f['academicExperiences'].nt = AcademicExperienceInput;
MyUserInput.f['businessExperiences'].nt = BusinessExperienceInput;
MyUserInput.f['profileRoleHistory'].nt = UserProfileRoleHistoryItemInput;
UserTrackingInput.f['events'].nt = ModelEventInput;
UserTrackingInput.f['metadata'].nt = BaseModelMetadataInput;
UserMetadata.f['channelsMetadata'].nt = ChannelsUserMetadata;
UserMetadata.f['groupsMetadata'].nt = GroupsUserMetadata;
GroupMembership.f['events'].nt = ModelEvent;
GroupMembership.f['metadata'].nt = BaseModelMetadata;
GroupMembership.f['expertises'].nt = Expertise;
GroupMembership.f['industries'].nt = Industry;
GroupMembership.f['industry'].nt = Industry;
GroupMembership.f['soughtExpertises'].nt = Expertise;
Expertise.f['events'].nt = ModelEvent;
Expertise.f['metadata'].nt = BaseModelMetadata;
Expertise.f['childOptions'].nt = Option;
Expertise.f['parentOption'].nt = Option;
Expertise.f['childExpertises'].nt = Expertise;
Expertise.f['parentExpertise'].nt = Expertise;
Option.f['events'].nt = ModelEvent;
Option.f['metadata'].nt = BaseModelMetadata;
Option.f['childOptions'].nt = Option;
Option.f['parentOption'].nt = Option;
Industry.f['events'].nt = ModelEvent;
Industry.f['metadata'].nt = BaseModelMetadata;
Industry.f['childOptions'].nt = Option;
Industry.f['parentOption'].nt = Option;
MenteesGroupMembership.f['events'].nt = ModelEvent;
MenteesGroupMembership.f['metadata'].nt = BaseModelMetadata;
MenteesGroupMembership.f['expertises'].nt = Expertise;
MenteesGroupMembership.f['industries'].nt = Industry;
MenteesGroupMembership.f['industry'].nt = Industry;
MenteesGroupMembership.f['soughtExpertises'].nt = Expertise;
MentorsGroupMembership.f['events'].nt = ModelEvent;
MentorsGroupMembership.f['metadata'].nt = BaseModelMetadata;
MentorsGroupMembership.f['expertises'].nt = Expertise;
MentorsGroupMembership.f['industries'].nt = Industry;
MentorsGroupMembership.f['industry'].nt = Industry;
MentorsGroupMembership.f['soughtExpertises'].nt = Expertise;
MastercardGroupMembership.f['events'].nt = ModelEvent;
MastercardGroupMembership.f['metadata'].nt = BaseModelMetadata;
MastercardGroupMembership.f['expertises'].nt = Expertise;
MastercardGroupMembership.f['industries'].nt = Industry;
MastercardGroupMembership.f['industry'].nt = Industry;
MastercardGroupMembership.f['soughtExpertises'].nt = Expertise;
IqlaaGroupMembership.f['events'].nt = ModelEvent;
IqlaaGroupMembership.f['metadata'].nt = BaseModelMetadata;
IqlaaGroupMembership.f['expertises'].nt = Expertise;
IqlaaGroupMembership.f['industries'].nt = Industry;
IqlaaGroupMembership.f['industry'].nt = Industry;
IqlaaGroupMembership.f['soughtExpertises'].nt = Expertise;
StriveIndonesiaGroupMembership.f['events'].nt = ModelEvent;
StriveIndonesiaGroupMembership.f['metadata'].nt = BaseModelMetadata;
StriveIndonesiaGroupMembership.f['expertises'].nt = Expertise;
StriveIndonesiaGroupMembership.f['industries'].nt = Industry;
StriveIndonesiaGroupMembership.f['industry'].nt = Industry;
StriveIndonesiaGroupMembership.f['soughtExpertises'].nt = Expertise;
User.f['events'].nt = ModelEvent;
User.f['metadata'].nt = UserMetadata;
User.f['websites'].nt = LabeledStringValue;
User.f['preferences'].nt = UserPreferences;
User.f['userDevices'].nt = UserDeviceWithoutAuth;
User.f['userBlocks'].nt = UserBlock;
User.f['contacts'].nt = Contact;
User.f['companies'].nt = Company;
User.f['groupMemberships'].nt = IGroupMembership;
User.f['academicExperiences'].nt = AcademicExperience;
User.f['businessExperiences'].nt = BusinessExperience;
User.f['avatarAsset'].nt = UploadedAsset;
User.f['profileRoleHistory'].nt = UserProfileRoleHistoryItem;
User.f['mentor'].nt = MentorsGroupMembership;
User.f['mentee'].nt = MenteesGroupMembership;
User.f['countryOfResidence'].nt = Country;
User.f['gender'].nt = Gender;
User.f['latestUserDevice'].nt = UserDeviceWithoutAuth;
User.f['spokenLanguages'].nt = Language;
User.f['preferredLanguage'].nt = Language;
User.f['fallbackUiLanguage'].nt = Language;
User.f['preferredUiLanguage'].nt = Language;
User.f['unreadInAppMessages'].nt = Notification;
User.f['channels'].nt = Channel;
User.f['channelInvitations'].nt = ChannelInvitation;
User.f['channelParticipants'].nt = ChannelParticipant;
User.f['countryOfOrigin'].nt = Country;
User.f['educationLevel'].nt = EducationLevel;
User.f['endorsements'].nt = EndorsementWithTypes;
User.f['groupMembers'].nt = IGroupMembership;
User.f['groups'].nt = Group;
User.f['pronouns'].nt = Pronoun;
User.f['uploadedAssets'].nt = UploadedAsset;
UserPreferences.f['events'].nt = ModelEvent;
UserPreferences.f['metadata'].nt = BaseModelMetadata;
UserPreferences.f['notificationOptions'].nt = NotificationOptions;
UserDeviceWithoutAuth.f['events'].nt = ModelEvent;
UserDeviceWithoutAuth.f['metadata'].nt = BaseModelMetadata;
Contact.f['events'].nt = ModelEvent;
Contact.f['metadata'].nt = ContactMetadata;
Contact.f['user'].nt = User;
Contact.f['contactTypes'].nt = ContactType;
ContactType.f['events'].nt = ModelEvent;
ContactType.f['metadata'].nt = BaseModelMetadata;
ContactType.f['childOptions'].nt = Option;
ContactType.f['parentOption'].nt = Option;
Company.f['events'].nt = ModelEvent;
Company.f['metadata'].nt = BaseModelMetadata;
Company.f['websites'].nt = LabeledStringValue;
Company.f['companyStage'].nt = CompanyStage;
Company.f['companyType'].nt = CompanyType;
CompanyStage.f['events'].nt = ModelEvent;
CompanyStage.f['metadata'].nt = BaseModelMetadata;
CompanyStage.f['childOptions'].nt = Option;
CompanyStage.f['parentOption'].nt = Option;
CompanyType.f['events'].nt = ModelEvent;
CompanyType.f['metadata'].nt = BaseModelMetadata;
CompanyType.f['childOptions'].nt = Option;
CompanyType.f['parentOption'].nt = Option;
AcademicExperience.f['events'].nt = ModelEvent;
AcademicExperience.f['metadata'].nt = BaseModelMetadata;
BusinessExperience.f['events'].nt = ModelEvent;
BusinessExperience.f['metadata'].nt = BaseModelMetadata;
UploadedAsset.f['events'].nt = ModelEvent;
UploadedAsset.f['metadata'].nt = BaseModelMetadata;
Country.f['events'].nt = ModelEvent;
Country.f['metadata'].nt = BaseModelMetadata;
Country.f['childOptions'].nt = Option;
Country.f['parentOption'].nt = Option;
Gender.f['events'].nt = ModelEvent;
Gender.f['metadata'].nt = BaseModelMetadata;
Gender.f['childOptions'].nt = Option;
Gender.f['parentOption'].nt = Option;
Language.f['events'].nt = ModelEvent;
Language.f['metadata'].nt = BaseModelMetadata;
Language.f['childOptions'].nt = Option;
Language.f['parentOption'].nt = Option;
Notification.f['events'].nt = ModelEvent;
Notification.f['metadata'].nt = BaseModelMetadata;
Notification.f['context'].nt = NotificationContext;
Channel.f['events'].nt = ModelEvent;
Channel.f['metadata'].nt = ChannelMetadata;
Channel.f['statuses'].nt = BgChannelStatus;
Channel.f['creator'].nt = User;
Channel.f['status'].nt = BgChannelStatus;
Channel.f['invitations'].nt = ChannelInvitation;
Channel.f['latestMessage'].nt = ChannelMessage;
Channel.f['messages'].nt = ChannelMessage;
Channel.f['myContacts'].nt = Contact;
Channel.f['participants'].nt = ChannelParticipant;
Channel.f['pendingInvitations'].nt = ChannelInvitation;
ChannelInvitation.f['events'].nt = ModelEvent;
ChannelInvitation.f['metadata'].nt = BaseModelMetadata;
ChannelInvitation.f['channel'].nt = Channel;
ChannelInvitation.f['declineReason'].nt = DeclineChannelInvitationReason;
ChannelInvitation.f['recipient'].nt = User;
ChannelInvitation.f['sender'].nt = User;
DeclineChannelInvitationReason.f['events'].nt = ModelEvent;
DeclineChannelInvitationReason.f['metadata'].nt = BaseModelMetadata;
DeclineChannelInvitationReason.f['childOptions'].nt = Option;
DeclineChannelInvitationReason.f['parentOption'].nt = Option;
ChannelMessage.f['events'].nt = ModelEvent;
ChannelMessage.f['metadata'].nt = ChannelMessageMetadata;
ChannelMessage.f['statuses'].nt = ChannelMessageStatus;
ChannelMessage.f['channel'].nt = Channel;
ChannelMessage.f['sender'].nt = User;
ChannelParticipant.f['events'].nt = ModelEvent;
ChannelParticipant.f['metadata'].nt = BaseModelMetadata;
ChannelParticipant.f['userInfo'].nt = BgChannelParticipantUserInfo;
ChannelParticipant.f['channel'].nt = Channel;
ChannelParticipant.f['myContact'].nt = Contact;
ChannelParticipant.f['user'].nt = UserListItem;
UserListItem.f['websites'].nt = LabeledStringValue;
UserListItem.f['userBlocks'].nt = UserBlock;
UserListItem.f['academicExperiences'].nt = AcademicExperience;
UserListItem.f['businessExperiences'].nt = BusinessExperience;
UserListItem.f['mentor'].nt = MentorsGroupMembership;
UserListItem.f['mentee'].nt = MenteesGroupMembership;
UserListItem.f['groupMemberships'].nt = IGroupMembership;
UserListItem.f['companies'].nt = Company;
UserListItem.f['countryOfOrigin'].nt = Country;
UserListItem.f['countryOfResidence'].nt = Country;
UserListItem.f['educationLevel'].nt = EducationLevel;
UserListItem.f['endorsements'].nt = EndorsementWithTypes;
UserListItem.f['groups'].nt = Group;
UserListItem.f['pronouns'].nt = Pronoun;
EducationLevel.f['events'].nt = ModelEvent;
EducationLevel.f['metadata'].nt = BaseModelMetadata;
EducationLevel.f['childOptions'].nt = Option;
EducationLevel.f['parentOption'].nt = Option;
EndorsementWithTypes.f['events'].nt = ModelEvent;
EndorsementWithTypes.f['metadata'].nt = BaseModelMetadata;
EndorsementWithTypes.f['moderationConcern'].nt = ModerationConcern;
EndorsementWithTypes.f['allModerationConcerns'].nt = ModerationConcern;
EndorsementWithTypes.f['childContentTagType'].nt = ContentTagType;
EndorsementWithTypes.f['contentTagType'].nt = ContentTagType;
ModerationConcern.f['events'].nt = ModelEvent;
ModerationConcern.f['metadata'].nt = BaseModelMetadata;
ContentTagType.f['events'].nt = ModelEvent;
ContentTagType.f['metadata'].nt = BaseModelMetadata;
ContentTagType.f['childOptions'].nt = Option;
ContentTagType.f['parentOption'].nt = Option;
Group.f['events'].nt = ModelEvent;
Group.f['metadata'].nt = BaseModelMetadata;
Group.f['appliedGroupRules'].nt = AppliedGroupRule;
Group.f['groupCms'].nt = GroupCms;
AppliedGroupRule.f['events'].nt = ModelEvent;
AppliedGroupRule.f['metadata'].nt = BaseModelMetadata;
AppliedGroupRule.f['config'].nt = GroupRuleBaseConfig;
GroupRuleBaseConfig.f['events'].nt = ModelEvent;
GroupRuleBaseConfig.f['metadata'].nt = BaseModelMetadata;
GroupCms.f['events'].nt = ModelEvent;
GroupCms.f['metadata'].nt = BaseModelMetadata;
GroupCms.f['onboarding'].nt = GroupCmsOnboarding;
Pronoun.f['events'].nt = ModelEvent;
Pronoun.f['metadata'].nt = BaseModelMetadata;
Pronoun.f['childOptions'].nt = Option;
Pronoun.f['parentOption'].nt = Option;
UserCms.f['groupCms'].nt = GroupCms;
UserInbox.f['events'].nt = ModelEvent;
UserInbox.f['metadata'].nt = BaseModelMetadata;
UserInbox.f['channels'].nt = ChannelInbox;
ChannelInbox.f['unseenMessages'].nt = ChannelInboxItemMessage;
ChannelInbox.f['unseenSystemMessages'].nt = ChannelInboxItemMessage;
ChannelInbox.f['unseenArchivedMessages'].nt = ChannelInboxItemMessage;
ChannelInbox.f['latestMessages'].nt = ChannelInboxItemMessage;
ChannelInbox.f['latestArchivedMessages'].nt = ChannelInboxItemMessage;
ChannelInbox.f['pendingInvitations'].nt = ChannelInboxItemInvitation;
ChannelInbox.f['invitations'].nt = ChannelInboxItemInvitation;
AdminTask.f['events'].nt = ModelEvent;
AdminTask.f['metadata'].nt = BaseModelMetadata;
AdminTaskDef.f['args'].nt = AdminTaskArgDef;
ChannelListItem.f['events'].nt = ModelEvent;
ChannelListItem.f['metadata'].nt = ChannelMetadata;
ChannelListItem.f['statuses'].nt = BgChannelStatus;
ChannelListItem.f['creator'].nt = User;
ChannelListItem.f['status'].nt = BgChannelStatus;
ChannelListItem.f['invitations'].nt = ChannelInvitation;
ChannelListItem.f['latestMessage'].nt = ChannelMessage;
ChannelListItem.f['messages'].nt = ChannelMessage;
ChannelListItem.f['myContacts'].nt = Contact;
ChannelListItem.f['participants'].nt = ChannelParticipant;
ChannelListItem.f['pendingInvitations'].nt = ChannelInvitation;
ErrorCodeOption.f['events'].nt = ModelEvent;
ErrorCodeOption.f['metadata'].nt = BaseModelMetadata;
ErrorCodeOption.f['childOptions'].nt = Option;
ErrorCodeOption.f['parentOption'].nt = Option;
IndonesianCity.f['events'].nt = ModelEvent;
IndonesianCity.f['metadata'].nt = BaseModelMetadata;
IndonesianCity.f['childOptions'].nt = Option;
IndonesianCity.f['parentOption'].nt = Option;
IndonesianProvince.f['events'].nt = ModelEvent;
IndonesianProvince.f['metadata'].nt = BaseModelMetadata;
IndonesianProvince.f['childOptions'].nt = Option;
IndonesianProvince.f['parentOption'].nt = Option;
IqlaaJordanianDistrict.f['events'].nt = ModelEvent;
IqlaaJordanianDistrict.f['metadata'].nt = BaseModelMetadata;
IqlaaJordanianDistrict.f['childOptions'].nt = Option;
IqlaaJordanianDistrict.f['parentOption'].nt = Option;
IqlaaJordanianGovernorate.f['events'].nt = ModelEvent;
IqlaaJordanianGovernorate.f['metadata'].nt = BaseModelMetadata;
IqlaaJordanianGovernorate.f['childOptions'].nt = Option;
IqlaaJordanianGovernorate.f['parentOption'].nt = Option;
MastercardBank.f['events'].nt = ModelEvent;
MastercardBank.f['metadata'].nt = BaseModelMetadata;
UserSearch.f['events'].nt = ModelEvent;
UserSearch.f['metadata'].nt = BaseModelMetadata;
UserSearch.f['filter'].nt = UserSearchFilter;
UserSearch.f['runInfos'].nt = UserSearchRunInfo;
UserSearch.f['topFoundUsers'].nt = UserListItem;
UserWithScore.f['websites'].nt = LabeledStringValue;
UserWithScore.f['userBlocks'].nt = UserBlock;
UserWithScore.f['academicExperiences'].nt = AcademicExperience;
UserWithScore.f['businessExperiences'].nt = BusinessExperience;
UserWithScore.f['mentor'].nt = MentorsGroupMembership;
UserWithScore.f['mentee'].nt = MenteesGroupMembership;
UserWithScore.f['groupMemberships'].nt = IGroupMembership;
UserWithScore.f['companies'].nt = Company;
UserWithScore.f['countryOfOrigin'].nt = Country;
UserWithScore.f['countryOfResidence'].nt = Country;
UserWithScore.f['educationLevel'].nt = EducationLevel;
UserWithScore.f['endorsements'].nt = EndorsementWithTypes;
UserWithScore.f['groups'].nt = Group;
UserWithScore.f['pronouns'].nt = Pronoun;
ServiceRequest.f['events'].nt = ModelEvent;
ContactListItem.f['events'].nt = ModelEvent;
ContactListItem.f['metadata'].nt = ContactMetadata;
SidMultiStepAction.f['events'].nt = ModelEvent;
SidMultiStepAction.f['metadata'].nt = BaseModelMetadata;
SidMultiStepAction.f['errors'].nt = MultiStepActionError;
MultiStepActionError.f['events'].nt = ModelEvent;
MultiStepActionError.f['metadata'].nt = BaseModelMetadata;
SidMultiStepActionProgress.f['errors'].nt = MultiStepActionError;
SidMultiStepActionProgress.f['events'].nt = ModelEvent;
SidMultiStepActionProgress.f['metadata'].nt = BaseModelMetadata;
MyUser.f['events'].nt = ModelEvent;
MyUser.f['metadata'].nt = UserMetadata;
MyUser.f['websites'].nt = LabeledStringValue;
MyUser.f['preferences'].nt = UserPreferences;
MyUser.f['userDevices'].nt = UserDeviceWithoutAuth;
MyUser.f['userBlocks'].nt = UserBlock;
MyUser.f['contacts'].nt = Contact;
MyUser.f['companies'].nt = Company;
MyUser.f['groupMemberships'].nt = IGroupMembership;
MyUser.f['academicExperiences'].nt = AcademicExperience;
MyUser.f['businessExperiences'].nt = BusinessExperience;
MyUser.f['avatarAsset'].nt = UploadedAsset;
MyUser.f['profileRoleHistory'].nt = UserProfileRoleHistoryItem;
MyUser.f['mentor'].nt = MentorsGroupMembership;
MyUser.f['mentee'].nt = MenteesGroupMembership;
MyUser.f['countryOfResidence'].nt = Country;
MyUser.f['gender'].nt = Gender;
MyUser.f['latestUserDevice'].nt = UserDeviceWithoutAuth;
MyUser.f['spokenLanguages'].nt = Language;
MyUser.f['preferredLanguage'].nt = Language;
MyUser.f['fallbackUiLanguage'].nt = Language;
MyUser.f['preferredUiLanguage'].nt = Language;
MyUser.f['unreadInAppMessages'].nt = Notification;
MyUser.f['channels'].nt = Channel;
MyUser.f['channelInvitations'].nt = ChannelInvitation;
MyUser.f['channelParticipants'].nt = ChannelParticipant;
MyUser.f['countryOfOrigin'].nt = Country;
MyUser.f['educationLevel'].nt = EducationLevel;
MyUser.f['endorsements'].nt = EndorsementWithTypes;
MyUser.f['groupMembers'].nt = IGroupMembership;
MyUser.f['groups'].nt = Group;
MyUser.f['pronouns'].nt = Pronoun;
MyUser.f['uploadedAssets'].nt = UploadedAsset;
ReportUserReason.f['events'].nt = ModelEvent;
ReportUserReason.f['metadata'].nt = BaseModelMetadata;
ReportUserReason.f['childOptions'].nt = Option;
ReportUserReason.f['parentOption'].nt = Option;
Training.f['events'].nt = ModelEvent;
Training.f['metadata'].nt = BaseModelMetadata;
Training.f['trainingContentPages'].nt = TrainingContentPage;
Training.f['myTrainingSessions'].nt = TrainingSession;
Training.f['myLatestTrainingSession'].nt = TrainingSession;
TrainingContentPage.f['events'].nt = ModelEvent;
TrainingContentPage.f['metadata'].nt = BaseModelMetadata;
TrainingContentPage.f['children'].nt = TrainingContentPage;
TrainingSession.f['events'].nt = ModelEvent;
TrainingSession.f['metadata'].nt = BaseModelMetadata;
TrainingSession.f['completionInfo'].nt = TrainingSessionCompletionInfo;
ContentTag.f['events'].nt = ModelEvent;
ContentTag.f['metadata'].nt = BaseModelMetadata;
ContentTag.f['moderationConcern'].nt = ModerationConcern;
ContentTag.f['allModerationConcerns'].nt = ModerationConcern;
ContentTag.f['childContentTagType'].nt = ContentTagType;
ContentTag.f['contentTagType'].nt = ContentTagType;
SupportChannelConfig.f['events'].nt = ModelEvent;
SupportChannelConfig.f['metadata'].nt = BaseModelMetadata;
NotificationTemplate.f['events'].nt = ModelEvent;
NotificationTemplate.f['metadata'].nt = BaseModelMetadata;
ContentStatus.f['events'].nt = ModelEvent;
ContentStatus.f['metadata'].nt = BaseModelMetadata;
BgChannelChangedEvent.f['serviceRequest'].nt = ServiceRequest;
ObjectChangedEvent.f['serviceRequest'].nt = ServiceRequest;
ObjectChangedEvent.f['object'].nt = BaseModel;
BaseModel.f['events'].nt = ModelEvent;
BaseModel.f['metadata'].nt = BaseModelMetadata;
Query.f['findUserById'].nt = User;
Query.f['findUserByIdent'].nt = User;
Query.f['findUsers'].nt = UserListItem;
Query.f['findUserDeviceById'].nt = UserDeviceWithoutAuth;
Query.f['findUserDevices'].nt = UserDeviceWithoutAuth;
Query.f['findMyUserDevices'].nt = UserDeviceWithoutAuth;
Query.f['findCompanyStages'].nt = CompanyStage;
Query.f['findCompanyTypes'].nt = CompanyType;
Query.f['findEducationLevels'].nt = EducationLevel;
Query.f['findExpertises'].nt = Expertise;
Query.f['findGenders'].nt = Gender;
Query.f['findPronouns'].nt = Pronoun;
Query.f['findUserCmsByUserId'].nt = UserCms;
Query.f['myInbox'].nt = UserInbox;
Query.f['findMyInbox'].nt = UserInbox;
Query.f['findAdminTaskById'].nt = AdminTask;
Query.f['findAdminTaskDefs'].nt = AdminTaskDef;
Query.f['findUploadedAssetById'].nt = UploadedAsset;
Query.f['findUploadedAssets'].nt = UploadedAsset;
Query.f['findUploadedAssetsForUser'].nt = UploadedAsset;
Query.f['findChannelInvitationById'].nt = ChannelInvitation;
Query.f['findChannelInvitationsBetweenUsers'].nt = ChannelInvitation;
Query.f['findChannelInvitationsForUser'].nt = ChannelInvitation;
Query.f['myChannelInvitations'].nt = ChannelInvitation;
Query.f['findPendingChannelInvitationsForUser'].nt = ChannelInvitation;
Query.f['findChannelById'].nt = Channel;
Query.f['findChannels'].nt = Channel;
Query.f['findChannelsForUser'].nt = Channel;
Query.f['find1On1Channel'].nt = Channel;
Query.f['findMyChannels'].nt = ChannelListItem;
Query.f['findChannelMessageById'].nt = ChannelMessage;
Query.f['findChannelMessages'].nt = ChannelMessage;
Query.f['findChannelParticipants'].nt = ChannelParticipant;
Query.f['findChannelParticipantsForChannel'].nt = ChannelParticipant;
Query.f['findChannelParticipantById'].nt = ChannelParticipant;
Query.f['findDeclineChannelInvitationReasons'].nt = DeclineChannelInvitationReason;
Query.f['findOptions'].nt = Option;
Query.f['findCountries'].nt = Country;
Query.f['findErrorCodes'].nt = ErrorCodeOption;
Query.f['findIndustries'].nt = Industry;
Query.f['findLanguages'].nt = Language;
Query.f['findGroupCmsByGroupIdent'].nt = GroupCms;
Query.f['findGroupCmsByGroupId'].nt = GroupCms;
Query.f['findGroupCmsById'].nt = GroupCms;
Query.f['findGroupMembershipById'].nt = GroupMembership;
Query.f['myGroupMemberships'].nt = IGroupMembership;
Query.f['findGroupMemberships'].nt = IGroupMembership;
Query.f['findGroupById'].nt = Group;
Query.f['findGroupByIdent'].nt = Group;
Query.f['findGroups'].nt = Group;
Query.f['findIndonesianCities'].nt = IndonesianCity;
Query.f['findIndonesianProvinces'].nt = IndonesianProvince;
Query.f['findIqlaaJordanianDistricts'].nt = IqlaaJordanianDistrict;
Query.f['findIqlaaJordanianGovernorates'].nt = IqlaaJordanianGovernorate;
Query.f['findMastercardBanks'].nt = MastercardBank;
Query.f['findUserSearchById'].nt = UserSearch;
Query.f['findUserSearches'].nt = UserSearch;
Query.f['findUserSearchResults'].nt = UserWithScore;
Query.f['myUserSearches'].nt = UserSearch;
Query.f['findServiceRequestById'].nt = ServiceRequest;
Query.f['findContactById'].nt = Contact;
Query.f['findContact'].nt = Contact;
Query.f['findContacts'].nt = ContactListItem;
Query.f['findMyActiveMultiStepActions'].nt = SidMultiStepAction;
Query.f['findMyActiveMultiStepAction'].nt = SidMultiStepAction;
Query.f['getMultiStepActionProgress'].nt = SidMultiStepActionProgress;
Query.f['getMyUser'].nt = User;
Query.f['findMyUser'].nt = MyUser;
Query.f['getMyBlockedUsers'].nt = User;
Query.f['findMyBlockedUsers'].nt = User;
Query.f['findReportUserReasons'].nt = ReportUserReason;
Query.f['findTrainingsForMe'].nt = Training;
Query.f['findTrainingsForUser'].nt = Training;
Query.f['findTrainingById'].nt = Training;
Query.f['findTrainingSessionById'].nt = TrainingSession;
Query.f['findTrainingSessionsForMe'].nt = TrainingSession;
Query.f['findTrainingSessionsByTrainingId'].nt = TrainingSession;
Query.f['findLatestTrainingSessionForMe'].nt = TrainingSession;
Mutation.f['signInUser'].nt = UserAuthResponse;
Mutation.f['signInOauthUser'].nt = UserAuthResponse;
Mutation.f['signUpUser'].nt = UserAuthResponse;
Mutation.f['createUserDevice'].nt = UserDeviceWithoutAuth;
Mutation.f['createAcademicExperience'].nt = AcademicExperience;
Mutation.f['deleteAcademicExperience'].nt = ServiceRequest;
Mutation.f['updateAcademicExperience'].nt = ServiceRequest;
Mutation.f['createBusinessExperience'].nt = BusinessExperience;
Mutation.f['deleteBusinessExperience'].nt = ServiceRequest;
Mutation.f['updateBusinessExperience'].nt = ServiceRequest;
Mutation.f['createCompany'].nt = Company;
Mutation.f['deleteCompany'].nt = ServiceRequest;
Mutation.f['updateCompany'].nt = ServiceRequest;
Mutation.f['createAdminTask'].nt = AdminTask;
Mutation.f['deleteAdminTask'].nt = ServiceRequest;
Mutation.f['runAdminTask'].nt = ServiceRequest;
Mutation.f['updateAdminTask'].nt = AdminTask;
Mutation.f['createUploadedAsset'].nt = UploadedAsset;
Mutation.f['deleteUploadedAsset'].nt = UploadedAsset;
Mutation.f['initAssetUpload'].nt = UploadedAsset;
Mutation.f['createChannelInvitation'].nt = ChannelInvitation;
Mutation.f['createChannel'].nt = Channel;
Mutation.f['createChannelMessage'].nt = ChannelMessage;
Mutation.f['createChannelParticipant'].nt = ChannelParticipant;
Mutation.f['createContentTag'].nt = ContentTag;
Mutation.f['deleteContentTag'].nt = ServiceRequest;
Mutation.f['updateContentTag'].nt = ServiceRequest;
Mutation.f['createGroupMembership'].nt = ServiceRequest;
Mutation.f['createMenteesGroupMembership'].nt = ServiceRequest;
Mutation.f['createMentorsGroupMembership'].nt = ServiceRequest;
Mutation.f['updateGroupMembership'].nt = ServiceRequest;
Mutation.f['updateIqlaaGroupMembership'].nt = ServiceRequest;
Mutation.f['updateMastercardGroupMembership'].nt = ServiceRequest;
Mutation.f['updateMenteesGroupMembership'].nt = ServiceRequest;
Mutation.f['updateMentorsGroupMembership'].nt = ServiceRequest;
Mutation.f['addUserToGroup'].nt = ServiceRequest;
Mutation.f['createGroup'].nt = Group;
Mutation.f['deleteGroup'].nt = ServiceRequest;
Mutation.f['updateGroup'].nt = ServiceRequest;
Mutation.f['createSupportChannelConfig'].nt = SupportChannelConfig;
Mutation.f['deleteSupportChannelConfig'].nt = ServiceRequest;
Mutation.f['updateSupportChannelConfig'].nt = ServiceRequest;
Mutation.f['createUserSearch'].nt = UserSearch;
Mutation.f['deleteUserSearch'].nt = ServiceRequest;
Mutation.f['updateUserSearch'].nt = ServiceRequest;
Mutation.f['createNotification'].nt = Notification;
Mutation.f['createNotificationTemplate'].nt = NotificationTemplate;
Mutation.f['createContact'].nt = Contact;
Mutation.f['createMultiStepAction'].nt = SidMultiStepActionProgress;
Mutation.f['startResetPassword'].nt = SidMultiStepActionProgress;
Mutation.f['startVerifyEmail'].nt = SidMultiStepActionProgress;
Mutation.f['startVerifyPhoneNumber'].nt = SidMultiStepActionProgress;
Mutation.f['verifyMultiStepActionToken'].nt = SidMultiStepActionProgress;
Mutation.f['blockUserForMeV2'].nt = ServiceRequest;
Mutation.f['startMySessionV2'].nt = ContentStatus;
Mutation.f['unblockUserForMeV2'].nt = ServiceRequest;
Subscription.f['channelChanged'].nt = BgChannelChangedEvent;
Subscription.f['objectChanged'].nt = ObjectChangedEvent;
//
//
//
//
//
//
// ==================================================================================================
//                                               Index
// ==================================================================================================
//
//
//
//
//
//
const $schemaDrivenDataMap = {
    operations: {
        query: Query,
        mutation: Mutation,
        subscription: Subscription,
    },
    directives: {},
    types: {
        Int,
        ID,
        String,
        Boolean,
        Float,
        DateTimeISO,
        Long,
        GroupMembershipRole,
        ModelEventType,
        OptionType,
        UiLanguage,
        MastercardCardType,
        UserIdentType,
        AuthType,
        UserRole,
        AppFeature,
        NotificationType,
        IdentityProvider,
        ModelType,
        UploadedAssetType,
        AssetHostingService,
        UserProfileRole,
        AppAction,
        ChannelType,
        ChannelInvitationStatus,
        ChannelMessageType,
        ChannelParticipantRole,
        ModerationConcernType,
        GroupRuleEventType,
        SortDirection,
        IncludeFilterOption,
        FederatedIdentityProvider,
        AdminTaskType,
        AdminTaskResult,
        ChannelInvitationDirection,
        UserSearchType,
        UserSearchFieldOption,
        UserSearchSubscriptionType,
        ServiceRequestType,
        ServiceRequestResult,
        ServiceRequestMessageId,
        ErrorCode,
        ServiceRequestSource,
        MultiStepActionType,
        MultiStepActionStatus,
        NotificationMethod,
        MultiStepActionResult,
        MultiStepActionSendNotificationResult,
        CookieChoiceTextId,
        ReportUserReasonTextId,
        DeclineChannelInvitationReasonTextId,
        ChannelMessageEvent,
        NotificationTemplateName,
        ChannelChangedEventType,
        ObjectChangedEventType,
        FindObjectsOptions,
        SortItem,
        FindUserByIdentOptions,
        UserInput,
        ModelEventInput,
        BaseModelMetadataInput,
        LabeledStringValueInput,
        UserPreferencesInput,
        NotificationOptionsInput,
        CompanyInput,
        GroupMembershipInput,
        AcademicExperienceInput,
        BusinessExperienceInput,
        UserProfileRoleHistoryItemInput,
        UserListFilter,
        UserDeviceInput,
        UserDeviceListFilter,
        UploadedAssetInput,
        UploadedAssetListFilter,
        ChannelInput,
        BgChannelStatusInput,
        ChannelListFilter,
        ChannelMessageInput,
        ChannelMessageStatusInput,
        ChannelMessageListFilter,
        ChannelParticipantInput,
        ChannelParticipantListFilter,
        GroupMembershipListFilter,
        GroupInput,
        AppliedGroupRuleInput,
        GroupRuleBaseConfigInput,
        GroupListFilter,
        UserSearchInput,
        UserSearchFilterInput,
        UserSearchListFilter,
        ContactInput,
        SidContactListFilter,
        SignInUserInput,
        SignInOauthUserInput,
        SignUpUserInput,
        VerifyOneTimeAuthTokenInput,
        ReportUserInput,
        AdminTaskInput,
        ChannelInvitationInput,
        BgAddChannelMessageEventInput,
        ContentTagInput,
        ModerationConcernInput,
        MenteesGroupMembershipInput,
        MentorsGroupMembershipInput,
        IqlaaGroupMembershipInput,
        MastercardGroupMembershipInput,
        SupportChannelConfigInput,
        NotificationInput,
        SendMultiStepActionNotificationInput,
        NotificationTemplateInput,
        SidMultiStepActionInput,
        MultiStepActionErrorInput,
        UserIdentInput,
        VerifyMultiStepActionTokenInput,
        MyUserInput,
        UserTrackingInput,
        UserMetadata,
        ChannelsUserMetadata,
        GroupsUserMetadata,
        GroupMembership,
        ModelEvent,
        Expertise,
        Option,
        Industry,
        MenteesGroupMembership,
        MentorsGroupMembership,
        MastercardGroupMembership,
        IqlaaGroupMembership,
        StriveIndonesiaGroupMembership,
        User,
        LabeledStringValue,
        UserPreferences,
        NotificationOptions,
        UserDeviceWithoutAuth,
        UserBlock,
        Contact,
        ContactMetadata,
        ContactType,
        Company,
        CompanyStage,
        CompanyType,
        AcademicExperience,
        BusinessExperience,
        UploadedAsset,
        UserProfileRoleHistoryItem,
        Country,
        Gender,
        Language,
        Notification,
        NotificationContext,
        Channel,
        ChannelMetadata,
        BgChannelStatus,
        ChannelInvitation,
        DeclineChannelInvitationReason,
        ChannelMessage,
        ChannelMessageMetadata,
        ChannelMessageStatus,
        ChannelParticipant,
        BgChannelParticipantUserInfo,
        UserListItem,
        EducationLevel,
        EndorsementWithTypes,
        ModerationConcern,
        ContentTagType,
        Group,
        AppliedGroupRule,
        GroupRuleBaseConfig,
        GroupCms,
        GroupCmsOnboarding,
        Pronoun,
        UserCms,
        UserInbox,
        ChannelInbox,
        ChannelInboxItemMessage,
        ChannelInboxItemInvitation,
        AdminTask,
        AdminTaskDef,
        AdminTaskArgDef,
        ChannelListItem,
        ErrorCodeOption,
        IndonesianCity,
        IndonesianProvince,
        IqlaaJordanianDistrict,
        IqlaaJordanianGovernorate,
        MastercardBank,
        UserSearch,
        UserSearchFilter,
        UserSearchRunInfo,
        UserWithScore,
        ServiceRequest,
        ContactListItem,
        SidMultiStepAction,
        MultiStepActionError,
        SidMultiStepActionProgress,
        MyUser,
        ReportUserReason,
        Training,
        TrainingContentPage,
        TrainingSession,
        TrainingSessionCompletionInfo,
        UserAuthResponse,
        ContentTag,
        SupportChannelConfig,
        NotificationTemplate,
        ContentStatus,
        BgChannelChangedEvent,
        ObjectChangedEvent,
        BaseModel,
        BaseModelMetadata,
        IGroupMembership,
        Query,
        Mutation,
        Subscription,
    },
};
export { $schemaDrivenDataMap as schemaDrivenDataMap };
//# sourceMappingURL=schema-driven-data-map.js.map
