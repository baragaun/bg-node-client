export const ChannelInvitationSchema = {
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
        recipientId: {
            type: 'string',
            maxLength: 32,
        },
        channelName: {
            type: 'string',
        },
        channelTopic: {
            type: 'string',
        },
        messageText: {
            type: 'string',
        },
        declineReasonTextId: {
            type: 'string',
        },
        dismissedFromInboxBySenderAt: {
            type: 'string',
            format: 'date-time',
        },
        dismissedFromInboxByRecipientAt: {
            type: 'string',
            format: 'date-time',
        },
        readByRecipientAt: {
            type: 'string',
            format: 'date-time',
        },
        status: {},
        suspendedAt: {
            type: 'string',
            format: 'date-time',
        },
        suspendedBy: {
            type: 'string',
            maxLength: 32,
        },
        userSearchId: {
            type: 'string',
            maxLength: 32,
        },
        searchRank: {
            type: 'integer',
        },
        mm2ConversationId: {
            description: 'This attribute is only used by the MM2 synchronizer.',
            type: 'string',
        },
        mm2Id: {
            description: 'This attribute is only used by the MM2 synchronizer. Mm2 message ID.',
            type: 'string',
        },
        syncedWithMm2At: {
            description: 'This attribute is only used by the MM2 synchronizer.',
            type: 'string',
            format: 'date-time',
        },
    },
    required: ['id'],
};
//# sourceMappingURL=channelInvitationSchema.js.map