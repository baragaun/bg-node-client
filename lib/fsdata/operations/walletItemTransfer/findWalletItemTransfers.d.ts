import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import { WalletItemTransferListFilter } from '../../../models/WalletItemTransferListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findWalletItemTransfers: (filter: WalletItemTransferListFilter, match: Partial<WalletItemTransfer>, options: FindObjectsOptions) => Promise<QueryResult<WalletItemTransfer>>;
export default findWalletItemTransfers;
