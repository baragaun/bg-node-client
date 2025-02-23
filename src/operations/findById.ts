import { ModelType } from '../types/enums.js';
import { ObjectType } from '../types/Db.js';
import { QueryResult } from '../types/QueryResult.js';
import db from '../db/db.js';

const findById = async <T extends ObjectType = ObjectType>(
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
