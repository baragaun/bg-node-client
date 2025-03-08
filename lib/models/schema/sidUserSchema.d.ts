export declare const SidUserSchema: {
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        id: {
            type: string;
            maxLength: number;
        };
        adminNotes: {
            type: string;
        };
        metadata: {};
        createdAt: {
            type: string;
            format: string;
        };
        createdBy: {
            type: string;
            maxLength: number;
        };
        updatedAt: {
            type: string;
            format: string;
        };
        updatedBy: {
            type: string;
            maxLength: number;
        };
        deletedAt: {
            type: string;
            format: string;
        };
        deletedBy: {
            type: string;
            maxLength: number;
        };
        firstName: {
            type: string;
        };
        lastName: {
            type: string;
        };
        userHandle: {
            type: string;
        };
        email: {
            type: string;
        };
        emailSource: {
            description: string;
            type: string;
        };
        emailUpdatedAt: {
            type: string;
            format: string;
        };
        isEmailVerified: {
            type: string;
        };
        cityOfResidence: {
            type: string;
        };
        regionOfResidence: {
            type: string;
        };
        countryOfResidenceTextId: {
            type: string;
        };
        avatarUrl: {
            type: string;
        };
        websites: {};
        authType: {};
        inviteCode: {
            type: string;
        };
        passwordHash: {
            type: string;
        };
        passwordUpdatedAt: {
            type: string;
            format: string;
        };
        preferredLanguageTextId: {
            type: string;
        };
        spokenLanguagesTextIds: {
            type: string;
            items: {
                type: string;
            };
        };
        selectedUiLanguageTextId: {};
        fallbackUiLanguageTextId: {};
        roles: {};
        appFeatures: {};
        source: {
            type: string;
        };
        timezone: {
            type: string;
        };
        preferences: {};
        trustLevel: {
            type: string;
        };
        signedInAt: {
            type: string;
            format: string;
        };
        signedOutAt: {
            type: string;
            format: string;
        };
        latestActivityAt: {
            type: string;
            format: string;
        };
        userBlocks: {};
        inactivatedAt: {
            type: string;
            format: string;
        };
        inactivatedBy: {
            type: string;
            maxLength: number;
        };
        termsAndConditionsAcceptedAt: {
            type: string;
            format: string;
        };
        optIntoNewsletter: {
            type: string;
        };
        onboardingStage: {
            type: string;
        };
        suspendedAt: {
            type: string;
            format: string;
        };
        suspendedBy: {
            type: string;
            maxLength: number;
        };
    };
    required: string[];
};
