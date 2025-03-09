import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const myUser: TypeGraphqlClass = {
  name: 'MyUser',
  graphqlType: GraphqlType.ObjectType,
  extends: 'User',
  path: 'src/services/accounts/types/classes/MyUser.ts',
  schemaPath: 'src/models/schema/myUserSchema.ts',
  dbCollectionName: 'users',
  active: true,
  attributes: [
  ]
}

export default myUser
