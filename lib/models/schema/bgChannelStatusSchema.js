export const BgChannelStatusSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgChannelStatus.schema.json',
    'title': 'BgChannelStatus',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'userId': {
            'type': 'string',
            'maxLength': 32,
        },
        'archivedAt': {
            'type': 'string',
            'format': 'date-time',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgChannelStatusSchema.js.map