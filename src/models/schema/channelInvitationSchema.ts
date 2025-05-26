export const ChannelInvitationSchema = {
  '$schema': 'https://json-schema.org/draft/2020-12/schema',
  '$id': 'https://firstspark.social/channelInvitation.schema.json',
  'title': 'ChannelInvitation',
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
      'type': 'object',
      'properties': {
        'updatedAt': {
          'type': 'string',
          'format': 'date-time',
        },
      },
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
    'recipientId': {
      'type': 'string',
      'maxLength': 32,
    },
    'channelName': {
      'type': 'string',
    },
    'channelTopic': {
      'type': 'string',
    },
    'messageText': {
      'type': 'string',
    },
    'autoAccept': {
      'type': 'boolean',
      'description': 'An authorized sender (i.e. role: ["support"]) can skip the acceptance step.',
    },
    'declineReasonTextId': {
      'type': 'string',
    },
    'dismissedFromInboxBySenderAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'dismissedFromInboxByRecipientAt': {
      'type': 'string',
      'format': 'date-time',
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
    'suspendedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'suspendedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'userSearchId': {
      'type': 'string',
      'maxLength': 32,
    },
    'searchRank': {
      'type': 'integer',
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
