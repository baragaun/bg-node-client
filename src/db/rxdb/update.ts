import { RxDatabase, RxDocument } from 'rxdb';

import { ModelType, MutationType } from '../../types/enums.js';
import { MutationResult } from '../../types/MutationResult.js';
import { Model } from '../../types/Model.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';

let _db: RxDatabase | undefined = undefined;

const update = async <T extends Model = Model>(
  changes: Partial<T>,
  modelType: ModelType,
): Promise<MutationResult<T>> => {
  const result: MutationResult<T> = { operation: MutationType.update };
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

  const foundDocuments: RxDocument[] = await collection
    .find({
      selector: {
        id: {
          $eq: changes.id,
        },
      },
    })
    .exec();

  if (foundDocuments.length === 0) {
    result.error = 'not-found';
  }

  const firstDocument = foundDocuments[0];
  const doc = await firstDocument.patch(changes);
  result.object = doc.toMutableJSON() as T;

  return result;
};

export default update;
