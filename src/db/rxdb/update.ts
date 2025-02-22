import { RxDatabase } from 'rxdb';

import { ModelType } from '../../types/enums.js';
import { ObjectType } from '../../types/Db.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';

let _db: RxDatabase | undefined = undefined;

const update = async <T extends ObjectType = ObjectType>(
  changes: Partial<T>,
  modelType: ModelType,
): Promise<T | null> => {
  if (!_db) {
    _db = db.getDb();

    if (!_db) {
      return null;
    }
  }

  const collection = getCollectionFromModelType(modelType);

  if (!collection) {
    throw new Error('collection-not-found');
  }

  const foundDocuments = await collection.find({
    selector: {
      id: {
        $eq: changes.id
      }
    }
  }).exec();

  if (foundDocuments.length === 0) {
    throw new Error('not-found');
  }

  const firstDocument = foundDocuments[0];
  return await firstDocument.patch({
    done: true,
  });
};

export default update;
