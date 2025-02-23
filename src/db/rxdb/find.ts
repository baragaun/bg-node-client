import { RxDatabase } from 'rxdb';

import { ModelType } from '../../types/enums.js';
import { ObjectType } from '../../types/Db.js';
import { QueryResult } from '../../types/QueryResult.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';

let _db: RxDatabase | undefined = undefined;

const find = async <T extends ObjectType = ObjectType>(
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
  const foundDocuments = await collection.find({
    selector: {
      id: {
        $eq: match.id,
      },
    },
  }).exec();

  return { objects: foundDocuments };
};

export default find;
