import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';

const createChannelMessage = async (
  channelMessage: Partial<ChannelMessage>,
): Promise<MutateChannelResult<ChannelMessage>> => {
  // todo: implement
  return {
    operation: MutationType.create,
    object: channelMessage as ChannelMessage
  };
}

export default createChannelMessage
