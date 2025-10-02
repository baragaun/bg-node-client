import fsdata from '../../fsdata/fsdata.js';
import { QueryResult } from '../../types/QueryResult.js';

const updateWalletItemTransferPassword = async (
  transferSlug: string,
  transferSecret: string,
  password: string,
): Promise<QueryResult<void>> => {
  return fsdata.walletItemTransfer.updateWalletItemTransferPassword(
    transferSlug,
    transferSecret,
    password,
  );
};

export default updateWalletItemTransferPassword;
