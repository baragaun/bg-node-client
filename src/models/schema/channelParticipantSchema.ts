export const ChannelParticipantSchema = {
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
        'userHandle': {
          'type': 'string',
        },
        'firstName': {
          'type': 'string',
        },
        'lastName': {
          'type': 'string',
        },
        'nickname': {
          'type': 'string',
        },
        'avatarUrl': {
          'type': 'string',
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
    'userId': {
      'type': 'string',
      'maxLength': 32,
    },
    'invitedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'channelName': {
      'type': 'string',
    },
    'role': {},
    'suspendedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'suspendedBy': {
      'type': 'string',
      'maxLength': 32,
    },
  },
  'required': [
    'id',
  ],
};
