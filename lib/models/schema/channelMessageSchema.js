export const ChannelMessageSchema = {
    title: 'ChannelMessage',
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
                senderUserHandle: {
                    type: 'string',
                    nullable: true,
                },
                senderFirstName: {
                    type: 'string',
                    nullable: true,
                },
                senderLastName: {
                    type: 'string',
                    nullable: true,
                },
                senderAvatarUrl: {
                    type: 'string',
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
        },
        replyToMessageId: {
            type: 'string',
            maxLength: 32,
            nullable: true,
        },
        channelMessageType: {
            type: 'string',
            enum: ['unset', 'invitation', 'support', 'system', 'welcome', null],
            nullable: true,
        },
        messageText: {
            type: 'string',
            nullable: true,
        },
        seq: {
            type: 'integer',
            description: 'Watermark index number.',
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
                    isInArchivedChannel: {
                        type: 'boolean',
                        nullable: true,
                    },
                    receivedAt: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    seenAt: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                },
            },
            nullable: true,
        },
        editedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
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
    },
    required: ['id'],
};
//# sourceMappingURL=channelMessageSchema.js.map