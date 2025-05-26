export const UserPreferencesSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/userPreferences.schema.json',
    'title': 'UserPreferences',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'shareEmail': {
            'type': 'boolean',
        },
        'sharePhoneNumber': {
            'type': 'boolean',
        },
        'showWelcomeMessage': {
            'type': 'boolean',
        },
        'notificationOptions': {
            'type': 'array',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=userPreferencesSchema.js.map