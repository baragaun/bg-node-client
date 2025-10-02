import fsdata from '../../fsdata/fsdata.js';
import { QueryResult } from '../../types/QueryResult.js';

const verifyWalletItemTransferPassword = async (
  transferSlug: string,
  password: string,
): Promise<QueryResult<boolean>> => {
  return fsdata.walletItemTransfer.verifyWalletItemTransferPassword(
    transferSlug,
    password,
  );
};

export default verifyWalletItemTransferPassword;
