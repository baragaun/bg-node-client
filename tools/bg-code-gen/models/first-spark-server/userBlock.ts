import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const userBlock: TypeGraphqlClass = {
  name: 'UserBlock',
  graphqlType: GraphqlType.ObjectType,
  extends: 'SidUserBlock',
  path: 'src/services/accounts/types/classes/UserBlock.ts',
  schemaPath: 'src/models/schema/userBlockSchema.ts',
  active: true,
  attributes: [
    { name: 'syncedWithMm2At', dataType: 'date', optional: true, description: 'This attribute is only used by the MM2 synchronizer.' },
    { name: 'mm2Id', dataType: 'string', optional: true, description: 'This attribute is only used by the MM2 synchronizer.' },
  ]
}

export default userBlock
