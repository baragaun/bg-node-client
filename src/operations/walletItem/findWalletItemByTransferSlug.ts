import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { WalletItem } from '../../models/WalletItem.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findWalletItemByTransferSlug = async (
  transferSlug: string,
  options: FindObjectsOptions,
): Promise<QueryResult<WalletItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findWalletItemByTransferSlug: unavailable');
      return { error: 'unavailable' };
    }

    const result = await fsdata.walletItem.findWalletItemByTransferSlug(
      transferSlug,
      options,
    );

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findWalletItemByTransferSlug;
