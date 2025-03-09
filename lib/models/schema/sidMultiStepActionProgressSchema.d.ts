export declare const SidMultiStepActionProgressSchema: {
    version: number;
    primaryKey: string;
    type: string;
    properties: {
        actionId: {
            type: string;
            maxLength: number;
        };
        userId: {
            type: string;
            maxLength: number;
        };
        actionType: {};
        actionStatus: {};
        notificationMethod: {};
        result: {};
        attemptCount: {
            type: string;
        };
        notificationSentAt: {
            type: string;
            format: string;
        };
        notificationResult: {};
        notificationId: {
            type: string;
        };
        textData: {
            type: string;
        };
        report: {
            type: string;
        };
        emailPassed: {
            type: string;
        };
        emailUpdatedAt: {
            type: string;
            format: string;
        };
        emailVerifiedAt: {
            type: string;
            format: string;
        };
        errors: {};
        authToken: {
            type: string;
        };
        authTokenExpiresAt: {
            type: string;
            format: string;
        };
        passwordPassed: {
            type: string;
        };
        passwordResettedAt: {
            type: string;
            format: string;
        };
        passwordUpdatedAt: {
            type: string;
            format: string;
        };
        phoneNumberPassed: {
            type: string;
        };
        phoneNumberUpdatedAt: {
            type: string;
            format: string;
        };
        phoneNumberVerifiedAt: {
            type: string;
            format: string;
        };
        signedInAt: {
            type: string;
            format: string;
        };
        expiresAt: {
            type: string;
            format: string;
        };
        events: {};
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
    };
    required: string[];
};
