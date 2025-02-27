import { ModelType } from '../../../types/enums.js';
import db from '../../../db/db.js';

const deleteFunc = async (
  id: string,
  modelType: ModelType,
): Promise<void> => {
  if (!db.isConnected()) {
    throw new Error('db-not-available');
  }

  if (!db.isConnected()) {
    throw new Error('db-not-available');
  }

  try {
    await db.delete(id, modelType);
  } catch (error) {
    console.error('Error deleting factory object', error);
  }
};

export default deleteFunc;
