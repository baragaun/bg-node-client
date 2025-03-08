export const ChannelSchema = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 50,
    },
    adminNotes: {
      type: 'string',
    },
    metadata: {
      type: 'object',
      properties: {
        unseenMessageInfo: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              userId: {
                type: 'string',
                maxLength: 32,
              },
              createdAt: {
                type: 'string',
                format: 'date-time',
              },
            },
          },
        },
      },
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
    createdBy: {
      type: 'string',
      maxLength: 32,
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
    },
    updatedBy: {
      type: 'string',
      maxLength: 32,
    },
    deletedAt: {
      type: 'string',
      format: 'date-time',
    },
    deletedBy: {
      type: 'string',
      maxLength: 32,
    },
    name: {
      type: 'string',
    },
    topic: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    channelType: {},
    participants: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            maxLength: 32,
          },
          adminNotes: {
            type: 'string',
          },
          metadata: {
            type: 'object',
            properties: {
              userHandle: {
                type: 'string',
              },
              firstName: {
                type: 'string',
              },
              lastName: {
                type: 'string',
              },
              avatarUrl: {
                type: 'string',
              },
            },
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
          },
          createdBy: {
            type: 'string',
            maxLength: 32,
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
          },
          updatedBy: {
            type: 'string',
            maxLength: 32,
          },
          deletedAt: {
            type: 'string',
            format: 'date-time',
          },
          deletedBy: {
            type: 'string',
            maxLength: 32,
          },
          channelId: {
            type: 'string',
            maxLength: 32,
          },
          userId: {
            type: 'string',
            maxLength: 32,
          },
          invitedBy: {
            type: 'string',
            maxLength: 32,
          },
          channelName: {
            type: 'string',
          },
          role: {},
          suspendedAt: {
            type: 'string',
            format: 'date-time',
          },
          suspendedBy: {
            type: 'string',
            maxLength: 32,
          },
        },
      },
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
          },
        },
      },
    },
    userIds: {
      type: 'array',
      items: {
        type: 'string',
        maxLength: 32,
      },
    },
    pausedAt: {
      type: 'string',
      format: 'date-time',
    },
    pausedBy: {
      type: 'string',
      maxLength: 32,
    },
    suspendedAt: {
      type: 'string',
      format: 'date-time',
    },
    suspendedBy: {
      type: 'string',
      maxLength: 32,
    },
    lockedAt: {
      type: 'string',
      format: 'date-time',
    },
    lockedBy: {
      type: 'string',
      maxLength: 32,
    },
    archivedAt: {
      type: 'string',
      format: 'date-time',
    },
    archivedBy: {
      type: 'string',
      maxLength: 32,
    },
  },
  required: ['id'],
};
