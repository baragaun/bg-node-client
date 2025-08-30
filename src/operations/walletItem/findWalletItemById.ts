import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { WalletItem } from '../../models/WalletItem.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findWalletItemById = async (
  id: string,
  options: FindObjectsOptions,
): Promise<QueryResult<WalletItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findWalletItemById: unavailable');
      return { error: 'unavailable' };
    }

    return fsdata.findById<WalletItem>(
      id,
      ModelType.WalletItem,
      undefined,
      options,
    );
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findWalletItemById;
