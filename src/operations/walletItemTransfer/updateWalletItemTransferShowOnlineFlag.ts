import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { QueryResult } from '../../types/QueryResult.js';

const updateWalletItemTransferShowOnlineFlag = async (
  transferSlug: string,
  transferSecret: string,
  showOnline: boolean,
): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('updateWalletItemTransferShowOnlineFlag: unavailable');
      return { error: 'unavailable' };
    }

    const result = await fsdata.walletItemTransfer.updateWalletItemTransferShowOnlineFlag(
      transferSlug,
      transferSecret,
      showOnline,
    );

    if (result.error) {
      logger.error('updateWalletItemTransferShowOnlineFlag: error from fsdata', { error: result.error });
      return { error: result.error };
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default updateWalletItemTransferShowOnlineFlag;
