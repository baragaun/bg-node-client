export const BgChannelParticipantMetadataSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgChannelParticipantMetadata.schema.json',
    'title': 'BgChannelParticipantMetadata',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'userHandle': {
            'type': 'string',
        },
        'firstName': {
            'type': 'string',
        },
        'lastName': {
            'type': 'string',
        },
        'avatarUrl': {
            'type': 'string',
        },
        'sentMessageCount': {
            'type': 'integer',
        },
        'unseenMessageCount': {
            'type': 'integer',
        },
        'unseenSystemMessageCount': {
            'type': 'integer',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgChannelParticipantMetadataSchema.js.map