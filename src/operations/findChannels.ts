import { Channel } from '../types/models/Channel.js'
import { ChannelFilter } from '../types/ChannelFilter.js';
import { ModelType } from '../types/enums.js';
import { QueryResult } from '../types/QueryResult.js';
import db from '../db/db.js';

const findChannels = async (
  filter: ChannelFilter,
  skip: number,
  limit: number,
): Promise<QueryResult<Channel>> => {
  try {
    if (filter.id) {
      const channel = await db.findById<Channel>(
        filter.id,
        ModelType.Channel,
      );

      return { object: channel };
    }

    const channels = await db.findAll<Channel>(ModelType.Channel);
    let list: Channel[] = channels;

    if (filter.userId) {
      list = channels.filter((channel) => {
        if (!Array.isArray(channel.userIds)) {
          return { error: 'channel-missing-userid' };
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

    return {
      objects: list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()),
    }
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export default findChannels
