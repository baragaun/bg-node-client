import { MangoQuery } from 'rxdb';

import db from '../db/db.js';
import { CachePolicy, ModelType } from '../enums.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { Model } from '../models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';

const findOne = async <T extends Model = Model>(
  query: MangoQuery<T>,
  modelType: ModelType,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<T>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findOne: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findOne: unauthorized');
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
      const result = await db.findOne<T>(query, modelType);

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
    return { error: (error as Error).message };
  }
};

export default findOne;
