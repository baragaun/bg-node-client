import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const channelInvitation: TypeGraphqlClass = {
  name: 'ChannelInvitation',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BgChannelInvitation',
  path: 'src/services/channels/types/classes/ChannelInvitation.ts',
  schemaPath: 'src/models/schema/channelInvitationSchema.ts',
  dbCollectionName: 'channel-invitations',
  active: true,
  attributes: [
    { name: 'mm2ConversationId', dataType: 'string', optional: true, description: 'This attribute is only used by the MM2 synchronizer.' },
    { name: 'mm2Id', dataType: 'string', optional: true, description: 'This attribute is only used by the MM2 synchronizer. Mm2 message ID.' },
    { name: 'syncedWithMm2At', dataType: 'date', optional: true, description: 'This attribute is only used by the MM2 synchronizer.' },
  ]
}

export default channelInvitation
