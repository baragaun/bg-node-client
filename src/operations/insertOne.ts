import db from '../db/db.js';
import { CachePolicy, ModelType, MutationType } from '../enums.js';
import { defaultQueryOptionsForMutations } from '../helpers/defaults.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { Model } from '../models/Model.js';
import { QueryOptions } from '../types/QueryOptions.js';
import { QueryResult } from '../types/QueryResult.js';

const insertOne = async <T extends Model = Model>(
  object: T,
  modelType: ModelType,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<T>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('insertOne: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('insertOne: unauthorized');
      return { error: 'unauthorized' };
    }

    const isOnline = libData.isOnline();
    const allowNetwork = isOnline && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (
      (!allowNetwork || queryOptions.cachePolicy === CachePolicy.cache) &&
      db.isModelTypeSupported(modelType)
    ) {
      return db.insert<T>(object);
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    // todo: get it from the network

    return { object: null };
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default insertOne;
