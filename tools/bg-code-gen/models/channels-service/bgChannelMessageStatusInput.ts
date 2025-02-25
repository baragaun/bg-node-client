import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelMessageStatusInput: TypeGraphqlClass = {
  name: 'BgChannelMessageStatusInput',
  graphqlType: GraphqlType.InputType,
  path: 'src/services/bgChannels/types/classes/BgChannelMessageStatusInput.ts',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'receivedAt', dataType: 'date' },
    { name: 'seenAt', dataType: 'date' },
  ]
}

export default bgChannelMessageStatusInput
