import { MutationResult } from '../types/MutationResult.js';
import { MutationType } from '../types/enums.js';
import { Model } from '../types/Model.js';
import db from '../db/db.js';

const insertOne = async <T extends Model>(object: T): Promise<MutationResult<T>> => {
  try {
    return db.insert<T>(object);
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default insertOne;
