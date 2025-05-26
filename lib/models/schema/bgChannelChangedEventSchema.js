export const BgChannelChangedEventSchema = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': 'https://firstspark.social/bgChannelChangedEvent.schema.json',
    'title': 'BgChannelChangedEvent',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'channelId': {
            'type': 'string',
            'maxLength': 32,
        },
        'invitationId': {
            'type': 'string',
            'maxLength': 32,
        },
        'messageId': {
            'type': 'string',
            'maxLength': 32,
        },
        'participantId': {
            'type': 'string',
            'maxLength': 32,
        },
        'eventType': {
            'type': 'string',
            'enum': [
                'channelDeleted',
                'channelUpdated',
                'invitationAccepted',
                'invitationCreated',
                'invitationDeclined',
                'invitationDeleted',
                'invitationUpdated',
                'messageCreated',
                'messageDeleted',
                'messageStatusChanged',
                'messageUpdated',
                'participantCreated',
                'participantDeleted',
                'participantUpdated',
            ],
            'enumType': 'ChannelChangedEventType',
        },
        'requestId': {
            'type': 'string',
            'maxLength': 32,
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=bgChannelChangedEventSchema.js.map