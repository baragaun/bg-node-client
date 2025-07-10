import findById from './findById.js';
import { ModelType } from '../../enums.js';
import logger from '../../helpers/logger.js';
import { Model } from '../../models/Model.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

/**
 * Polls for an updated object.
 * @param id
 * @param modelType
 * @param options
 */
const pollForUpdatedObject = async <T extends Model = Model>(
  id: string,
  modelType: ModelType,
  options: QueryOptions,
): Promise<QueryResult<T>> => {
  if (!options.polling) {
    logger.error('fsdata.pollForUpdatedObjects: no polling options.');
    return findById<T>(id, modelType);
  }

  let func: ((object: T) => boolean) | undefined;
  const startTime = Date.now();
  const timeout = options.polling.timeout || 60000; // 1 minute
  const interval = options.polling.interval || 1000; // 1 second
  let iteration = 0;
  const oldUpdatedAt = options.polling.oldUpdatedAt
    ? new Date(options.polling.oldUpdatedAt).getTime()
    : 0;

  if (
    !options.polling.isInTargetStateFunc ||
    options.polling.isInTargetStateFunc === 'watch-updated-at'
  ) {
    if (!oldUpdatedAt) {
      logger.error('fsdata.pollForUpdatedObjects: no options.polling.oldUpdatedAt');
      return findById<T>(id, modelType);
    }

    func = (obj: T): boolean => (
      !!obj?.updatedAt &&
      new Date(obj.updatedAt).getTime() > oldUpdatedAt + 10
    );
  } else {
    func = options.polling.isInTargetStateFunc;
  }

  if (typeof func !== 'function') {
    logger.error('fsdata.pollForUpdatedObjects: no func');
    return findById<T>(id, modelType);
  }

  return new Promise((resolve, reject) => {
    const poll = (): void => {
      logger.debug('pollForUpdatedObjects: fetching object.', { iteration });
      iteration++;

      findById<T>(id, modelType).then((response: QueryResult<T>) => {
        if (
          // Received an error? Then we'll give up.
          response.error ||
          // No object found? Then we'll give up as well.
          !response.object ||
          // Timed out?
          Date.now() - startTime > timeout ||
          // Let the comparison function check if the object is in the target state
          func(response.object)
        ) {
          logger.debug('pollForUpdatedObjects: finished.',
            { response, elapsedTime: Date.now() - startTime, timeout, options });
          // The object is now in the expected state (or no expected state was provided)
          resolve(response);
          return;
        }

        logger.debug('pollForUpdatedObjects: not finished yet.', {
          oldUpdatedAt,
          'obj.updatedAt': new Date(response.object.updatedAt).getTime(),
        });

        setTimeout(poll, interval);
      },
      (error) => {
        logger.error('fsdata.pollForUpdatedObjects: error.', { error });
        reject(error);
      });
    };

    setTimeout(poll, interval);
  });
};

export default pollForUpdatedObject;
