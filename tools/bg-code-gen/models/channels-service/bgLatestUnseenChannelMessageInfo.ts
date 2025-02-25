import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgLatestUnseenChannelMessageInfo: TypeGraphqlClass = {
  name: 'BgLatestUnseenChannelMessageInfo',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/bgChannels/types/classes/BgLatestUnseenChannelMessageInfo.ts',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'createdAt', dataType: 'date', default: 'new Date()' },
  ]
}

export default bgLatestUnseenChannelMessageInfo
