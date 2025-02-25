import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelMessageInput: TypeGraphqlClass = {
  name: 'BgChannelMessageInput',
  graphqlType: GraphqlType.InputType,
  extends: 'BaseModelInput',
  path: 'src/services/bgChannels/types/classes/BgChannelMessageInput.ts',
  active: true,
  attributes: [
    { name: 'channelId', dataType: 'id' },
    { name: 'replyToMessageId', dataType: 'id' },
    { name: 'channelMessageType', dataType: 'ChannelMessageType' },
    { name: 'messageText', dataType: 'string' },
    { name: 'statuses', dataType: 'ChannelMessageStatusInput[]' },
    { name: 'editedAt', dataType: 'date', optional: true },
    { name: 'suspendedAt', dataType: 'date', optional: true },
    { name: 'suspendedBy', dataType: 'id', optional: true },
  ]
}

export default bgChannelMessageInput
