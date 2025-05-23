/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { GraphqlType } from '../../../../enums.js'
import { TypeGraphqlClass } from '../../../../types.js'

const sidUser: TypeGraphqlClass = {
  name: 'SidUser',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/secureId/types/classes/SidUser.ts',
  dbCollectionName: 'users',
  active: true,
  attributes: [
    { name: 'firstName', dataType: 'string', optional: true },
    { name: 'lastName', dataType: 'string', optional: true },
    { name: 'userHandle', dataType: 'string', optional: true },
    { name: 'phoneNumber', dataType: 'string', optional: true },
    { name: 'phoneNumberUpdatedAt', dataType: 'date', optional: true },
    { name: 'isPhoneNumberVerified', dataType: 'boolean', default: 'false' },
    { name: 'email', dataType: 'string', optional: true },
    { name: 'emailSource', dataType: 'string', optional: true, description: 'The source of the email address, e.g. "google", "facebook", etc.' },
    { name: 'emailUpdatedAt', dataType: 'date', optional: true },
    { name: 'isEmailVerified', dataType: 'boolean', default: 'false' },
    { name: 'genderTextId', dataType: 'string', optional: true },
    { name: 'cityOfResidence', dataType: 'string', optional: true },
    { name: 'regionOfResidence', dataType: 'string', optional: true },
    { name: 'countryOfResidenceTextId', dataType: 'string', optional: true },
    { name: 'postalCode', dataType: 'string', optional: true },
    { name: 'avatarUrl', dataType: 'string', optional: true },
    { name: 'websites', dataType: 'LabeledStringValue[]', optional: true },
    { name: 'authType', dataType: 'AuthType', optional: true },
    { name: 'inviteCode', dataType: 'string', optional: true },
    { name: 'passwordHash', dataType: 'string', optional: true, exposeToGraphQl: false },
    { name: 'tfaBackupCodes', dataType: 'string', optional: true },
    { name: 'passwordUpdatedAt', dataType: 'date', optional: true },
    { name: 'preferredLanguageTextId', dataType: 'string', optional: true },
    { name: 'spokenLanguagesTextIds', dataType: 'string[]', default: '[]' },
    { name: 'selectedUiLanguageTextId', dataType: 'UiLanguage', optional: true },
    { name: 'fallbackUiLanguageTextId', dataType: 'UiLanguage', optional: true },
    { name: 'discoverable', dataType: 'boolean', optional: true, description: 'If discoverable is not true, the user will not be included in search results or recommended to other users. The system will set discoverable to null for various reasons, i.e. for a bad actor. The user can set it to false intentionally.' },
    { name: 'roles', dataType: 'UserRole[]', default: '[]' },
    { name: 'appFeatures', dataType: 'AppFeature[]', optional: true },
    { name: 'source', dataType: 'string', optional: true },
    { name: 'timezone', dataType: 'string', optional: true },
    { name: 'preferences', dataType: 'UserPreferences', optional: true },
    { name: 'trustLevel', dataType: 'integer', default: '1' },
    { name: 'signedInAt', dataType: 'date', optional: true },
    { name: 'signedOutAt', dataType: 'date', optional: true },
    { name: 'latestActivityAt', dataType: 'date', optional: true },
    { name: 'userDevices', dataType: 'UserDeviceWithoutAuth[]', default: '[]' },
    { name: 'userBlocks', dataType: 'UserBlock[]', optional: true },
    { name: 'contacts', dataType: 'Contact[]', optional: true },
    { name: 'metadata', dataType: 'UserMetadata', optional: true },
    { name: 'inactivatedAt', dataType: 'date', optional: true },
    { name: 'inactivatedBy', dataType: 'id', optional: true },
    { name: 'termsAndConditionsAcceptedAt', dataType: 'date', optional: true },
    { name: 'optIntoNewsletter', dataType: 'boolean', optional: true },
    { name: 'onboardingStage', dataType: 'string', optional: true },
    { name: 'suspendedAt', dataType: 'date', optional: true },
    { name: 'suspendedBy', dataType: 'id', optional: true },
    { name: 'addedToBgVaultAt', dataType: 'Date', optional: true },
    // Not exposed to GraphQL:
    { name: 'isTestUser', dataType: 'boolean', optional: true },
    { name: 'userHandleLowerCase', dataType: 'string', optional: true },
    { name: 'emailLowerCase', dataType: 'string', optional: true },
  ]
}

export default sidUser
