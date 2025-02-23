import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelParticipantMetadata: TypeGraphqlClass = {
  name: 'BgChannelParticipantMetadata',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/bgChannels/types/classes/BgChannelParticipantMetadata.ts',
  active: true,
  attributes: [
    { name: 'userHandle', dataType: 'string', optional: true },
    { name: 'nickname', dataType: 'string', optional: true },
    { name: 'firstName', dataType: 'string', optional: true },
    { name: 'lastName', dataType: 'string', optional: true },
    { name: 'avatarUrl', dataType: 'string', optional: true },
    { name: 'sentMessageCount', dataType: 'integer', optional: true },
    { name: 'unseenMessageCount', dataType: 'integer', optional: true },
    { name: 'unseenSystemMessageCount', dataType: 'integer', optional: true },
  ],
}

export default bgChannelParticipantMetadata
