export const ChannelSchema = {
  '$schema': 'https://json-schema.org/draft/2020-12/schema',
  '$id': 'https://firstspark.social/channel.schema.json',
  'title': 'Channel',
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
        'unseenMessageInfo': {
          'type': 'array',
          'items': {
            'type': 'object',
          },
          'properties': {
            'userId': {
              'type': 'string',
              'maxLength': 32,
            },
            'createdAt': {
              'type': 'string',
              'format': 'date-time',
            },
          },
        },
        'channelInvitationAccepted': {
          'type': 'boolean',
        },
        'messagesSentByCreatorCount': {
          'type': 'integer',
        },
        'messagesSentByFirstParticipantCount': {
          'type': 'integer',
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
    'name': {
      'type': 'string',
    },
    'topic': {
      'type': 'string',
    },
    'description': {
      'type': 'string',
    },
    'tags': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
    },
    'channelType': {
      'type': 'string',
      'enum': [
        'unset',
        'mentoring',
        'support',
        'welcome',
      ],
      'enumType': 'ChannelType',
    },
    'statuses': {
      'type': 'array',
      'items': {
        'type': 'object',
      },
      'properties': {
        'userId': {
          'type': 'string',
          'maxLength': 32,
        },
        'archivedAt': {
          'type': 'string',
          'format': 'date-time',
        },
      },
    },
    'userIds': {
      'type': 'array',
      'items': {
        'type': 'string',
      },
      'maxLength': 32,
    },
    'otherUserId': {
      'type': 'string',
      'description': 'For 1:1 channels, the ID of the other user. The first user is createdBy.',
      'maxLength': 32,
    },
    'pausedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'pausedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'suspendedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'suspendedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'lockedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'lockedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'archivedAt': {
      'type': 'string',
      'format': 'date-time',
    },
    'archivedBy': {
      'type': 'string',
      'maxLength': 32,
    },
    'assumedMentorId': {
      'type': 'string',
      'maxLength': 32,
    },
    'mm2Id': {
      'type': 'string',
      'description': 'This attribute is only used by the MM2 synchronizer.',
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
