import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { WalletItem } from '../../models/WalletItem.js';
import { QueryResult } from '../../types/QueryResult.js';

const acceptWalletItemTransfer = async (
  transferSlug: string,
  transferSecret: string,
): Promise<QueryResult<WalletItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('acceptWalletItemTransfer: unavailable');
      return { error: 'unavailable' };
    }

    const result = await fsdata.walletItemTransfer.acceptWalletItemTransfer(
      transferSlug,
      transferSecret,
    );

    if (result.error) {
      logger.error('acceptWalletItemTransfer: error from fsdata', { error: result.error });
      return { error: result.error };
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default acceptWalletItemTransfer;
