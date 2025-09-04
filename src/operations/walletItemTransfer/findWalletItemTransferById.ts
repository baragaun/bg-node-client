import { ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findWalletItemTransferById = async (
  id: string,
  options: FindObjectsOptions,
): Promise<QueryResult<WalletItemTransfer>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findWalletItemTransferById: unavailable');
      return { error: 'unavailable' };
    }

    return fsdata.findById<WalletItemTransfer>(
      id,
      ModelType.WalletItemTransfer,
      undefined,
      options,
    );
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findWalletItemTransferById;
