import { ModelType } from '../types/enums.js';
import { ObjectType } from '../types/Db.js';
import { QueryResult } from '../types/QueryResult.js';
import db from '../db/db.js';

const findOne = async <T extends ObjectType = ObjectType>(
  match: Partial<T>,
  modelType: ModelType,
): Promise<QueryResult<T>> => {
  try {
    return db.findOne<T>(match, modelType);
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export default findOne
