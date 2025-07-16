import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { QueryResult } from '../../types/QueryResult.js';

const createWalletItemTransfer = async (
  props: WalletItemTransfer,
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

    if (!props) {
      return { error: 'missing-input', operation: MutationType.create };
    }

    return await fsdata.walletItemTransfer.createWalletItemTransfer(
      props,
    );

  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createWalletItemTransfer;
