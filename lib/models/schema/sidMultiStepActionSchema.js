export const SidMultiStepActionSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/sidMultiStepAction.schema.json',
    'title': 'SidMultiStepAction',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'id': {
            'type': 'string',
            'maxLength': 32,
        },
        'adminNotes': {
            'type': 'string',
        },
        'metadata': {
            'type': 'BaseModelMetadata',
        },
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
        'userId': {
            'type': 'string',
            'maxLength': 32,
        },
        'userIdent': {
            'type': 'string',
        },
        'userHandle': {
            'type': 'string',
        },
        'email': {
            'type': 'string',
        },
        'phoneNumber': {
            'type': 'string',
        },
        'deviceUuid': {
            'type': 'string',
        },
        'actionType': {
            'type': 'string',
            'enum': [
                'resetPassword',
                'tokenSignIn',
                'unset',
                'updateEmail',
                'updatePassword',
                'updatePhoneNumber',
                'verifyEmail',
                'verifyPhoneNumber',
                'verifyPhoneSignupOnSignup',
            ],
            'enumType': 'MultiStepActionType',
        },
        'actionStatus': {
            'type': 'string',
            'enum': [
                'created',
                'started',
                'finished',
            ],
            'enumType': 'MultiStepActionStatus',
        },
        'notificationMethod': {
            'type': 'string',
            'enum': [
                'off',
                'auto',
                'email',
                'sms',
                'pushNotification',
                'inAppNotification',
            ],
            'enumType': 'NotificationMethod',
        },
        'result': {
            'type': 'string',
            'enum': [
                'confirmTokenMismatch',
                'dataValidationFailed',
                'deviceNotFound',
                'emailMismatch',
                'emailNotVerified',
                'error',
                'expired',
                'invalidEmail',
                'phoneNumberInvalid',
                'missingEmail',
                'missingPhoneNumber',
                'notFound',
                'ok',
                'passed',
                'passwordMismatch',
                'passwordUpdated',
                'phoneNumberMismatch',
                'phoneNumberNotVerified',
                'systemError',
                'unset',
                'userFailedValidation',
                'userNotFound',
                'userNotSignedIn',
            ],
            'enumType': 'MultiStepActionResult',
        },
        'confirmToken': {
            'type': 'string',
        },
        'attemptCount': {
            'type': 'integer',
        },
        'notificationSentAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'notificationResult': {
            'type': 'string',
            'enum': [
                'ok',
                'failed',
                'phoneNumberInvalid',
            ],
            'enumType': 'MultiStepActionSendNotificationResult',
        },
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
        'errors': {
            'type': 'array',
        },
        'password': {
            'type': 'string',
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
        'tfaBackupCodes': {
            'type': 'string',
        },
        'expiresAt': {
            'type': 'string',
            'format': 'date-time',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=sidMultiStepActionSchema.js.map