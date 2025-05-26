export const BgChannelMessageStatusSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgChannelMessageStatus.schema.json',
    'title': 'BgChannelMessageStatus',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'userId': {
            'type': 'string',
            'maxLength': 32,
        },
        'isInArchivedChannel': {
            'type': 'boolean',
        },
        'receivedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'seenAt': {
            'type': 'string',
            'format': 'date-time',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgChannelMessageStatusSchema.js.map