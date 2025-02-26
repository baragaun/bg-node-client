import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelParticipantMetadata: TypeGraphqlClass = {
  name: 'BgChannelParticipantMetadata',
  graphqlType: GraphqlType.ObjectType,
  path: 'src/services/bgChannels/types/classes/BgChannelParticipantMetadata.ts',
  active: true,
  attributes: [
    { name: 'userHandle', dataType: 'string', optional: true },
    { name: 'firstName', dataType: 'string', optional: true },
    { name: 'lastName', dataType: 'string', optional: true },
    { name: 'avatarUrl', dataType: 'string', optional: true },
  ]
}

export default bgChannelParticipantMetadata
