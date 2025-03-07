import db from '../db/db.js';
import { MutationType } from '../enums.js';
import { Model } from '../types/Model.js';
import { MutationResult } from '../types/MutationResult.js';

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
