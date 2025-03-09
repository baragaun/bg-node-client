import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const company: TypeGraphqlClass = {
  name: 'UserInbox',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/accounts/types/classes/UserInbox.ts',
  schemaPath: 'src/models/schema/userInboxSchema.ts',
  dbCollectionName: 'user-inboxes',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'channels', dataType: 'ChannelInbox', optional: true },
  ]
}

export default company
