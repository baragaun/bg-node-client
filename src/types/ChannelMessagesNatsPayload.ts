import { BaseNatsPayload } from './payloadTypes.js';
import { ChannelMessage } from '../models/ChannelMessage.js';

export interface ChannelMessagesNatsPayload extends BaseNatsPayload {
  channelMessageId: string;
  channelMessage?: ChannelMessage;
  changeType: 'created' | 'updated' | 'deleted';
}
