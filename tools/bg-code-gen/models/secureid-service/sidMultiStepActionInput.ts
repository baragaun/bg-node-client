/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { GraphqlType } from '../../../enums.js'
import { TypeGraphqlClass } from '../../../types.js'

const sidMultiStepActionInput: TypeGraphqlClass = {
  name: 'SidMultiStepActionInput',
  graphqlType: GraphqlType.InputType,
  extends: 'BaseModelInput',
  path: 'src/services/secureId/types/classes/SidMultiStepActionInput.ts',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'userIdent', dataType: 'string' },
    { name: 'userHandle', dataType: 'string' },
    { name: 'email', dataType: 'string' },
    { name: 'phoneNumber', dataType: 'string' },
    { name: 'actionType', dataType: 'MultiStepActionType' },
    { name: 'actionStatus', dataType: 'MultiStepActionStatus' },
    { name: 'notificationMethod', dataType: 'NotificationMethod' },
    { name: 'result', dataType: 'MultiStepActionResult' },
    { name: 'confirmToken', dataType: 'string' },
    { name: 'attemptCount', dataType: 'integer' },
    { name: 'notificationSentAt', dataType: 'date' },
    { name: 'notificationResult', dataType: 'MultiStepActionSendNotificationResult' },
    { name: 'notificationId', dataType: 'string' },
    { name: 'textData', dataType: 'string' },
    { name: 'report', dataType: 'string' },
    { name: 'emailPassed', dataType: 'boolean' },
    { name: 'emailUpdatedAt', dataType: 'date' },
    { name: 'emailVerifiedAt', dataType: 'date' },
    { name: 'errors', dataType: 'MultiStepActionErrorInput[]' },
    { name: 'password', dataType: 'string' },
    { name: 'passwordPassed', dataType: 'boolean' },
    { name: 'passwordResettedAt', dataType: 'date' },
    { name: 'passwordUpdatedAt', dataType: 'date' },
    { name: 'phoneNumberPassed', dataType: 'boolean' },
    { name: 'phoneNumberUpdatedAt', dataType: 'date' },
    { name: 'phoneNumberVerifiedAt', dataType: 'date' },
    { name: 'signedInAt', dataType: 'date' },
    { name: 'tfaBackupCodes', dataType: 'string' },
    { name: 'expiresAt', dataType: 'date' },
  ]
}

export default sidMultiStepActionInput
