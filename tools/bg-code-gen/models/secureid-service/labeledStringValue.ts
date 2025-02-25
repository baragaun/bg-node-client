/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { GraphqlType } from '../../../../enums.js'
import { TypeGraphqlClass } from '../../../../types.js'

const labeledStringValue: TypeGraphqlClass = {
  name: 'LabeledStringValue',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/secureId/types/classes/LabeledStringValue.ts',
  active: true,
  attributes: [
    { name: 'label', dataType: 'string', optional: true },
    { name: 'value', dataType: 'string' },
    { name: 'tags', dataType: 'string[]', optional: true },
  ]
}

export default labeledStringValue
