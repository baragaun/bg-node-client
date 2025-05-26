export const UserBlockSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/userBlock.schema.json',
    'title': 'UserBlock',
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
        'reasonTextId': {
            'type': 'string',
        },
        'notes': {
            'type': 'string',
        },
        'syncedToAnalyticsAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'syncedWithMm2At': {
            'type': 'string',
            'description': 'This attribute is only used by the MM2 synchronizer.',
            'format': 'date-time',
        },
        'mm2Id': {
            'type': 'string',
            'description': 'This attribute is only used by the MM2 synchronizer.',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=userBlockSchema.js.map