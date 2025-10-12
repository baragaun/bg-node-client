export const GiftCardProductSchema = {
  title: 'GiftCardProduct',
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
    brandId: {
      type: 'string',
      maxLength: 32,
    },
    brandImportId: {
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
    productType: {
      type: 'ProductType',
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
    genericGiftCardId: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    isGeneric: {
      type: 'boolean',
      nullable: true,
    },
    hasPin: {
      type: 'boolean',
      nullable: true,
    },
    termsEn: {
      type: 'string',
      nullable: true,
    },
    termsUrl: {
      type: 'string',
      nullable: true,
    },
    instructionsEn: {
      type: 'string',
      nullable: true,
    },
    instructionsUrl: {
      type: 'string',
      nullable: true,
    },
    denominations: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          amount: {
            type: 'integer',
          },
          enabled: {
            type: 'boolean',
          },
        },
      },
      nullable: true,
    },
  },
  required: ['id'],
};
