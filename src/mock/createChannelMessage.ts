import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';
import data from './data.js';

const createChannelMessage = async (
  channelMessage: Partial<ChannelMessage>,
): Promise<MutateChannelResult<ChannelMessage>> => {
  const channel = data.findChannel(channelMessage.channelId as string)

  if (!channel) {
    return {
      operation: MutationType.create,
      error: 'channel-not-found',
    }
  }

  const message = new ChannelMessage(channelMessage);
  channel.messages.push(message);

  return {
    operation: MutationType.create,
    object: message,
  };
}

export default createChannelMessage
