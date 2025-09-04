import { ModelType } from '../../enums.js';
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

    const response = await fsdata.walletItemTransfer.findWalletItemTransferAcceptInfoByTransferSlug(
      transferSlug,
    );

    if (!response.error && response.object && response.object.brand) {
      libData.setObjectInCachedList(ModelType.Brand, response.object.brand.id, response.object.brand);
    }

    return response;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findWalletItemTransferAcceptInfoByTransferSlug;
