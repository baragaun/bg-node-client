import db from '../db/db.js';
import { MutationType } from '../enums.js';
import clientInfoStore from '../helpers/clientInfoStore.js';
import libData from '../helpers/libData.js';
import { Model } from '../models/Model.js';
import { MutationResult } from '../types/MutationResult.js';

const insertOne = async <T extends Model = Model>(
  object: T,
): Promise<MutationResult<T>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
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
