import { RxDatabase } from 'rxdb';

import { ModelType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';

let _db: RxDatabase | undefined = undefined;

const countByMatch = async <T extends Model = Model>(
  match: Partial<T>,
  modelType: ModelType,
): Promise<QueryResult<number>> => {
  const result: QueryResult<number> = {};

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
  const count = await collection
    .count({
      selector: {
        id: {
          $eq: match.id,
        },
      },
    })
    .exec();

  return { object: count };
};

export default countByMatch;
