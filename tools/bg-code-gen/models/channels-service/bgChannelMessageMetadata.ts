import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelMessage: TypeGraphqlClass = {
  name: 'BgChannelMessage',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseModelMetadata',
  path: 'src/services/bgChannels/types/classes/BgChannelMessageMetadata.ts',
  active: true,
  attributes: [
    { name: 'senderUserHandle', dataType: 'string', optional: true },
    { name: 'senderFirstName', dataType: 'string', optional: true },
    { name: 'senderLastName', dataType: 'string', optional: true },
    { name: 'senderAvatarUrl', dataType: 'string', optional: true },
  ]
}

export default bgChannelMessage
