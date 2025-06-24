export const ContactSchema = {
    title: 'Contact',
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
                firstName: {
                    type: 'string',
                    nullable: true,
                },
                lastName: {
                    type: 'string',
                    nullable: true,
                },
                userHandle: {
                    type: 'string',
                    nullable: true,
                },
                avatarUrl: {
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
        userId: {
            type: 'string',
            maxLength: 32,
        },
        channelId: {
            type: 'string',
            maxLength: 32,
            nullable: true,
        },
        nickname: {
            type: 'string',
            nullable: true,
        },
        typeTextIds: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        favorite: {
            type: 'boolean',
            nullable: true,
        },
        notes: {
            type: 'string',
            nullable: true,
        },
        archivedAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
    },
    required: ['id'],
};
//# sourceMappingURL=contactSchema.js.map