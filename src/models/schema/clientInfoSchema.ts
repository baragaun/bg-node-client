export const ClientInfoSchema = {
  title: 'ClientInfo',
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
    myUserId: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    authToken: {
      type: 'string',
      nullable: true,
    },
    myUserDeviceUuid: {
      type: 'string',
      nullable: true,
    },
    signedOutUserId: {
      type: 'string',
      maxLength: 32,
      nullable: true,
    },
    remoteContentStatus: {
      type: 'object',
      properties: {
        optionsUpdatedAt: {
          type: 'integer',
          nullable: true,
        },
        myUserUpdatedAt: {
          type: 'integer',
          nullable: true,
        },
        myUserInboxUpdatedAt: {
          type: 'integer',
          nullable: true,
        },
      },
      nullable: true,
    },
    localContentStatus: {
      type: 'object',
      properties: {
        optionsUpdatedAt: {
          type: 'integer',
          nullable: true,
        },
        myUserUpdatedAt: {
          type: 'integer',
          nullable: true,
        },
        myUserInboxUpdatedAt: {
          type: 'integer',
          nullable: true,
        },
      },
      nullable: true,
    },
    sessionStartedAt: {
      type: 'integer',
      nullable: true,
    },
    sessionEndedAt: {
      type: 'integer',
      nullable: true,
    },
  },
  required: ['id'],
};
