import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findMyChannels = async (
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<Channel>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findMyChannels: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findMyChannels: unauthorized');
      return { error: 'unauthorized' };
    }

    const myUserId = libData.clientInfoStore().myUserId;
    if (!myUserId) {
      logger.error('findMyChannels: myUserId not set');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      const localQueryForChannels = buildQuery<Channel, ChannelListFilter>(
        ModelType.Channel,
        undefined,
        undefined,
        { userIds: { $in: [myUserId] } },
        options,
      );

      const localResultForChannels = await db.find<Channel>(
        localQueryForChannels,
        ModelType.Channel,
      );

      if (!localResultForChannels.error && Array.isArray(localResultForChannels.objects)) {
        return localResultForChannels;
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.channel.findMyChannels(options);

    if (result.error) {
      logger.error('findMyChannels: error from fsdata', { error: result.error });
      return { error: result.error };
    }

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

export default findMyChannels;
