import db from '../db/db.js';
import { CachePolicy, ModelType } from '../enums.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import { Model } from '../types/models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';

const findOne = async <T extends Model = Model>(
  match: Partial<T>,
  modelType: ModelType,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<T>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  if (
    queryOptions.cachePolicy === CachePolicy.cache ||
    queryOptions.cachePolicy === CachePolicy.cacheFirst
  ) {
    try {
      const result = await db.findOne<T>(match, modelType);

      if (result.object || queryOptions.cachePolicy === CachePolicy.cache) {
        return result;
      }
    } catch (error) {
      return { error: (error as Error).message };
    }
  }

  return { object: null };
};

export default findOne;
