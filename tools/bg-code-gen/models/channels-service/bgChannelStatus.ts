import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelStatus: TypeGraphqlClass = {
  name: 'BgChannelStatus',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/bgChannels/types/classes/BgChannelStatus.ts',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'archivedAt', dataType: 'date', optional: true },
  ]
}

export default bgChannelStatus
