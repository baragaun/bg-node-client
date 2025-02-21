import { ChannelMessage } from '../types/models/ChannelMessage.js'
import { ChannelMessageFilter } from '../types/ChannelMessageFilter.js';

const findChannelMessages = async (
  filter: ChannelMessageFilter,
  skip: number,
  limit: number,
): Promise<ChannelMessage[]> => {
  // todo: implement
  return []
}

export default findChannelMessages
