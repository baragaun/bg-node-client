import { ModelType } from '../types/enums.js';
import { Model } from '../types/Model.js';
import { QueryResult } from '../types/QueryResult.js';
import db from '../db/db.js';

const findById = async <T extends Model = Model>(
  id: string,
  modelType: ModelType,
): Promise<QueryResult<T>> => {
  try {
    return db.findById<T>(id, modelType);
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export default findById
