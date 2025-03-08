import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { ChannelMessageListFilter } from '../../types/models/ChannelMessageListFilter.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findChannelMessages = async (
  filter: ChannelMessageListFilter,
  match: Partial<ChannelMessage>,
  skip: number,
  limit: number,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<ChannelMessage>> => {
  if (
    queryOptions.cachePolicy === CachePolicy.cache ||
    queryOptions.cachePolicy === CachePolicy.cacheFirst
  ) {
    try {
      if (Array.isArray(filter.ids) && filter.ids.length === 1) {
        return db.findById<ChannelMessage>(filter.ids[0], ModelType.ChannelMessage);
      }

      const { objects: messages } = await db.findAll<ChannelMessage>(ModelType.ChannelMessage);
      let list: ChannelMessage[] = messages;

      if (filter.channelId || match.channelId) {
        list = messages.filter((m) => m.channelId === filter.channelId || match.channelId);
      }

      if (skip > 0 && limit > 0) {
        list = list.slice(skip, skip + limit);
      }

      return {
        objects: list.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      };
    } catch (error) {
      return { error: (error as Error).message };
    }
  }

  return { objects: null };
};

export default findChannelMessages;
