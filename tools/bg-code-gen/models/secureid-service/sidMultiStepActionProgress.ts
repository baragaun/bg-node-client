/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { GraphqlType } from '../../../../enums.js'
import { TypeGraphqlClass } from '../../../../types.js'

const sidMultiStepActionProgress: TypeGraphqlClass = {
  name: 'SidMultiStepActionProgress',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/secureId/types/classes/SidMultiStepActionProgress.ts',
  schemaPath: 'src/models/schema/sidMultiStepActionProgressSchema.ts',
  dbCollectionName: undefined,
  active: true,
  attributes: [
    { name: 'actionId', dataType: 'id' },
    { name: 'userId', dataType: 'id' },
    { name: 'actionType', dataType: 'MultiStepActionType', default: 'MultiStepActionType.unset' },
    { name: 'actionStatus', dataType: 'MultiStepActionStatus', optional: true },
    { name: 'notificationMethod', dataType: 'NotificationMethod', optional: true },
    { name: 'result', dataType: 'MultiStepActionResult', default: 'MultiStepActionResult.unset' },
    { name: 'attemptCount', dataType: 'integer', default: '0' },
    { name: 'notificationSentAt', dataType: 'date', optional: true },
    { name: 'notificationResult', dataType: 'MultiStepActionSendNotificationResult', optional: true },
    { name: 'notificationId', dataType: 'string', optional: true },
    { name: 'textData', dataType: 'string', optional: true },
    { name: 'report', dataType: 'string', optional: true },
    { name: 'emailPassed', dataType: 'boolean', optional: true },
    { name: 'emailUpdatedAt', dataType: 'date', optional: true },
    { name: 'emailVerifiedAt', dataType: 'date', optional: true },
    { name: 'errors', dataType: 'MultiStepActionError[]', optional: true },
    { name: 'authToken', dataType: 'string', optional: true },
    { name: 'authTokenExpiresAt', dataType: 'date', optional: true },
    { name: 'passwordPassed', dataType: 'boolean', optional: true },
    { name: 'passwordResettedAt', dataType: 'date', optional: true },
    { name: 'passwordUpdatedAt', dataType: 'date', optional: true },
    { name: 'phoneNumberPassed', dataType: 'boolean', optional: true },
    { name: 'phoneNumberUpdatedAt', dataType: 'date', optional: true },
    { name: 'phoneNumberVerifiedAt', dataType: 'date', optional: true },
    { name: 'signedInAt', dataType: 'date', optional: true },
    { name: 'expiresAt', dataType: 'date', optional: true },
    { name: 'events', dataType: 'ModelEvent[]', optional: true },
    { name: 'metadata', dataType: 'BaseModelMetadata', optional: true },
    { name: 'createdAt', dataType: 'Date', optional: true },
    { name: 'createdBy', dataType: 'id', optional: true },
    { name: 'updatedAt', dataType: 'Date', optional: true },
    { name: 'updatedBy', dataType: 'id', optional: true },
    { name: 'deletedAt', dataType: 'Date', optional: true },
    { name: 'deletedBy', dataType: 'id', optional: true },
  ]
}

export default sidMultiStepActionProgress
