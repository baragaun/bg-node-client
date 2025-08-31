import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Brand } from '../../models/Brand.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findBrandById = async (
  id: string,
  options: FindObjectsOptions,
): Promise<QueryResult<Brand>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findBrandById: unavailable');
      return { error: 'unavailable' };
    }

    const cachedObject = libData.getObjectFromCachedList<Brand>(ModelType.Brand, id);

    if (cachedObject) {
      return { object: cachedObject };
    }

    return fsdata.findById<Brand>(
      id,
      ModelType.Brand,
      undefined,
      options,
    );
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findBrandById;
