export const CompanySchema = {
  title: 'Company',
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
    userIds: {
      type: 'array',
      items: {
        type: 'string',
      },
      nullable: true,
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
      nullable: true,
    },
    location: {
      type: 'string',
      nullable: true,
    },
    companyTypeTextId: {
      type: 'string',
      nullable: true,
    },
    companyStageTextId: {
      type: 'string',
      nullable: true,
    },
    websites: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: {
            type: 'string',
            nullable: true,
          },
          value: {
            type: 'string',
          },
          tags: {
            type: 'array',
            items: {
              type: 'string',
            },
            nullable: true,
          },
        },
      },
      nullable: true,
    },
    industries: {
      type: 'array',
      items: {
        type: 'string',
      },
      nullable: true,
    },
    isOperational: {
      type: 'boolean',
      nullable: true,
    },
    isFundraising: {
      type: 'boolean',
      nullable: true,
    },
    annualRevenue: {
      type: 'integer',
      nullable: true,
    },
    employeeCount: {
      type: 'integer',
      nullable: true,
    },
    foundedAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
  },
  required: ['id'],
};
