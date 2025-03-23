export const ContactSchema = {
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
    "userId": {
      "type": "string",
      "maxLength": 32
    },
    "channelId": {
      "type": "string",
      "maxLength": 32
    },
    "nickname": {
      "type": "string"
    },
    "typeTextIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "favorite": {
      "type": "boolean"
    },
    "notes": {
      "type": "string"
    },
    "archivedAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "id"
  ]
};
