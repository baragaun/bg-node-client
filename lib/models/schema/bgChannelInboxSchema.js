export const BgChannelInboxSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgChannelInbox.schema.json',
    'title': 'BgChannelInbox',
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
        'unseenMessages': {
            'type': 'array',
        },
        'unseenSystemMessages': {
            'type': 'array',
        },
        'unseenArchivedMessages': {
            'type': 'array',
        },
        'latestMessages': {
            'type': 'array',
        },
        'latestArchivedMessages': {
            'type': 'array',
        },
        'pendingInvitations': {
            'type': 'array',
        },
        'invitations': {
            'type': 'array',
        },
        'itemIdHash': {
            'type': 'string',
            'description': 'MD5 hash of all item IDs to check whether there are any new or removed items.',
        },
        'channelsExceedMaxCount': {
            'type': 'boolean',
        },
        'invitationsExceedMaxCount': {
            'type': 'boolean',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgChannelInboxSchema.js.map