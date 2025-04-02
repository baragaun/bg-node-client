import db from '../db/db.js';
import { CachePolicy, ModelType } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { Model } from '../models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';

const findById = async <T extends Model = Model>(
  id: string,
  modelType: ModelType,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<T>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findById: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findById: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local cache
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      const result = await db.findById<T>(id, modelType);

      if ((result.object && !result.error) || !allowNetwork) {
        return result;
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const response = await fsdata.findById<T>(id, modelType);

    if (response.error) {
      logger.error('findById: fsdata.findById failed', { error: response.error });
      return response;
    } else if (response.object) {
      // todo: What if the object does not exist anymore. How do we delete it from the local store?
      // Update local cache:
      await db.replace<T>(response.object, modelType);
    }

  return response;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findById;
