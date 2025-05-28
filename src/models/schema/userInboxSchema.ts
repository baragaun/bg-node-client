export const UserInboxSchema = {
  'title': 'UserInbox',
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
    'userId': {
      'type': 'string',
      'maxLength': 32,
    },
    'channels': {
      'type': 'ChannelInbox',
      'nullable': true,
    },
  },
  'required': [
    'id',
  ],
};
