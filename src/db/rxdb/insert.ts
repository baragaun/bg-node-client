import { RxDatabase } from 'rxdb';

import { getModelTypeFromObject } from '../../helpers/helpers.js';
import { MutationResult } from '../../types/MutationResult.js';
import { MutationType } from '../../types/enums.js';
import { ObjectType } from '../../types/Db.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';

let _db: RxDatabase | undefined = undefined;

const insert = async <T extends ObjectType = ObjectType>(
  obj: T,
): Promise<MutationResult<T>> => {
  const result: MutationResult<T> = { operation: MutationType.create};

  if (!_db) {
    _db = db.getDb();

    if (!_db) {
      result.error = 'db-unavailable';
      return result;
    }
  }

  const modelType = getModelTypeFromObject(obj);

  if (!modelType) {
    result.error = 'model-type-not-identified';
    return result;
  }

  const collection = getCollectionFromModelType(modelType);

  if (!collection) {
    result.error = 'collection-not-found';
    return result;
  }

  if (!obj.id) {
    obj.id = crypto.randomUUID();
  }

  result.object = await collection.insert(obj);

  return result;
};

export default insert;
