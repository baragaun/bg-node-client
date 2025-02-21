import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';
import data from './data.js';

const createChannel = async (
  channel: Partial<Channel>,
): Promise<MutateChannelResult<Channel>> => {
  const newChannel = new Channel(channel);
  data.addChannel(newChannel);

  return {
    operation: MutationType.create,
    object: newChannel
  };
}

export default createChannel
