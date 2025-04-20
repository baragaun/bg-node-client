import { ModelType, MutationType } from '../enums.js';
import getCollectionFromModelType from './helpers/getCollectionFromModelType.js';
import logger from '../helpers/logger.js';
import { QueryResult } from '../types/QueryResult.js';

const cleanup = async (modelType: ModelType): Promise<QueryResult<void>> => {
  const result: QueryResult<void> = { operation: MutationType.delete };

  try {
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
