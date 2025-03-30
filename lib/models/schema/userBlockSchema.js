export const UserBlockSchema = {
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
        'syncedWithMm2At': {
            'description': 'This attribute is only used by the MM2 synchronizer.',
            'type': 'string',
            'format': 'date-time',
        },
        'mm2Id': {
            'description': 'This attribute is only used by the MM2 synchronizer.',
            'type': 'string',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=userBlockSchema.js.map