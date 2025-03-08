/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { GraphqlType } from '../../../../enums.js'
import { TypeGraphqlClass } from '../../../../types.js'

const sidUserBlock: TypeGraphqlClass = {
  name: 'UserBlock',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/secureId/types/classes/UserBlock.ts',
  dbCollectionName: null,
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'reasonTextId', dataType: 'string' },
    { name: 'notes', dataType: 'string', optional: true },
    { name: 'adminNotes', dataType: 'string', optional: true },
    { name: 'createdAt', dataType: 'date', default: 'new Date()' },
  ]
}

export default sidUserBlock
