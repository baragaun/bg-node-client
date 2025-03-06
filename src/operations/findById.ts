import db from '../db/db.js';
import { CachePolicy, ModelType } from '../types/enums.js';
import { Model } from '../types/Model.js';
import { QueryResult } from '../types/QueryResult.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { defaultQueryOptions } from '../helpers/defaults.js';

const findById = async <T extends Model = Model>(
  id: string,
  modelType: ModelType,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<T>> => {
  if (
    queryOptions.cachePolicy === CachePolicy.cache ||
    queryOptions.cachePolicy === CachePolicy.cacheFirst
  ) {
    try {
      const result = await db.findById<T>(id, modelType);

      if (result.object || queryOptions.cachePolicy === CachePolicy.cache) {
        return result;
      }
    } catch (error) {
      return { error: (error as Error).message };
    }
  }

  return { object: null };
};

export default findById;
