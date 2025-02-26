import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelParticipant: TypeGraphqlClass = {
  name: 'BgChannelParticipant',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/bgChannels/types/classes/BgChannelParticipant.ts',
  schemaPath: 'src/schema/bgChannelParticipantSchema.ts',
  dbCollectionName: 'channelParticipants',
  active: true,
  attributes: [
    { name: 'channelId', dataType: 'id' },
    { name: 'userId', dataType: 'id' },
    { name: 'invitedBy', dataType: 'id', optional: true },
    { name: 'channelName', dataType: 'string', optional: true },
    { name: 'role', dataType: 'ChannelParticipantRole', optional: true },
    { name: 'suspendedAt', dataType: 'date', optional: true },
    { name: 'suspendedBy', dataType: 'id', optional: true },
  ]
}

export default bgChannelParticipant
