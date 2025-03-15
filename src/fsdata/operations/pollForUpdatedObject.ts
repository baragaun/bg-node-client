import findById from './findById.js';
import { ModelType } from '../../enums.js';
import { Model } from '../../types/models/Model.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const pollForUpdatedObject = <T extends Model = Model>(
  id: string,
  modelType: ModelType,
  options: QueryOptions,
): Promise<T | null> => {
  return new Promise((resolve, reject) => {
    let activeIsInTargetStateFunc: ((object: T) => boolean) | undefined;
    const startTime = Date.now();

    if (options.polling.isInTargetStateFunc === 'watch-updated-at') {
      if (options.polling.oldUpdatedAt) {
        activeIsInTargetStateFunc = (obj: T): boolean =>
          obj.updatedAt !== options.polling.oldUpdatedAt;
      } else {
        console.error(
          'api.updateUser: watch-updated-at should not be used on a new insert.',
        );
      }
    } else if (options.polling.isInTargetStateFunc) {
      activeIsInTargetStateFunc = options.polling.isInTargetStateFunc;
    }

    const poll = (): void => {
      findById<T>(id, modelType).then(
        (object: T) => {
          if (
            Date.now() - startTime > (options.polling.timeout || 60000) ||
            !activeIsInTargetStateFunc ||
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
          console.error('api.updateUser: error', { error });
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
