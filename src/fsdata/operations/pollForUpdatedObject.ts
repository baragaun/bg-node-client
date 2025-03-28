import findById from './findById.js';
import { ModelType } from '../../enums.js';
import logger from '../../helpers/logger.js';
import { Model } from '../../models/Model.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const pollForUpdatedObject = <T extends Model = Model>(
  id: string,
  modelType: ModelType,
  options: QueryOptions,
): Promise<T | null> => {
  return new Promise((resolve, reject) => {
    let activeIsInTargetStateFunc: ((object: T) => boolean) | undefined;
    const startTime = Date.now();

    // Do the options have a function to check if the object is in the target state?
    if (
      options.polling &&
      options.polling.isInTargetStateFunc &&
      options.polling.isInTargetStateFunc !== 'watch-updated-at'
    ) {
      activeIsInTargetStateFunc = options.polling.isInTargetStateFunc;
    }

    // Should we monitor the `updatedAt`?
    if (
      !activeIsInTargetStateFunc &&
      options.polling &&
      options.polling.isInTargetStateFunc === 'watch-updated-at' &&
      options.polling.oldUpdatedAt
    ) {
      activeIsInTargetStateFunc = (obj: T): boolean => {
        if (!obj?.updatedAt) {
          return false;
        }
        return (
          new Date(obj.updatedAt).getTime() >
          new Date(options.polling.oldUpdatedAt).getTime()
        );
      };
    }

    if (!activeIsInTargetStateFunc) {
      logger.error(
        'fsdata.pollForUpdatedObjects: no activeIsInTargetStateFunc',
      );
    }

    const poll = (): void => {
      findById<T>(id, modelType).then(
        (object: T) => {
          if (
            // No object found?
            !object ||
            // Timed out?
            Date.now() - startTime > (options.polling.timeout || 60000) ||
            // No comparison function? Then we are done
            !activeIsInTargetStateFunc ||
            // Let the comparison function check if the object is in the target state
            activeIsInTargetStateFunc(object)
          ) {
            // The object is now in the expected state (or no expected state was provided)
            resolve(object);
          }

          setTimeout(() => {
            poll();
          }, options.polling.interval || 1000); // default to 1 second
        },
        (error) => {
          logger.error('fsdata.pollForUpdatedObjects: error', { error });
          reject(error);
        },
      );
    };

    setTimeout(() => {
      poll();
    }, options.polling.initialDelay || 1000); // default to 1 second
  });
};

export default pollForUpdatedObject;
