import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import { WalletItemTransferInput } from '../../types/WalletItemTransferInput.js';

const createWalletItemTransfer = async (
  props: WalletItemTransferInput,
  _queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<WalletItemTransfer>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('createWalletItemTransfer: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('createWalletItemTransfer: unauthorized');
      return { error: 'unauthorized' };
    }

    const result = await fsdata.walletItemTransfer.createWalletItemTransfer(
      props,
    );

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default createWalletItemTransfer;