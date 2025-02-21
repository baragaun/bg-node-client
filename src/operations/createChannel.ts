import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';

const createChannel = async (
  channel: Partial<Channel>,
): Promise<MutateChannelResult<Channel>> => {
  const newChannel = new Channel(channel);

  // todo: implement

  return {
    operation: MutationType.create,
    object: newChannel
  };
}

export default createChannel
