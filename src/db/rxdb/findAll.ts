import { RxDatabase } from 'rxdb';

import { ModelType } from '../../types/enums.js';
import { ObjectType } from '../../types/Db.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';

let _db: RxDatabase | undefined = undefined;

const findAll = async <T extends ObjectType = ObjectType>(
  modelType: ModelType,
): Promise<T[]> => {
  if (!_db) {
    _db = db.getDb();

    if (!_db) {
      return [];
    }
  }

  const collection = getCollectionFromModelType(modelType);

  if (!collection) {
    throw new Error('collection-not-found');
  }

  const foundDocuments = await collection.find({
    selector: {
      done: {
        $eq: false
      }
    }
  }).exec();

  return foundDocuments;
};

export default findAll;
