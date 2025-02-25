import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelStatusInput: TypeGraphqlClass = {
  name: 'BgChannelStatusInput',
  graphqlType: GraphqlType.InputType,
  path: 'src/services/bgChannels/types/classes/BgChannelStatusInput.ts',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'archivedAt', dataType: 'date' },
  ]
}

export default bgChannelStatusInput
