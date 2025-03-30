import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { ChannelMessageListFilter } from '../../models/ChannelMessageListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findChannelMessages = async (
  filter: ChannelMessageListFilter,
  match: Partial<ChannelMessage>,
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<ChannelMessage>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findChannelMessages: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findChannelMessages: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local cache
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      if (Array.isArray(filter.ids) && filter.ids.length === 1) {
        return db.findById<ChannelMessage>(
          filter.ids[0],
          ModelType.ChannelMessage,
        );
      }

      // todo: apply filter
      const localResult = await db.findAll<ChannelMessage>(
        ModelType.ChannelMessage,
      );
      let list: ChannelMessage[] = localResult.objects;

      if (filter.channelId || match.channelId) {
        list = list.filter(
          (m) => m.channelId === filter.channelId || match.channelId,
        );
      }

      if (options.skip > 0 && options.limit > 0) {
        list = list.slice(options.skip, options.skip + options.limit);
      }

      if ((!localResult.error && list) || !allowNetwork) {
        return {
          objects: list.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          ),
        };
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    return { error: 'not-implemented' };
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findChannelMessages;
