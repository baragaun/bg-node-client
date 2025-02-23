import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelMessageListFilter: TypeGraphqlClass = {
  name: 'BgChannelMessageListFilter',
  graphqlType: GraphqlType.InputType,
  extends: 'BaseListFilter',
  path: 'src/services/bgChannels/types/classes/BgChannelMessageListFilter.ts',
  active: true,
  attributes: [
    { name: 'channelId', dataType: 'id' },
    { name: 'receiverUserId', dataType: 'id' },
    { name: 'replyToMessageId', dataType: 'id' },
    { name: 'includeChannelMessageType', dataType: 'ChannelMessageType[]' },
    { name: 'received', dataType: 'boolean' },
    { name: 'seen', dataType: 'boolean' },
  ]
}

export default bgChannelMessageListFilter
