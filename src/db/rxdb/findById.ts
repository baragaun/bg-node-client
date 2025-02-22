import { RxDatabase } from 'rxdb';

import { ModelType } from '../../types/enums.js';
import { ObjectType } from '../../types/Db.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';

let _db: RxDatabase | undefined = undefined;

const findById = async <T extends ObjectType = ObjectType>(
  id: string,
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

  const documents = await collection
    .find({
      selector: {
        channelId: {
          $eq: id,
        },
      },
    }).exec();

  if (Array.isArray(documents) && documents.length === 1) {
    return documents[0];
  }

  return null
};

export default findById;
