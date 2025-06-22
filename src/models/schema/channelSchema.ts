export const ChannelSchema = {
  title: 'Channel',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 32,
    },
    adminNotes: {
      type: 'string',
      nullable: true,
    },
    metadata: {
      type: 'object',
      properties: {
        channelInvitationAccepted: {
          type: 'boolean',
          nullable: true,
        },
        messagesSentByCreatorCount: {
          type: 'integer',
          nullable: true,
        },
        messagesSentByFirstParticipantCount: {
          type: 'integer',
          nullable: true,
        },
      },
      nullable: true,
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
    createdBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    updatedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    deletedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    deletedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    name: {
      type: 'string',
      nullable: true,
    },
    topic: {
      type: 'string',
      nullable: true,
    },
    description: {
      type: 'string',
      nullable: true,
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
      },
      nullable: true,
    },
    channelType: {
      type: 'string',
      enum: ['unset', 'mentoring', 'support', 'welcome'],
    },
    statuses: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          userId: {
            type: 'string',
            maxLength: 32,
          },
          archivedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
          },
        },
      },
      nullable: true,
    },
    userIds: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 32,
      },
      nullable: true,
    },
    otherUserId: {
      type: 'string',
      description: 'For 1:1 channels, the ID of the other user. The first user is createdBy.',
      maxLength: 32,
      nullable: true,
    },
    pausedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    pausedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    suspendedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    suspendedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    lockedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    lockedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    archivedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    archivedBy: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
  },
  required: ['id'],
};
