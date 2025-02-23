export const BgChannelInboxSchema = {
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
    "unseenMessages": {},
    "unseenArchivedMessages": {},
    "latestMessages": {},
    "latestArchivedMessages": {},
    "pendingInvitations": {},
    "invitations": {},
    "itemIdHash": {
      "description": "MD5 hash of all item IDs to check whether there are any new or removed items.",
      "type": "string"
    }
  },
  "required": [
    "id"
  ]
};
