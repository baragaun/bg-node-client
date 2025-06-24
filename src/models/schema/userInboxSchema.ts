export const UserInboxSchema = {
  title: 'UserInbox',
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
        updatedAt: {
          type: 'string',
          format: 'date-time',
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
    userId: {
      type: 'string',
      maxLength: 32,
    },
    channels: {
      type: 'object',
      properties: {
        userId: {
          type: 'string',
          maxLength: 32,
        },
        unseenMessages: {
          type: 'array',
          nullable: true,
        },
        unseenSystemMessages: {
          type: 'array',
          nullable: true,
        },
        unseenArchivedMessages: {
          type: 'array',
          nullable: true,
        },
        latestMessages: {
          type: 'array',
          nullable: true,
        },
        latestArchivedMessages: {
          type: 'array',
          nullable: true,
        },
        pendingInvitations: {
          type: 'array',
          nullable: true,
        },
        invitations: {
          type: 'array',
          nullable: true,
        },
        itemIdHash: {
          type: 'string',
          description:
            'MD5 hash of all item IDs to check whether there are any new or removed items.',
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
        channelsExceedMaxCount: {
          type: 'boolean',
          nullable: true,
        },
        invitationsExceedMaxCount: {
          type: 'boolean',
          nullable: true,
        },
        assumedMentorId: {
          type: 'string',
          maxLength: 32,
          nullable: true,
        },
        mm2Id: {
          type: 'string',
          description: 'This attribute is only used by the MM2 synchronizer.',
          nullable: true,
        },
        syncedWithMm2At: {
          type: 'string',
          description: 'This attribute is only used by the MM2 synchronizer.',
          format: 'date-time',
          nullable: true,
        },
      },
      nullable: true,
    },
  },
  required: ['id'],
};
