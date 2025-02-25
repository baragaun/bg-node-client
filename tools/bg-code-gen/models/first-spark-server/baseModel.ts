import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const baseModel: TypeGraphqlClass = {
  name: 'BaseModel',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/models/types/classes/BaseModel.ts',
  active: true,
  attributes: [
    { name: 'id', dataType: 'id' },
    { name: 'adminNotes', dataType: 'string', optional: true },
    { name: 'events', dataType: 'ModelEvent[]', optional: true, schema: { skip: true } },
    { name: 'metadata', dataType: 'BaseModelMetadata', optional: true },
    { name: 'createdAt', dataType: 'date', default: 'new Date()' },
    { name: 'createdBy', dataType: 'id', optional: true },
    { name: 'updatedAt', dataType: 'date', optional: true },
    { name: 'updatedBy', dataType: 'id', optional: true },
    { name: 'deletedAt', dataType: 'date', optional: true },
    { name: 'deletedBy', dataType: 'id', optional: true },
  ]
}

export default baseModel
