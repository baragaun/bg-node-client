export const ProductSchema = {
    title: 'Product',
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
        importId: {
            type: 'string',
        },
        vendorId: {
            type: 'string',
            maxLength: 32,
        },
        vendorImportId: {
            type: 'string',
            nullable: true,
        },
        name: {
            type: 'string',
        },
        description: {
            type: 'string',
            nullable: true,
        },
        categories: {
            type: 'array',
            items: {
                type: 'string',
                maxLength: 32,
            },
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
        imageSourceFront: {
            type: 'string',
            nullable: true,
        },
        imageSourceBack: {
            type: 'string',
            nullable: true,
        },
        hasBarcode: {
            type: 'boolean',
            nullable: true,
        },
        barcodeFormat: {
            type: 'string',
            nullable: true,
        },
    },
    required: ['id'],
};
//# sourceMappingURL=productSchema.js.map