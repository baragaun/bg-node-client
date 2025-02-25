import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelMetadata: TypeGraphqlClass = {
  name: 'BgChannelMetadata',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModelMetadata',
  path: 'src/services/bgChannels/types/classes/BgChannelMetadata.ts',
  active: true,
  attributes: [
    {
      name: 'unseenMessageInfo',
      dataType: 'BgLatestUnseenChannelMessageInfo[]',
      optional: true,
      schema: {
        type: 'array',
        arrayItemType: 'object',
        arrayItemObject: 'BgLatestUnseenChannelMessageInfo',
      }
    },
  ]
}

export default bgChannelMetadata
