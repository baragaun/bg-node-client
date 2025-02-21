import { Channel } from '../types/models/Channel.js'
import { ChannelFilter } from '../types/ChannelFilter.js';

const findChannels = async (
  filter: ChannelFilter,
  skip: number,
  limit: number,
): Promise<Channel[]> => {
  // todo implement
  return []
}

export default findChannels
