export const ChannelParticipantSchema = {
    'title': 'ChannelParticipant',
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
            'nullable': true,
        },
        'metadata': {
            'type': 'object',
            'properties': {
                'updatedAt': {
                    'type': 'string',
                    'format': 'date-time',
                    'nullable': true,
                },
            },
            'nullable': true,
        },
        'createdAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'createdBy': {
            'type': 'string',
            'maxLength': 32,
            'nullable': true,
        },
        'updatedAt': {
            'type': 'string',
            'format': 'date-time',
            'nullable': true,
        },
        'updatedBy': {
            'type': 'string',
            'maxLength': 32,
            'nullable': true,
        },
        'deletedAt': {
            'type': 'string',
            'format': 'date-time',
            'nullable': true,
        },
        'deletedBy': {
            'type': 'string',
            'maxLength': 32,
            'nullable': true,
        },
        'channelId': {
            'type': 'string',
            'maxLength': 32,
        },
        'userId': {
            'type': 'string',
            'maxLength': 32,
        },
        'userInfo': {
            'type': 'object',
            'properties': {
                'userHandle': {
                    'type': 'string',
                    'nullable': true,
                },
                'firstName': {
                    'type': 'string',
                    'nullable': true,
                },
                'lastName': {
                    'type': 'string',
                    'nullable': true,
                },
                'avatarUrl': {
                    'type': 'string',
                    'nullable': true,
                },
            },
            'nullable': true,
        },
        'invitedBy': {
            'type': 'string',
            'maxLength': 32,
            'nullable': true,
        },
        'channelName': {
            'type': 'string',
            'nullable': true,
        },
        'role': {
            'type': 'string',
            'enum': [
                'admin',
                'moderator',
                'owner',
                'unset',
            ],
            'nullable': true,
        },
        'suspendedAt': {
            'type': 'string',
            'format': 'date-time',
            'nullable': true,
        },
        'suspendedBy': {
            'type': 'string',
            'maxLength': 32,
            'nullable': true,
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=channelParticipantSchema.js.map