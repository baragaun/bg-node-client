import { Channel } from '../types/models/Channel.js'
import { ChannelFilter } from '../types/ChannelFilter.js';
import { ModelType } from '../types/enums';
import store from './store.js';

const findChannels = async (
  filter: ChannelFilter,
  skip: number,
  limit: number,
): Promise<Channel[]> => {
  if (filter.id) {
    const channel = store.findObjectById<Channel>(filter.id, ModelType.Channel)
    return channel ? [channel] : [];
  }

  const channels = store.getObjects<Channel>(ModelType.Channel);
  let list: Channel[] = channels;

  if (filter.userId) {
    list = channels.filter((channel) => {
      if (!Array.isArray(channel.userIds)) {
        return false;
      }

      return channel.userIds.includes(filter.userId as string);
    });
  }

  if (filter.name) {
    list = channels.filter(c => c.name && c.name.localeCompare(filter.name as string) === 0);
  }

  if (skip > 0 && limit > 0) {
    list = list.slice(skip, skip + limit);
  }

  return list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export default findChannels
