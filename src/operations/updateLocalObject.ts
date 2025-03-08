import db from '../db/db.js';
import { ModelType } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import { Model } from '../types/Model.js';
import { BaseModel } from '../types/models/BaseModel.js';
import { QueryOptions } from '../types/QueryOptions.js';

const updateLocalObject = async <T extends BaseModel = BaseModel>(
  id: string,
  object: T | null | undefined,
  modelType: ModelType,
  options: QueryOptions,
): Promise<T | null> => {
  if (!object) {
    object = await fsdata.pollForUpdatedObject<T>(modelType, id, options);

    if (!object) {
      return null;
    }
  }

  if (!object) {
    return null;
  }

  await db.replace(object as unknown as Model, modelType);

  return object;
};

export default updateLocalObject;
