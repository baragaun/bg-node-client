import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelInvitationInput: TypeGraphqlClass = {
  name: 'BgChannelInvitationInput',
  graphqlType: GraphqlType.InputType,
  extends: 'BaseModelInput',
  path: 'src/services/bgChannels/types/classes/BgChannelInvitationInput.ts',
  active: true,
  attributes: [
    { name: 'channelId', dataType: 'id', orNull: true },
    { name: 'recipientId', dataType: 'id' },
    { name: 'channelName', dataType: 'string' },
    { name: 'channelTopic', dataType: 'string' },
    { name: 'messageText', dataType: 'string' },
    { name: 'declineReasonTextId', dataType: 'string' },
    { name: 'dismissedFromInboxBySenderAt', dataType: 'date' },
    { name: 'dismissedFromInboxByRecipientAt', dataType: 'date' },
    { name: 'readByRecipientAt', dataType: 'date' },
    { name: 'status', dataType: 'ChannelInvitationStatus' },
    { name: 'suspendedAt', dataType: 'date' },
    { name: 'suspendedBy', dataType: 'id' },
    { name: 'userSearchId', dataType: 'id' },
    { name: 'searchRank', dataType: 'integer' },
  ]
}

export default bgChannelInvitationInput
