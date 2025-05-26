/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BgModelDef } from '../../../types.js'
import { GraphqlType } from '../../../enums.js'

const clientInfo: BgModelDef = {
  sourceProject: 'bg-node-client',
  name: 'ClientInfo',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  classFilePath: 'src/services/content/types/classes/ClientInfo.ts',
  generateJsonSchema: true,
  attributes: [
    { name: 'myUserId', dataType: 'id', optional: true },
    { name: 'authToken', dataType: 'string', optional: true },
    { name: 'myUserDeviceUuid', dataType: 'string', optional: true },
    { name: 'signedOutUserId', dataType: 'id', optional: true },
    {
      name: 'remoteContentStatus',
      dataType: 'ContentStatus',
      optional: true,
      schema: {
        type: 'object',
        modelType: 'ContentStatus',
      },
    },
    {
      name: 'localContentStatus',
      dataType: 'ContentStatus',
      optional: true,
      schema: {
        type: 'object',
        modelType: 'ContentStatus',
      },
    },
    { name: 'sessionStartedAt', dataType: 'integer', optional: true },
    { name: 'sessionEndedAt', dataType: 'integer', optional: true },
  ]
}

export default clientInfo
