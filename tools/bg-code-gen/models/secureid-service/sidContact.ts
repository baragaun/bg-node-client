import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const sidContact: TypeGraphqlClass = {
  name: 'SidContact',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/secureId/types/classes/SidContact.ts',
  dbCollectionName: 'contacts',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'channelId', dataType: 'id', optional: true },
    { name: 'nickname', dataType: 'string', optional: true },
    { name: 'typeTextIds', dataType: 'string[]', default: '[]' },
    { name: 'favorite', dataType: 'boolean', optional: true },
    { name: 'notes', dataType: 'string', optional: true },
    { name: 'archivedAt', dataType: 'date', optional: true },
  ]
}

export default sidContact
