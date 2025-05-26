export const BgChannelMetadataSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgChannelMetadata.schema.json',
    'title': 'BgChannelMetadata',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'unseenMessageInfo': {
            'type': 'array',
            'items': {
                'type': 'object',
            },
            'properties': {
                'userId': {
                    'type': 'string',
                    'maxLength': 32,
                },
                'createdAt': {
                    'type': 'string',
                    'format': 'date-time',
                },
            },
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgChannelMetadataSchema.js.map