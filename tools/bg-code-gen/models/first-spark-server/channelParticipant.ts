import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const channelParticipant: TypeGraphqlClass = {
  name: 'ChannelParticipant',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BgChannelParticipant',
  path: 'src/services/channels/types/classes/ChannelParticipant.ts',
  schemaPath: 'src/models/schema/channelParticipantSchema.ts',
  dbCollectionName: 'channel-participants',
  active: true,
  attributes: [
  ]
}

export default channelParticipant
