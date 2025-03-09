export declare const UserDeviceSchema: {
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
        userId: {
            type: string;
            maxLength: number;
        };
        deviceUuid: {
            type: string;
        };
        deviceType: {
            type: string;
        };
        trusted: {
            type: string;
        };
        phoneNumber: {
            type: string;
        };
        phoneNumberUpdatedAt: {
            type: string;
            format: string;
        };
        isPhoneNumberVerified: {
            type: string;
        };
        brand: {
            type: string;
        };
        model: {
            type: string;
        };
        isTablet: {
            type: string;
        };
        screenWidth: {
            type: string;
        };
        screenHeight: {
            type: string;
        };
        os: {
            type: string;
        };
        osVersion: {
            type: string;
        };
        timezone: {
            type: string;
        };
        ipAddress: {
            type: string;
        };
        consumer: {
            type: string;
        };
        consumerVersion: {
            type: string;
        };
        acceptedLanguage: {
            type: string;
        };
        locale: {
            type: string;
        };
        countryCode: {
            type: string;
        };
        appVersion: {
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
        sessionStartedAt: {
            type: string;
            format: string;
        };
        sessionEndedAt: {
            type: string;
            format: string;
        };
        authType: {};
        identityProvider: {};
        oauthFederatedProvider: {};
        oauthUserId: {
            type: string;
        };
        oauthDelegateUserId: {
            type: string;
        };
        oauthProfileUrl: {
            type: string;
        };
        oauthToken: {
            type: string;
        };
        oauthTokenCreatedAt: {
            type: string;
            format: string;
        };
        oauthTokenExpiresAt: {
            type: string;
            format: string;
        };
        oauthRefreshToken: {
            type: string;
        };
        oauthRefreshTokenCreatedAt: {
            type: string;
            format: string;
        };
        oauthRefreshTokenExpiresAt: {
            type: string;
            format: string;
        };
        pushNotificationToken: {
            type: string;
        };
        trustedAt: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
