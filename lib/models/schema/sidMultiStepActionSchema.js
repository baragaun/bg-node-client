export const SidMultiStepActionSchema = {
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
        userId: {
            type: 'string',
            maxLength: 32,
        },
        userIdent: {
            type: 'string',
        },
        userHandle: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
        phoneNumber: {
            type: 'string',
        },
        deviceUuid: {
            type: 'string',
        },
        actionType: {},
        actionStatus: {},
        notificationMethod: {},
        result: {},
        confirmToken: {
            type: 'string',
        },
        attemptCount: {
            type: 'integer',
        },
        notificationSentAt: {
            type: 'string',
            format: 'date-time',
        },
        notificationResult: {},
        notificationId: {
            type: 'string',
        },
        textData: {
            type: 'string',
        },
        report: {
            type: 'string',
        },
        emailPassed: {
            type: 'boolean',
        },
        emailUpdatedAt: {
            type: 'string',
            format: 'date-time',
        },
        emailVerifiedAt: {
            type: 'string',
            format: 'date-time',
        },
        errors: {},
        password: {
            type: 'string',
        },
        passwordPassed: {
            type: 'boolean',
        },
        passwordResettedAt: {
            type: 'string',
            format: 'date-time',
        },
        passwordUpdatedAt: {
            type: 'string',
            format: 'date-time',
        },
        phoneNumberPassed: {
            type: 'boolean',
        },
        phoneNumberUpdatedAt: {
            type: 'string',
            format: 'date-time',
        },
        phoneNumberVerifiedAt: {
            type: 'string',
            format: 'date-time',
        },
        signedInAt: {
            type: 'string',
            format: 'date-time',
        },
        tfaBackupCodes: {
            type: 'string',
        },
        expiresAt: {
            type: 'string',
            format: 'date-time',
        },
    },
    required: ['id'],
};
//# sourceMappingURL=sidMultiStepActionSchema.js.map