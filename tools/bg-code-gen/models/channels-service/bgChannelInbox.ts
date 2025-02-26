import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelInbox: TypeGraphqlClass = {
  name: 'BgChannelInbox',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/bgChannels/types/classes/BgChannelInbox.ts',
  schemaPath: 'src/schema/bgChannelInboxSchema.ts',
  dbCollectionName: 'channel-inboxes',
  active: true,
  attributes: [
    { name: 'userId', dataType: 'id' },
    { name: 'unseenMessages', dataType: 'ChannelInboxItemMessage[]', optional: true },
    { name: 'unseenArchivedMessages', dataType: 'ChannelInboxItemMessage[]', optional: true },
    { name: 'latestMessages', dataType: 'ChannelInboxItemMessage[]', optional: true },
    { name: 'latestArchivedMessages', dataType: 'ChannelInboxItemMessage[]', optional: true },
    { name: 'pendingInvitations', dataType: 'ChannelInboxItemInvitation[]', optional: true },
    { name: 'invitations', dataType: 'ChannelInboxItemInvitation[]', optional: true },
    { name: 'updatedAt', dataType: 'Date', optional: true },
    { name: 'updatedBy', dataType: 'id', optional: true },
  ]
}

export default bgChannelInbox
