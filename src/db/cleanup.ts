import { ModelType, MutationType } from '../enums.js';
import db from './helpers/db.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import { RxDatabase } from '../../../thirdparty/rxdb/dist/types/index.js';
import logger from '../helpers/logger.js';
import { QueryResult } from '../types/QueryResult.js';

let _db: RxDatabase | undefined = undefined;

const cleanup = async (modelType: ModelType): Promise<QueryResult<void>> => {
  const result: QueryResult<void> = { operation: MutationType.delete };

  try {
    if (!_db) {
      _db = db.getDb();

      if (!_db) {
        result.error = 'db-unavailable';
        return result;
      }
    }

    const collection = getCollectionFromModelType(modelType);

    if (!collection) {
      result.error = 'collection-not-found';
      return result;
    }

    await collection.cleanup();

    logger.debug('Cleanup completed successfully.');

    return {};
  } catch (error) {
    logger.error('db.cleanup: failed:', { error });
    result.error = 'db-cleanup-failed';
    return result;
  }
};

export default cleanup;
