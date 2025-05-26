export const BgChannelsUserMetadataSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgChannelsUserMetadata.schema.json',
    'title': 'BgChannelsUserMetadata',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'channelCount': {
            'type': 'integer',
        },
        'messagesSentCount': {
            'type': 'integer',
        },
        'unseenMessageCount': {
            'type': 'integer',
        },
        'unrespondedMessageCount': {
            'type': 'integer',
        },
        'invitationsSentCount': {
            'type': 'integer',
        },
        'invitationsReceivedCount': {
            'type': 'integer',
        },
        'rejectedInvitationCount': {
            'type': 'integer',
        },
        'acceptedInvitationCount': {
            'type': 'integer',
        },
        'pendingInvitationCount': {
            'type': 'integer',
        },
        'updatedAt': {
            'type': 'string',
            'format': 'date-time',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgChannelsUserMetadataSchema.js.map