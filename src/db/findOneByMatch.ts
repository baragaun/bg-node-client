import { RxDatabase } from 'rxdb';

import { ModelType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';

let _db: RxDatabase | undefined = undefined;

const findOneByMatch = async <T extends Model = Model>(
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

  // todo: implement
  const record = await collection
    .findOne({
      selector: {
        id: {
          $eq: match.id,
        },
      },
    })
    .exec();

  return { object: record ? new (record.constructor as { new(data: any): T })(record.toMutableJSON()) : null };
};

export default findOneByMatch;
