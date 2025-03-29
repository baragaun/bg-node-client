import db from '../db/db.js';
import { MutationType } from '../enums.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { Model } from '../models/Model.js';
import { QueryResult } from '../types/QueryResult.js';

const insertOne = async <T extends Model = Model>(
  object: T,
): Promise<QueryResult<T>> => {
  if (!libData.isInitialized()) {
    logger.error('insertOne: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('insertOne: unauthorized');
    return { error: 'unauthorized' };
  }

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
