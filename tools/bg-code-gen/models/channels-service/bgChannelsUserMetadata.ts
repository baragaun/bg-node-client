import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelsUserMetadata: TypeGraphqlClass = {
  name: 'BgChannelsUserMetadata',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/bgChannels/types/classes/BgChannelsUserMetadata.ts',
  active: true,
  attributes: [
    { name: 'channelCount', dataType: 'integer', default: '0' },
    { name: 'messagesSentCount', dataType: 'integer', default: '0' },
    { name: 'unseenMessageCount', dataType: 'integer', default: '0' },
    { name: 'unrespondedMessageCount', dataType: 'integer', default: '0' },
    { name: 'invitationsSentCount', dataType: 'integer', default: '0' },
    { name: 'invitationsReceivedCount', dataType: 'integer', default: '0' },
    { name: 'rejectedInvitationCount', dataType: 'integer', default: '0' },
    { name: 'acceptedInvitationCount', dataType: 'integer', default: '0' },
    { name: 'pendingInvitationCount', dataType: 'integer', default: '0' },
    { name: 'updatedAt', dataType: 'Date', optional: true },
  ]
}

export default bgChannelsUserMetadata
