export const ProductCategorySchema = {
    'title': 'ProductCategory',
    'version': 0,
    'primaryKey': 'id',
    'type': 'object',
    'properties': {
        'id': {
            'type': 'string',
            'maxLength': 32,
        },
        'adminNotes': {
            'type': 'string',
            'nullable': true,
        },
        'metadata': {
            'type': 'object',
            'properties': {
                'updatedAt': {
                    'type': 'string',
                    'format': 'date-time',
                    'nullable': true,
                },
            },
            'nullable': true,
        },
        'createdAt': {
            'type': 'string',
            'format': 'date-time',
        },
        'createdBy': {
            'type': 'string',
            'maxLength': 32,
            'nullable': true,
        },
        'updatedAt': {
            'type': 'string',
            'format': 'date-time',
            'nullable': true,
        },
        'updatedBy': {
            'type': 'string',
            'maxLength': 32,
            'nullable': true,
        },
        'deletedAt': {
            'type': 'string',
            'format': 'date-time',
            'nullable': true,
        },
        'deletedBy': {
            'type': 'string',
            'maxLength': 32,
            'nullable': true,
        },
        'importId': {
            'type': 'string',
        },
        'name': {
            'type': 'string',
        },
        'labelEn': {
            'type': 'string',
        },
        'sortIndex': {
            'type': 'integer',
        },
    },
    'required': [
        'id',
    ],
};
//# sourceMappingURL=productCategorySchema.js.map