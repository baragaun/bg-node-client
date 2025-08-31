import { WalletItemTransferAcceptInfo } from '../../models/WalletItemTransferAcceptInfo.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findWalletItemTransferAcceptInfoByTransferSlug: (transferSlug: string) => Promise<QueryResult<WalletItemTransferAcceptInfo>>;
export default findWalletItemTransferAcceptInfoByTransferSlug;
