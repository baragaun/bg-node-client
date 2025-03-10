import db from '../../../db/db.js';
import { ModelType } from '../../../enums.js';
import { Model } from '../../../types/models/Model.js';
import getFactoryByType from './getFactoryByType.js';

const create = async <T extends Model = Model>(
  props: Partial<T> | Partial<T>[],
  modelType: ModelType,
  options?: any,
  count?: number,
): Promise<T | T[]> => {
  if (!db.isConnected()) {
    throw new Error('db-not-available');
  }

  const factory = getFactoryByType(modelType);

  if (Array.isArray(props)) {
    const promises = props.map(async (singleProps) => {
      // @ts-ignore
      const obj = factory.build(singleProps, options) as T;
      const { object } = await db.insert<T>(obj);

      return object;
    });

    return await Promise.all(promises);
  }

  if (count && count > 1) {
    const promises = Array.from({ length: count }).map(async (singleProps) => {
      const obj = factory.build(singleProps, options) as unknown as T;
      const { object } = await db.insert<T>(obj);

      return object;
    });

    return await Promise.all(promises);
  }

  // @ts-ignore
  const obj = factory.build(props, options) as T;
  const result = await db.insert<T>(obj);

  return result.object;
};

export default create;
