import { RxDatabase } from 'rxdb';

import { ModelType } from '../../types/enums.js';
import { ObjectType } from '../../types/Db.js';
import { QueryResult } from '../../types/QueryResult.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';

let _db: RxDatabase | undefined = undefined;

const findById = async <T extends ObjectType = ObjectType>(
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

  const documents = await collection
    .find({
      selector: {
        channelId: {
          $eq: id,
        },
      },
    }).exec();

  if (Array.isArray(documents) && documents.length === 1) {
    return { object: documents[0] };
  }

  return { object: null };
};

export default findById;
