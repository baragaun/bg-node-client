export const UserDeviceSchema = {
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
    "deviceUuid": {
      "type": "string"
    },
    "deviceType": {
      "type": "string"
    },
    "trusted": {
      "type": "boolean"
    },
    "phoneNumber": {
      "type": "string"
    },
    "phoneNumberUpdatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "isPhoneNumberVerified": {
      "type": "boolean"
    },
    "brand": {
      "type": "string"
    },
    "model": {
      "type": "string"
    },
    "isTablet": {
      "type": "boolean"
    },
    "screenWidth": {
      "type": "integer"
    },
    "screenHeight": {
      "type": "integer"
    },
    "os": {
      "type": "string"
    },
    "osVersion": {
      "type": "string"
    },
    "timezone": {
      "type": "string"
    },
    "ipAddress": {
      "type": "string"
    },
    "consumer": {
      "type": "string"
    },
    "consumerVersion": {
      "type": "string"
    },
    "acceptedLanguage": {
      "type": "string"
    },
    "locale": {
      "type": "string"
    },
    "countryCode": {
      "type": "string"
    },
    "appVersion": {
      "type": "string"
    },
    "signedInAt": {
      "type": "string",
      "format": "date-time"
    },
    "signedOutAt": {
      "type": "string",
      "format": "date-time"
    },
    "sessionStartedAt": {
      "type": "string",
      "format": "date-time"
    },
    "sessionEndedAt": {
      "type": "string",
      "format": "date-time"
    },
    "authType": {},
    "identityProvider": {},
    "oauthFederatedProvider": {},
    "oauthUserId": {
      "type": "string"
    },
    "oauthDelegateUserId": {
      "type": "string"
    },
    "oauthProfileUrl": {
      "type": "string"
    },
    "oauthToken": {
      "type": "string"
    },
    "oauthTokenCreatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "oauthTokenExpiresAt": {
      "type": "string",
      "format": "date-time"
    },
    "oauthRefreshToken": {
      "type": "string"
    },
    "oauthRefreshTokenCreatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "oauthRefreshTokenExpiresAt": {
      "type": "string",
      "format": "date-time"
    },
    "pushNotificationToken": {
      "type": "string"
    },
    "trustedAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": [
    "id"
  ]
};
