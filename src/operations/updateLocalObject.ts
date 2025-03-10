import db from '../db/db.js';
import { ModelType } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import { Model } from '../types/models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';

const updateLocalObject = async <T extends Model = Model>(
  id: string,
  object: T | null | undefined,
  modelType: ModelType,
  options: QueryOptions,
): Promise<T | null> => {
  if (!object) {
    object = await fsdata.pollForUpdatedObject<T>(id, modelType, options);

    if (!object) {
      return null;
    }
  }

  if (!object) {
    return null;
  }

  await db.replace(object, modelType);

  return object;
};

export default updateLocalObject;
