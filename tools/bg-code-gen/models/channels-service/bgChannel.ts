import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const bgChannel: TypeGraphqlClass = {
  name: 'BgChannel',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModel',
  path: 'src/services/bgChannels/types/classes/BgChannel.ts',
  schemaPath: 'src/models/schema/bgChannelSchema.ts',
  dbCollectionName: 'channels',
  active: true,
  attributes: [
    {
      name: 'name',
      dataType: 'string',
      optional: true,
    },
    {
      name: 'topic',
      dataType: 'string',
      optional: true,
    },
    {
      name: 'description',
      dataType: 'string',
      optional: true,
    },
    {
      name: 'tags',
      dataType: 'string[]',
      optional: true,
    },
    {
      name: 'channelType',
      dataType: 'ChannelType',
      default: 'ChannelType.unset',
      schema: { type: 'string' },
    },
    {
      name: 'participants',
      dataType: 'ChannelParticipant[]',
      optional: true,
      schema: {
        type: 'array',
        arrayItemType: 'object',
        arrayItemObject: 'BgChannelParticipant',
      },
    },
    {
      name: 'statuses',
      dataType: 'BgChannelStatus[]',
      optional: true,
      schema: {
        type: 'array',
        arrayItemType: 'object',
        arrayItemObject: 'BgChannelStatus',
      },
    },
    {
      name: 'userIds',
      dataType: 'id[]',
      optional: true,
      schema: {
        type: 'array',
        arrayItemType: 'string',
      },
    },
    {
      name: 'metadata',
      dataType: 'ChannelMetadata',
      optional: true,
      schema: {
        type: 'object',
        modelType: 'BgChannelMetadata',
      }
    },
    {
      name: 'pausedAt',
      dataType: 'date',
      optional: true,
    },
    {
      name: 'pausedBy',
      dataType: 'id',
      optional: true,
    },
    {
      name: 'suspendedAt',
      dataType: 'date',
      optional: true,
    },
    {
      name: 'suspendedBy',
      dataType: 'id',
      optional: true,
    },
    {
      name: 'lockedAt',
      dataType: 'date',
      optional: true,
    },
    {
      name: 'lockedBy',
      dataType: 'id',
      optional: true,
    },
    {
      name: 'archivedAt',
      dataType: 'date',
      optional: true,
    },
    {
      name: 'archivedBy',
      dataType: 'id',
      optional: true,
    },
  ]
}

export default bgChannel
