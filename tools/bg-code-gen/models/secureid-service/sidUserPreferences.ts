/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { GraphqlType } from '../../../../enums.js'
import { TypeGraphqlClass } from '../../../../types.js'

const sidUserPreferences: TypeGraphqlClass = {
  name: 'SidUserPreferences',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/secureId/types/classes/SidUserPreferences.ts',
  active: true,
  attributes: [
    { name: 'shareEmail', dataType: 'boolean', optional: true },
    { name: 'sharePhoneNumber', dataType: 'boolean', optional: true },
    { name: 'showWelcomeMessage', dataType: 'boolean', optional: true },
    { name: 'notificationOptions', dataType: 'NotificationOptions[]', optional: true },
  ]
}

export default sidUserPreferences
