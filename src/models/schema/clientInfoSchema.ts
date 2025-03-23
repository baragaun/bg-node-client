export const ClientInfoSchema = {
  "version": 0,
  "primaryKey": "id",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "maxLength": 32
    },
    "adminNotes": {
      "type": "string"
    },
    "metadata": {},
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "createdBy": {
      "type": "string",
      "maxLength": 32
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedBy": {
      "type": "string",
      "maxLength": 32
    },
    "deletedAt": {
      "type": "string",
      "format": "date-time"
    },
    "deletedBy": {
      "type": "string",
      "maxLength": 32
    },
    "myUserId": {
      "type": "string",
      "maxLength": 32
    },
    "authToken": {
      "type": "string"
    },
    "myUserDeviceUuid": {
      "type": "string"
    },
    "signedOutUserId": {
      "type": "string",
      "maxLength": 32
    },
    "remoteContentStatus": {
      "type": "object",
      "properties": {
        "optionsUpdatedAt": {
          "type": "integer"
        },
        "myUserUpdatedAt": {
          "type": "integer"
        },
        "myUserInboxUpdatedAt": {
          "type": "integer"
        }
      }
    },
    "localContentStatus": {
      "type": "object",
      "properties": {
        "optionsUpdatedAt": {
          "type": "integer"
        },
        "myUserUpdatedAt": {
          "type": "integer"
        },
        "myUserInboxUpdatedAt": {
          "type": "integer"
        }
      }
    },
    "sessionStartedAt": {
      "type": "integer"
    },
    "sessionEndedAt": {
      "type": "integer"
    }
  },
  "required": [
    "id"
  ]
};
