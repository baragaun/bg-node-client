export const ChannelMessageSchema = {
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
    },
    metadata: {},
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
    replyToMessageId: {
      type: 'string',
      maxLength: 32,
    },
    channelMessageType: {},
    messageText: {
      type: 'string',
    },
    statuses: {},
    editedAt: {
      type: 'string',
      format: 'date-time',
    },
    suspendedAt: {
      type: 'string',
      format: 'date-time',
    },
    suspendedBy: {
      type: 'string',
      maxLength: 32,
    },
  },
  required: ['id'],
};
