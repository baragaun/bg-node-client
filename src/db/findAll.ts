import { RxDatabase } from 'rxdb';

import { ModelType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';

let _db: RxDatabase | undefined = undefined;

const findAll = async <T extends Model = Model>(
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

  const records = await collection.find().exec();

  return {
    objects: records.map(record => new (record.constructor as { new(data: any): T })(record.toMutableJSON())),
  };
};

export default findAll;
