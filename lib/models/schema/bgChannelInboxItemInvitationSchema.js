export const BgChannelInboxItemInvitationSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgChannelInboxItemInvitation.schema.json',
    'title': 'BgChannelInboxItemInvitation',
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
        'messageText': {
            'type': 'string',
        },
        'readByRecipientAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'status': {
            'type': 'string',
            'enum': [
                'created',
                'accepted',
                'declined',
                'unset',
            ],
            'enumType': 'ChannelInvitationStatus',
        },
        'createdAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'createdBy': {
            'type': 'string',
            'maxLength': 32,
        },
        'recipientId': {
            'type': 'string',
            'maxLength': 32,
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgChannelInboxItemInvitationSchema.js.map