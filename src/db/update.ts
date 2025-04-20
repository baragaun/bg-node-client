import { RxDatabase } from 'rxdb';

import { ModelType, MutationType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { getModelTypeFromObject } from '../helpers/helpers.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';

let _db: RxDatabase | undefined = undefined;

const update = async <T extends Model = Model>(
  changes: Partial<T>,
  modelType?: ModelType,
): Promise<QueryResult<T>> => {
  const result: QueryResult<T> = { operation: MutationType.update };
  if (!_db) {
    _db = db.getDb();

    if (!_db) {
      result.error = 'db-unavailable';
      return result;
    }
  }

  if (!modelType) {
    modelType = modelType || getModelTypeFromObject(changes as T);
  }

  const collection = getCollectionFromModelType(modelType);

  if (!collection) {
    result.error = 'collection-not-found';
    return result;
  }

  const obj = await collection
    .findOne({
      selector: {
        id: {
          $eq: changes.id,
        },
      },
    })
    .exec();

  if (!obj) {
    result.error = 'not-found';
    return result;
  }

  try {
    const doc = await obj.patch(changes);
    result.object = doc.toMutableJSON() as T;

    return result;
  } catch (error) {
    // see: https://rxdb.info/rx-document.html#prevent-conflicts-with-the-incremental-methods
    console.error('Failed to patch object from collection', { changes, modelType, error });
    try {
      const doc = await obj.incrementalPatch(changes);
      result.object = doc.toMutableJSON() as T;

      return result;
    } catch (error2) {
      // fallback to incremental patch if the first patch fails
      console.error('Failed to incrementally patch object',
        { changes, modelType, error: error2 });
      result.error = 'remove-failed';
      return result;
    }
  }
};

export default update;
