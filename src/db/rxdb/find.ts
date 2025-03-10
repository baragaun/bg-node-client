import { RxDatabase } from 'rxdb';

import { ModelType } from '../../enums.js';
import { Model } from '../../types/models/Model.js';
import { QueryResult } from '../../types/QueryResult.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';

let _db: RxDatabase | undefined = undefined;

const find = async <T extends Model = Model>(
  match: Partial<T>,
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

  // todo: implement based on model
  const records = await collection
    .find({
      selector: {
        id: {
          $eq: match.id,
        },
      },
    })
    .exec();

  return {
    objects: records.map((r) => r.toMutableJSON()),
  };
};

export default find;
