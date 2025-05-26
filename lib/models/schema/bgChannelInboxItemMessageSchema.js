export const BgChannelInboxItemMessageSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgChannelInboxItemMessage.schema.json',
    'title': 'BgChannelInboxItemMessage',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'id': {
            'type': 'string',
            'maxLength': 32,
        },
        'channelId': {
            'type': 'string',
            'maxLength': 32,
        },
        'replyToMessageId': {
            'type': 'string',
            'maxLength': 32,
        },
        'channelMessageType': {
            'type': 'string',
            'enum': [
                'unset',
                'invitation',
                'support',
                'welcome',
            ],
            'enumType': 'ChannelMessageType',
        },
        'messageText': {
            'type': 'string',
        },
        'senderUserHandle': {
            'type': 'string',
        },
        'senderFirstName': {
            'type': 'string',
        },
        'senderLastName': {
            'type': 'string',
        },
        'senderAvatarUrl': {
            'type': 'string',
        },
        'seenAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'isArchived': {
            'type': 'boolean',
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
        'userIds': {
            'type': 'array',
            'items': {
                'type': 'string',
            },
            'maxLength': 32,
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgChannelInboxItemMessageSchema.js.map