import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { WalletItem } from '../../models/WalletItem.js';
import { QueryResult } from '../../types/QueryResult.js';

const declineWalletItemTransfer = async (
  transferSlug: string,
): Promise<QueryResult<WalletItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('declineWalletItemTransfer: unavailable');
      return { error: 'unavailable' };
    }

    const result = await fsdata.walletItemTransfer.declineWalletItemTransfer(
      transferSlug,
    );

    if (result.error) {
      logger.error('declineWalletItemTransfer: error from fsdata', { error: result.error });
      return { error: result.error };
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default declineWalletItemTransfer;
