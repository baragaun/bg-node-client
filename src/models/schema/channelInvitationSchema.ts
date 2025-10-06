export const ChannelInvitationSchema = {
  title: 'ChannelInvitation',
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
    channelId: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    recipientId: {
      type: 'string',
      maxLength: 32,
    },
    channelName: {
      type: 'string',
      nullable: true,
    },
    channelTopic: {
      type: 'string',
      nullable: true,
    },
    messageText: {
      type: 'string',
      nullable: true,
    },
    autoAccept: {
      type: 'boolean',
      description: 'An authorized sender (i.e. role: ["support"]) can skip the acceptance step.',
      nullable: true,
    },
    declineReasonTextId: {
      type: 'string',
      nullable: true,
    },
    dismissedFromInboxBySenderAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    dismissedFromInboxByRecipientAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    readByRecipientAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    status: {
      type: 'string',
      enum: ['created', 'accepted', 'declined', 'unset'],
    },
    syncedToAnalyticsAt: {
      type: 'string',
      format: 'date-time',
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
    userSearchId: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    searchRank: {
      type: 'integer',
      nullable: true,
    },
  },
  required: ['id'],
};
