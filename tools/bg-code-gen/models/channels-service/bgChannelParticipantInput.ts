import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannelParticipantInput: TypeGraphqlClass = {
  name: 'BgChannelParticipantInput',
  graphqlType: GraphqlType.InputType,
  extends: 'BaseModelInput',
  path: 'src/services/bgChannels/types/classes/BgChannelParticipantInput.ts',
  active: true,
  attributes: [
    { name: 'channelId', dataType: 'id' },
    { name: 'userId', dataType: 'id' },
    { name: 'invitedBy', dataType: 'id' },
    { name: 'channelName', dataType: 'string' },
    { name: 'role', dataType: 'ChannelParticipantRole' },
    { name: 'suspendedAt', dataType: 'date', optional: true },
    { name: 'suspendedBy', dataType: 'id', optional: true },
  ]
}

export default bgChannelParticipantInput
