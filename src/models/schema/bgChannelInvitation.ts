export const BgChannelInvitationSchema = {
  title: 'BgChannelInvitation',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
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
