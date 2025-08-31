import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Brand } from '../../models/Brand.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findBrandById = async (
  id: string,
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<Brand>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findBrandById: unavailable');
      return { error: 'unavailable' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    const loadFromLocal = queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork;

    if (loadFromLocal) {
      const cachedObject = libData.getObjectFromCachedList<Brand>(ModelType.Brand, id);

      if (cachedObject) {
        return { object: cachedObject };
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    return fsdata.findById<Brand>(
      id,
      ModelType.Brand,
      undefined,
      options,
    );
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findBrandById;
