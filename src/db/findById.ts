import { RxDatabase } from 'rxdb';

import { ModelType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { Model } from '../types/models/Model.js';
import { QueryResult } from '../types/QueryResult.js';

let _db: RxDatabase | undefined = undefined;

const findById = async <T extends Model = Model>(
  id: string,
  modelType: ModelType,
): Promise<QueryResult<T>> => {
  const result: QueryResult<T> = {};

  if (!_db) {
    _db = db.getDb();

    if (!_db) {
      result.error = 'db-unavailable';
      return result;
    }
  }

  const collection = getCollectionFromModelType(modelType);

  if (!collection) {
    result.error = 'collection-not-found';
    return result;
  }

  const record = await collection
    .findOne({
      selector: {
        id: {
          $eq: id,
        },
      },
    })
    .exec();

  return {
    object: record ? record.toMutableJSON() : null,
  };
};

export default findById;
