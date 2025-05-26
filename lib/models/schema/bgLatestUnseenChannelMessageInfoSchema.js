export const BgLatestUnseenChannelMessageInfoSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgLatestUnseenChannelMessageInfo.schema.json',
    'title': 'BgLatestUnseenChannelMessageInfo',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
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
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgLatestUnseenChannelMessageInfoSchema.js.map