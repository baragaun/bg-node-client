import { RxDatabase } from 'rxdb';

import { ModelType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import logger from '../helpers/logger.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';

let _db: RxDatabase | undefined = undefined;

const findById = async <T extends Model = Model>(
  id: string,
  modelType: ModelType,
): Promise<QueryResult<T>> => {
  const result: QueryResult<T> = {};

  if (!id) {
    result.error = 'invalid-input';
    return result;
  }

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

  try {
    const record = await collection
      .findOne({
        selector: {
          id: {
            $eq: id,
          },
        },
      })
      .exec(false as any);

    return {
      object: record
        ? new (record.constructor as { new(data: any): T })(record.toMutableJSON())
        : null,
    };
  } catch (error) {
    logger.error('findById: failed to find record', { error, id, modelType });
    return { object: null };
  }
};

export default findById;
