import db from '../../../db/db.js';
import { Model } from '../../../types/models/Model.js';

const save = async <T extends Model = Model>(object: T): Promise<T> => {
  if (!db.isConnected()) {
    throw new Error('db-not-available');
  }

  if (!db.isConnected()) {
    throw new Error('db-not-available');
  }

  await db.insert<T>(object);

  return object;
};

export default save;
