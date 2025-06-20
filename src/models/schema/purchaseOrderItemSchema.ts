export const PurchaseOrderItemSchema = {
  title: 'PurchaseOrderItem',
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
    balance: {
      type: 'integer',
    },
    code: {
      type: 'string',
      nullable: true,
    },
    hasBarcode: {
      type: 'boolean',
      nullable: true,
    },
    barcodeFormat: {
      type: 'string',
      enum: [
        'TYPE_39',
        'TYPE_128',
        'CODE_25',
        'ITF',
        'I125',
        'UPC_A',
        'UPC_E',
        'EAN_13',
        'EAN_8',
        'QR_CODE',
        'PDF417',
        'DATA_MATRIX',
        null,
      ],
      nullable: true,
    },
    pin: {
      type: 'string',
      nullable: true,
    },
  },
  required: ['id'],
};
