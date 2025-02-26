import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannel: TypeGraphqlClass = {
  name: 'BgChannel',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/bgChannels/types/classes/BgChannel.ts',
  schemaPath: 'src/schema/bgChannelSchema.ts',
  dbCollectionName: 'channels',
  active: true,
  attributes: [
    { name: 'name', dataType: 'string', optional: true },
    { name: 'topic', dataType: 'string', optional: true },
    { name: 'description', dataType: 'string', optional: true },
    { name: 'tags', dataType: 'string[]', optional: true },
    { name: 'channelType', dataType: 'ChannelType', default: 'ChannelType.unset' },
    { name: 'statuses', dataType: 'BgChannelStatus[]', optional: true },
    { name: 'userIds', dataType: 'id[]', optional: true },
    { name: 'metadata', dataType: 'ChannelMetadata', optional: true },
    { name: 'pausedAt', dataType: 'date', optional: true },
    { name: 'pausedBy', dataType: 'id', optional: true },
    { name: 'suspendedAt', dataType: 'date', optional: true },
    { name: 'suspendedBy', dataType: 'id', optional: true },
    { name: 'lockedAt', dataType: 'date', optional: true },
    { name: 'lockedBy', dataType: 'id', optional: true },
    { name: 'archivedAt', dataType: 'date', optional: true },
    { name: 'archivedBy', dataType: 'id', optional: true },
  ]
}

export default bgChannel
