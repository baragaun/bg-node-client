export const ContentStatusSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/contentStatus.schema.json',
    'title': 'ContentStatus',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'optionsUpdatedAt': {
            'type': 'integer',
        },
        'myUserUpdatedAt': {
            'type': 'integer',
        },
        'myUserInboxUpdatedAt': {
            'type': 'integer',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=contentStatusSchema.js.map