import { TypeGraphqlClass } from '../../../types.js'
import { GraphqlType } from '../../../enums.js'

const contentStatus: TypeGraphqlClass = {
  name: 'ClientInfo',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/content/types/classes/ClientInfo.ts',
  schemaPath: 'src/models/schema/clientInfoSchema.ts',
  active: true,
  attributes: [
    { name: 'myUserId', dataType: 'id', optional: true },
    { name: 'authToken', dataType: 'string', optional: true },
    { name: 'myUserDeviceUuid', dataType: 'string', optional: true },
    { name: 'signedOutUserId', dataType: 'id', optional: true },
    { name: 'remoteContentStatus', dataType: 'ContentStatus', optional: true },
    { name: 'localContentStatus', dataType: 'ContentStatus', optional: true },
    { name: 'sessionStartedAt', dataType: 'integer', optional: true },
    { name: 'sessionEndedAt', dataType: 'integer', optional: true },
  ]
}

export default contentStatus
