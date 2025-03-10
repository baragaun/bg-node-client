import db from '../db/db.js';
import { CachePolicy, ModelType } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import { defaultQueryOptions } from '../helpers/defaults.js';
import { Model } from '../types/models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';

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

  const object = await fsdata.findById<T>(id, modelType);

  if (object) {
    // todo: What if the object does not exist anymore. How do we delete it from the local store?
    // Update local cache:
    await db.replace<T>(object, modelType);
  }

  return { object };
};

export default findById;
