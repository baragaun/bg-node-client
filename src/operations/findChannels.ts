import { Channel } from '../types/models/Channel.js';
import { ChannelListFilter } from '../types/models/ChannelListFilter.js';
import { ModelType } from '../types/enums.js';
import { QueryResult } from '../types/QueryResult.js';
import db from '../db/db.js';

const findChannels = async (
  filter: ChannelListFilter,
  match: Partial<Channel>,
  skip: number,
  limit: number,
): Promise<QueryResult<Channel>> => {
  try {
    if (Array.isArray(filter.ids) && filter.ids.length === 1) {
      return db.findById<Channel>(filter.ids[0], ModelType.Channel);
    }

    const { objects: channels } = await db.findAll<Channel>(ModelType.Channel);
    let list: Channel[] = channels;

    if (filter.userId) {
      list = channels.filter((channel) => {
        if (!Array.isArray(channel.userIds)) {
          return { error: 'channel-missing-userid' };
        }

        return channel.userIds.includes(filter.userId as string);
      });
    }

    if (match.name) {
      list = channels.filter((c) => c.name && c.name.localeCompare(match.name as string) === 0);
    }

    if (skip > 0 && limit > 0) {
      list = list.slice(skip, skip + limit);
    }

    return {
      objects: list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    };
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findChannels;
