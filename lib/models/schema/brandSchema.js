export const BrandSchema = {
    title: 'Brand',
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
        name: {
            type: 'string',
        },
        importId: {
            type: 'string',
        },
        imageSource: {
            type: 'string',
            nullable: true,
        },
        slug: {
            type: 'string',
            nullable: true,
        },
        url: {
            type: 'string',
            nullable: true,
        },
        balanceLookupUri: {
            type: 'string',
            nullable: true,
        },
        listed: {
            type: 'boolean',
            nullable: true,
        },
        logoImageSource: {
            type: 'string',
            nullable: true,
        },
        description: {
            type: 'string',
            nullable: true,
        },
        alias1: {
            type: 'string',
            nullable: true,
        },
        alias2: {
            type: 'string',
            nullable: true,
        },
        alias3: {
            type: 'string',
            nullable: true,
        },
    },
    required: ['id'],
};
//# sourceMappingURL=brandSchema.js.map