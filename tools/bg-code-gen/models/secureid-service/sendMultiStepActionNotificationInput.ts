/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { GraphqlType } from '../../../../enums.js'
import { TypeGraphqlClass } from '../../../../types.js'

const sendMultiStepActionNotificationInput: TypeGraphqlClass = {
  name: 'SendMultiStepActionNotificationInput',
  graphqlType: GraphqlType.InputType,
  path: 'src/services/secureId/types/classes/SendMultiStepActionNotificationInput.ts',
  schemaPath: 'src/models/schema/sendMultiStepActionNotificationInputSchema.ts',
  active: true,
  attributes: [
    { name: 'actionId', dataType: 'string', optional: false },
    { name: 'notificationMethod', dataType: 'NotificationMethod' },
  ]
}

export default sendMultiStepActionNotificationInput
