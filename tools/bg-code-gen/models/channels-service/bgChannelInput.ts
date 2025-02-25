import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelInput: TypeGraphqlClass = {
  name: 'BgChannelInput',
  graphqlType: GraphqlType.InputType,
  extends: 'BaseModelInput',
  path: 'src/services/bgChannels/types/classes/BgChannelInput.ts',
  active: true,
  attributes: [
    { name: 'name', dataType: 'string' },
    { name: 'topic', dataType: 'string' },
    { name: 'description', dataType: 'string' },
    { name: 'tags', dataType: 'string[]' },
    { name: 'channelType', dataType: 'ChannelType' },
    { name: 'statuses', dataType: 'BgChannelStatusInput[]' },
    { name: 'userIds', dataType: 'id[]' },
    { name: 'inviteUserIds', dataType: 'id[]' },
    { name: 'pausedAt', dataType: 'date' },
    { name: 'pausedBy', dataType: 'id' },
    { name: 'suspendedAt', dataType: 'date', optional: true },
    { name: 'suspendedBy', dataType: 'id', optional: true },
    { name: 'archivedAt', dataType: 'date' },
    { name: 'archivedBy', dataType: 'id' },
  ]
}

export default bgChannelInput
