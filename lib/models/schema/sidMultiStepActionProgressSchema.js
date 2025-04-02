export const SidMultiStepActionProgressSchema = {
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'actionId': {
            'type': 'string',
            'maxLength': 32,
        },
        'userId': {
            'type': 'string',
            'maxLength': 32,
        },
        'actionType': {},
        'actionStatus': {},
        'notificationMethod': {},
        'result': {},
        'attemptCount': {
            'type': 'integer',
        },
        'notificationSentAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'notificationResult': {},
        'notificationId': {
            'type': 'string',
        },
        'textData': {
            'type': 'string',
        },
        'report': {
            'type': 'string',
        },
        'emailPassed': {
            'type': 'boolean',
        },
        'emailUpdatedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'emailVerifiedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'errors': {},
        'authToken': {
            'type': 'string',
        },
        'authTokenExpiresAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'passwordPassed': {
            'type': 'boolean',
        },
        'passwordResettedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'passwordUpdatedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'phoneNumberPassed': {
            'type': 'boolean',
        },
        'phoneNumberUpdatedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'phoneNumberVerifiedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'signedInAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'expiresAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'events': {},
        'metadata': {},
        'createdAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'createdBy': {
            'type': 'string',
            'maxLength': 32,
        },
        'updatedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'updatedBy': {
            'type': 'string',
            'maxLength': 32,
        },
        'deletedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'deletedBy': {
            'type': 'string',
            'maxLength': 32,
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=sidMultiStepActionProgressSchema.js.map