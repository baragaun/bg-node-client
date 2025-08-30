import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { WalletItemTransferAcceptInfo } from '../../models/WalletItemTransferAcceptInfo.js';
import { QueryResult } from '../../types/QueryResult.js';

const findWalletItemTransferAcceptInfoByTransferSlug = async (
  transferSlug: string,
): Promise<QueryResult<WalletItemTransferAcceptInfo>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findWalletItemTransferAcceptInfoByTransferSlug: unavailable');
      return { error: 'unavailable' };
    }

    return fsdata.walletItemTransfer.findWalletItemTransferAcceptInfoByTransferSlug(
      transferSlug,
    );
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findWalletItemTransferAcceptInfoByTransferSlug;
