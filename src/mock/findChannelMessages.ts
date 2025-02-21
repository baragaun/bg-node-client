import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ChannelMessageFilter } from '../types/ChannelMessageFilter.js';
import { ModelType } from '../types/enums';
import store from './store.js';

const findChannelMessages = async (
  filter: ChannelMessageFilter,
  skip: number,
  limit: number,
): Promise<ChannelMessage[]> => {
  if (filter.id) {
    const message = store.findObjectById<ChannelMessage>(filter.id, ModelType.ChannelMessage)
    return message ? [message] : [];
  }

  const messages = store.getObjects<ChannelMessage>(ModelType.ChannelMessage);
  let list: ChannelMessage[] = messages;

  if (!filter.channelId) {
    list = messages.filter(m => m.channelId === filter.channelId);
  }

  if (skip > 0 && limit > 0) {
    list = list.slice(skip, skip + limit);
  }

  return list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export default findChannelMessages
