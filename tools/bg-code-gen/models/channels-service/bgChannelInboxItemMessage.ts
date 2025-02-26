import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelInboxItemMessage: TypeGraphqlClass = {
  name: 'BgChannelInboxItemMessage',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/bgChannels/types/classes/BgChannelInboxItemMessage.ts',
  active: true,
  attributes: [
    { name: 'id', dataType: 'id' },
    { name: 'channelId', dataType: 'id' },
    { name: 'replyToMessageId', dataType: 'id', optional: true },
    { name: 'channelMessageType', dataType: 'ChannelMessageType', optional: true },
    { name: 'messageText', dataType: 'string', optional: true },
    { name: 'senderUserHandle', dataType: 'string', optional: true },
    { name: 'senderFirstName', dataType: 'string', optional: true },
    { name: 'senderLastName', dataType: 'string', optional: true },
    { name: 'senderAvatarUrl', dataType: 'string', optional: true },
    { name: 'seenAt', dataType: 'Date', optional: true },
    { name: 'isArchived', dataType: 'boolean', optional: true },
    { name: 'createdAt', dataType: 'Date', default: 'new Date()' },
    { name: 'createdBy', dataType: 'id', optional: true },
    { name: 'updatedAt', dataType: 'Date', optional: true },
    { name: 'updatedBy', dataType: 'id', optional: true },
    { name: 'userIds', dataType: 'id[]', optional: true },
  ]
}

export default bgChannelInboxItemMessage
