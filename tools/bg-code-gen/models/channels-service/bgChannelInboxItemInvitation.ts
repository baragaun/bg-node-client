import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelInboxItemInvitation: TypeGraphqlClass = {
  name: 'BgChannelInboxItemInvitation',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/bgChannels/types/classes/bgChannelInboxItemInvitation.ts',
  active: true,
  attributes: [
    { name: 'id', dataType: 'id' },
    { name: 'channelId', dataType: 'id', optional: true },
    { name: 'messageText', dataType: 'string', optional: true },
    { name: 'readByRecipientAt', dataType: 'Date', optional: true },
    { name: 'status', dataType: 'ChannelInvitationStatus', default: 'ChannelInvitationStatus.unset' },
    { name: 'createdAt', dataType: 'Date', default: 'new Date()' },
    { name: 'createdBy', dataType: 'id', optional: true },
    { name: 'recipientId', dataType: 'id', optional: true },
  ]
}

export default bgChannelInboxItemInvitation
