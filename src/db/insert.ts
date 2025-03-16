import { RxDatabase } from "rxdb";

import { ModelType, MutationType } from "../enums.js";
import db from "./helpers/db.js";
import getCollectionFromModelType from "./helpers/getCollectionFromModelType.js";
import { getModelTypeFromObject } from "../helpers/helpers.js";
import logger from "../helpers/logger.js";
import { Model } from "../types/models/Model.js";
import { MutationResult } from "../types/MutationResult.js";

let _db: RxDatabase | undefined = undefined;

const insert = async <T extends Model = Model>(
  obj: T,
  modelType?: ModelType,
): Promise<MutationResult<T>> => {
  const result: MutationResult<T> = { operation: MutationType.create };

  if (!_db) {
    _db = db.getDb();

    if (!_db) {
      result.error = "db-unavailable";
      return result;
    }
  }

  if (!modelType) {
    modelType = modelType || getModelTypeFromObject(obj);
  }

  if (!modelType) {
    result.error = "model-type-not-identified";
    return result;
  }

  const collection = getCollectionFromModelType(modelType);

  if (!collection) {
    result.error = "collection-not-found";
    return result;
  }

  if (!obj.id) {
    obj.id = crypto.randomUUID().replaceAll("-", "");
  }

  try {
    const record = await collection.insert(obj);
    result.object = record.toMutableJSON();

    return result;
  } catch (error) {
    logger.error(error);
    result.error = error.message;
    return result;
  }
};

export default insert;
