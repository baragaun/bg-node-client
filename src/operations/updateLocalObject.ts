import db from '../db/db.js';
import { ModelType } from '../enums.js';
import fsdata from '../fsdata/fsdata.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { Model } from '../models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';

const updateLocalObject = async <T extends Model = Model>(
  id: string,
  object: T | null | undefined,
  modelType: ModelType,
  options: QueryOptions,
): Promise<QueryResult<T>> => {
  if (!libData.isInitialized()) {
    logger.error('updateLocalObject: unavailable');
    return { error: 'unavailable' };
  }

  if (!object) {
    const pollingResult = await fsdata.pollForUpdatedObject<T>(id, modelType, options);

    if (pollingResult.error || !pollingResult.object) {
      return pollingResult;
    }

    object = pollingResult.object;
  }

  if (!object) {
    return { error: 'system-error' };
  }

  return db.replace(object, modelType);
};

export default updateLocalObject;
