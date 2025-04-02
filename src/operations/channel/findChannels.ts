import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findChannels = async (
  filter: ChannelListFilter,
  match: Partial<Channel>,
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<Channel>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findChannels: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findChannels: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local cache
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      if (Array.isArray(filter.ids) && filter.ids.length === 1) {
        return db.findById<Channel>(filter.ids[0], ModelType.Channel);
      }

      const localResult = await db.findAll<Channel>(
        ModelType.Channel,
      );
      let list: Channel[] = localResult.objects;

      if (filter.userId) {
        list = list.filter((channel) => {
          if (!Array.isArray(channel.userIds)) {
            return { error: 'channel-missing-userid' };
          }

          return channel.userIds.includes(filter.userId as string);
        });
      }

      if (match.name) {
        list = list.filter(
          (c) => c.name && c.name.localeCompare(match.name as string) === 0,
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

    const result = await fsdata.channel.findChannels(
      filter,
      match,
      options,
    );

    if (Array.isArray(result.objects) && result.objects.length > 0) {
      for (const channel of result.objects) {
        await db.upsert<Channel>(channel, ModelType.Channel);
      }
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findChannels;
