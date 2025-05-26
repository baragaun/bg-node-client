export const ChannelMessageSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/channelMessage.schema.json',
    'title': 'ChannelMessage',
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
            'type': 'ChannelMessageMetadata',
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
        'statuses': {
            'type': 'array',
        },
        'editedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'suspendedAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'suspendedBy': {
            'type': 'string',
            'maxLength': 32,
        },
        'mm2ConversationId': {
            'type': 'string',
            'description': 'This attribute is only used by the MM2 synchronizer.',
        },
        'mm2Id': {
            'type': 'string',
            'description': 'This attribute is only used by the MM2 synchronizer. Mm2 message ID.',
        },
        'syncedWithMm2At': {
            'type': 'string',
            'description': 'This attribute is only used by the MM2 synchronizer.',
            'format': 'date-time',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=channelMessageSchema.js.map