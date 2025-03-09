import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const contact: TypeGraphqlClass = {
  name: 'Contact',
  graphqlType: GraphqlType.ObjectType,
  extends: 'SidContact',
  path: 'src/services/accounts/types/classes/Contact.ts',
  schemaPath: 'src/models/schema/contactSchema.ts',
  dbCollectionName: 'user-contacts',
  active: true,
  isTypeOrmModel: false,
  attributes: [
    { name: 'metadata', dataType: 'ContactMetadata', optional: true },
  ]
}

export default contact
