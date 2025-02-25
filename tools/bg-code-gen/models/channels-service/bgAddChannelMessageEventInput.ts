import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgAddChannelMessageEventInput: TypeGraphqlClass = {
  name: 'BgAddChannelMessageEventInput',
  graphqlType: GraphqlType.InputType,
  path: 'src/services/bgChannels/types/classes/BgAddChannelMessageEventInput.ts',
  active: true,
  attributes: [
    { name: 'channelId', dataType: 'id', optional: false, default: '\'\'' },
    { name: 'messageIds', dataType: 'id[]', optional: false, default: '[]' },
    { name: 'recipientId', dataType: 'id', optional: false, default: '\'\'' },
    {
      name: 'event',
      dataType: 'ChannelMessageEvent',
      addOptionalDecorator: true,
      default: 'ChannelMessageEvent.unset',
      comment: '// todo: For some reason a validation error is thrown without the @IsOptional(), even when a value for `event` is supplied.',
    },
  ]
}

export default bgAddChannelMessageEventInput
