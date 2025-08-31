import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findWalletItemTransferById: (id: string, options: FindObjectsOptions) => Promise<QueryResult<WalletItemTransfer>>;
export default findWalletItemTransferById;
