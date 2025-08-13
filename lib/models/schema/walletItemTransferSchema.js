export const WalletItemTransferSchema = {
    title: 'WalletItemTransfer',
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
        walletItemId: {
            type: 'string',
            maxLength: 32,
        },
        notificationId: {
            type: 'string',
            maxLength: 32,
            nullable: true,
        },
        recipientEmail: {
            type: 'string',
            nullable: true,
        },
        recipientFullName: {
            type: 'string',
            nullable: true,
        },
        subjectText: {
            type: 'string',
            nullable: true,
        },
        messageText: {
            type: 'string',
            nullable: true,
        },
        transferSlug: {
            type: 'string',
            nullable: true,
        },
        transferSecret: {
            type: 'string',
            nullable: true,
        },
        sentAt: {
            type: 'string',
            description: 'Date this transfer was sent',
            format: 'date-time',
            nullable: true,
        },
        acceptedAt: {
            type: 'string',
            description: 'The recipient accepted this transfer',
            format: 'date-time',
            nullable: true,
        },
        declinedAt: {
            type: 'string',
            description: 'The recipient declined this transfer',
            format: 'date-time',
            nullable: true,
        },
        canceledAt: {
            type: 'string',
            description: 'The sender canceled this transfer',
            format: 'date-time',
            nullable: true,
        },
        archivedAt: {
            type: 'string',
            description: 'The sender archived this transfer',
            format: 'date-time',
            nullable: true,
        },
    },
    required: ['id'],
};
//# sourceMappingURL=walletItemTransferSchema.js.map