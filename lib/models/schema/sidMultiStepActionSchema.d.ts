export declare const SidMultiStepActionSchema: {
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
        userIdent: {
            type: string;
        };
        userHandle: {
            type: string;
        };
        email: {
            type: string;
        };
        phoneNumber: {
            type: string;
        };
        deviceUuid: {
            type: string;
        };
        actionType: {};
        actionStatus: {};
        notificationMethod: {};
        result: {};
        confirmToken: {
            type: string;
        };
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
        password: {
            type: string;
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
        tfaBackupCodes: {
            type: string;
        };
        expiresAt: {
            type: string;
            format: string;
        };
    };
    required: string[];
};
