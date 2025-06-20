import { MangoQuery } from 'rxdb';

import db from '../db/db.js';
import { CachePolicy, ModelType, MutationType } from '../enums.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { Model } from '../models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';

const count = async <T extends Model = Model>(
  query: MangoQuery<T> | null | undefined,
  match: Partial<T> | null | undefined,
  modelType: ModelType,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<number>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('count: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('count: unauthorized');
      return { error: 'unauthorized' };
    }

    const isOnline = libData.isOnline();
    const allowNetwork = isOnline && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (
      (
        queryOptions.cachePolicy === CachePolicy.cache ||
        queryOptions.cachePolicy === CachePolicy.cacheFirst ||
        libData.isOffline()
      ) &&
      db.isModelTypeSupported(modelType)
    ) {
      const result = query
        ? await db.count<T>(query, modelType)
        : await db.countByMatch<T>(match, modelType);

      if (
        !result.error &&
        (queryOptions.cachePolicy === CachePolicy.cache || libData.isOffline()) &&
        result.object
      ) {
        return result;
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    // todo: get it from the network

    return { object: null };
  } catch (error) {
    return { operation: MutationType.delete, error: (error as Error).message };
  }
};

export default count;
