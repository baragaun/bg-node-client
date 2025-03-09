import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelMessage: TypeGraphqlClass = {
  name: 'BgChannelMessage',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/bgChannels/types/classes/BgChannelMessage.ts',
  dbCollectionName: 'channelMessages',
  active: true,
  attributes: [
    { name: 'channelId', dataType: 'id' },
    { name: 'replyToMessageId', dataType: 'id', optional: true },
    { name: 'channelMessageType', dataType: 'ChannelMessageType', optional: true },
    { name: 'messageText', dataType: 'string', optional: true },
    { name: 'statuses', dataType: 'ChannelMessageStatus[]', optional: true },
    { name: 'metadata', dataType: 'ChannelMessageMetadata', optional: true },
    { name: 'editedAt', dataType: 'date', optional: true },
    { name: 'suspendedAt', dataType: 'date', optional: true },
    { name: 'suspendedBy', dataType: 'id', optional: true },
  ]
}

export default bgChannelMessage
