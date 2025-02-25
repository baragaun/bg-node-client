import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelInvitation: TypeGraphqlClass = {
  name: 'BgChannelInvitation',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/bgChannels/types/classes/BgChannelInvitation.ts',
  schemaPath: 'src/schema/BgChannelInvitationSchema.ts',
  dbCollectionName: 'channel-invitations',
  active: true,
  attributes: [
    { name: 'channelId', dataType: 'id', optional: true, orNull: true },
    { name: 'recipientId', dataType: 'id' },
    { name: 'channelName', dataType: 'string', optional: true },
    { name: 'channelTopic', dataType: 'string', optional: true },
    { name: 'messageText', dataType: 'string', optional: true },
    { name: 'declineReasonTextId', dataType: 'string', optional: true },
    { name: 'dismissedFromInboxBySenderAt', dataType: 'date', optional: true },
    { name: 'dismissedFromInboxByRecipientAt', dataType: 'date', optional: true },
    { name: 'readByRecipientAt', dataType: 'date', optional: true },
    { name: 'status', dataType: 'ChannelInvitationStatus', default: 'ChannelInvitationStatus.unset' },
    { name: 'suspendedAt', dataType: 'date', optional: true },
    { name: 'suspendedBy', dataType: 'id', optional: true },
    { name: 'userSearchId', dataType: 'id', optional: true },
    { name: 'searchRank', dataType: 'integer', optional: true },
  ]
}

export default bgChannelInvitation
