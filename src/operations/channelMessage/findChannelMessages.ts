import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { ChannelMessageInput } from '../../fsdata/gql/graphql.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { ChannelMessageListFilter } from '../../models/ChannelMessageListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findChannelMessages = async (
  filter: ChannelMessageListFilter | null | undefined,
  match: Partial<ChannelMessage> | null | undefined,
  selector: MangoQueryTypes<ChannelMessage> | null | undefined,
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
      if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
        return db.findById<ChannelMessage>(filter.ids[0], ModelType.ChannelMessage);
      }

      const localQuery = buildQuery<ChannelMessage, ChannelMessageListFilter>(
        ModelType.Channel,
        filter,
        match,
        selector,
        options,
      );

      const localResult = await db.find<ChannelMessage>(localQuery, ModelType.ChannelMessage);

      if ((!localResult.error && localResult.objects) || !allowNetwork) {
        return localResult;
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.channelMessage.findChannelMessages(
      filter,
      match as unknown as ChannelMessageInput,
      options,
    );

    if (Array.isArray(result.objects) && result.objects.length > 0) {
      for (const channelMessage of result.objects) {
        await db.upsert<ChannelMessage>(channelMessage, ModelType.ChannelMessage);
      }
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findChannelMessages;
