/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { GraphqlType } from '../../../../enums.js'
import { TypeGraphqlClass } from '../../../../types.js'

const sidMultiStepAction: TypeGraphqlClass = {
  name: 'SidMultiStepAction',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/secureId/types/classes/SidMultiStepAction.ts',
  schemaPath: 'src/models/schema/sidMultiStepActionSchema.ts',
  dbCollectionName: 'async-tasks',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'userIdent', dataType: 'string', optional: true },
    { name: 'userHandle', dataType: 'string', optional: true },
    { name: 'email', dataType: 'string', optional: true },
    { name: 'phoneNumber', dataType: 'string', optional: true },
    { name: 'deviceUuid', dataType: 'string', optional: true },
    { name: 'actionType', dataType: 'MultiStepActionType', default: 'MultiStepActionType.unset' },
    { name: 'actionStatus', dataType: 'MultiStepActionStatus', default: 'MultiStepActionStatus.created' },
    { name: 'notificationMethod', dataType: 'NotificationMethod', default: 'NotificationMethod.auto' },
    { name: 'result', dataType: 'MultiStepActionResult', default: 'MultiStepActionResult.unset' },
    { name: 'confirmToken', dataType: 'string', optional: true },
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
    { name: 'password', dataType: 'string', optional: true },
    { name: 'passwordPassed', dataType: 'boolean', optional: true },
    { name: 'passwordResettedAt', dataType: 'date', optional: true },
    { name: 'passwordUpdatedAt', dataType: 'date', optional: true },
    { name: 'phoneNumberPassed', dataType: 'boolean', optional: true },
    { name: 'phoneNumberUpdatedAt', dataType: 'date', optional: true },
    { name: 'phoneNumberVerifiedAt', dataType: 'date', optional: true },
    { name: 'signedInAt', dataType: 'date', optional: true },
    { name: 'tfaBackupCodes', dataType: 'string', optional: true },
    { name: 'expiresAt', dataType: 'date', optional: true },
  ]
}

export default sidMultiStepAction
