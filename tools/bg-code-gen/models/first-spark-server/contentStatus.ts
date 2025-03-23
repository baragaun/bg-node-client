import { TypeGraphqlClass } from '../../../types.js'
import { GraphqlType } from '../../../enums.js'

const contentStatus: TypeGraphqlClass = {
  name: 'ContentStatus',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/content/types/classes/ContentStatus.ts',
  schemaPath: 'src/models/schema/contentStatusSchema.ts',
  active: true,
  attributes: [
    { name: 'optionsUpdatedAt', dataType: 'long', optional: true },
    { name: 'myUserUpdatedAt', dataType: 'long', optional: true },
    { name: 'myUserInboxUpdatedAt', dataType: 'long', optional: true },
  ]
}

export default contentStatus
