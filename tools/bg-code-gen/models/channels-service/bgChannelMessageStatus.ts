import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelMessageStatus: TypeGraphqlClass = {
  name: 'BgChannelMessageStatus',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/bgChannels/types/classes/BgChannelMessageStatus.ts',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'isInArchivedChannel', dataType: 'boolean', optional: true },
    { name: 'receivedAt', dataType: 'date', optional: true },
    { name: 'seenAt', dataType: 'date', optional: true },
  ]
}

export default bgChannelMessageStatus
