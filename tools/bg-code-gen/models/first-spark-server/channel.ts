import { TypeGraphqlClass } from '../../../../types.js'
import { GraphqlType } from '../../../../enums.js'

const channel: TypeGraphqlClass = {
  name: 'Channel',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BgChannel',
  path: 'src/services/channels/types/classes/Channel.ts',
  schemaPath: 'src/models/schema/channelSchema.ts',
  dbCollectionName: 'channels',
  active: true,
  attributes: [
    { name: 'assumedMentorId', dataType: 'id', optional: true },
    { name: 'mm2Id', dataType: 'string', optional: true, description: 'This attribute is only used by the MM2 synchronizer.' },
    { name: 'syncedWithMm2At', dataType: 'date', optional: true, description: 'This attribute is only used by the MM2 synchronizer.' },
  ]
}

export default channel
