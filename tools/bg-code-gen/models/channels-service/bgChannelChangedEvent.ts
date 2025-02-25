import { TypeGraphqlClass } from '../../../../../types.js'
import { GraphqlType } from '../../../../../enums.js'

const bgChannelChangedEvent: TypeGraphqlClass = {
  name: 'BgChannelChangedEvent',
  graphqlType: GraphqlType.ObjectType,
  extends: 'BaseAppEventData',
  path: 'src/services/bgChannels/types/classes/BgChannelChangedEvent.ts',
  dbCollectionName: 'channels',
  active: true,
  attributes: [
    { name: 'channelId', dataType: 'id', optional: true },
    { name: 'invitationId', dataType: 'id', optional: true },
    { name: 'messageId', dataType: 'id', optional: true },
    { name: 'participantId', dataType: 'id', optional: true },
    { name: 'eventType', dataType: 'ChannelChangedEventType', default: '\'\' as ChannelChangedEventType' },
    { name: 'requestId', dataType: 'id', optional: true },
  ]
}

export default bgChannelChangedEvent
