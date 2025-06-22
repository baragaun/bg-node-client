export const PurchaseOrderSchema = {
  title: 'PurchaseOrder',
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
    userId: {
      type: 'string',
      maxLength: 32,
    },
    shoppingCartId: {
      type: 'string',
      maxLength: 32,
    },
    sumItemPrice: {
      type: 'integer',
    },
    totalPrice: {
      type: 'integer',
    },
    vat: {
      type: 'integer',
    },
    paidAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    canceledAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    refundedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    items: {
      type: 'array',
      items: {
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
          purchaseOrderId: {
            type: 'string',
            maxLength: 32,
          },
          shoppingCartItemId: {
            type: 'string',
            maxLength: 32,
          },
          productId: {
            type: 'string',
            maxLength: 32,
          },
          vendorId: {
            type: 'string',
            maxLength: 32,
          },
          quantity: {
            type: 'integer',
          },
          price: {
            type: 'integer',
          },
          totalPrice: {
            type: 'integer',
          },
        },
      },
    },
  },
  required: ['id'],
};
