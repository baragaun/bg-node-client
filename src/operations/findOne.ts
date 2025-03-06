import db from '../db/db.js';
import { ModelType } from '../types/enums.js';
import { Model } from '../types/Model.js';
import { QueryResult } from '../types/QueryResult.js';

const findOne = async <T extends Model = Model>(match: Partial<T>, modelType: ModelType): Promise<QueryResult<T>> => {
  try {
    return db.findOne<T>(match, modelType);
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findOne;
