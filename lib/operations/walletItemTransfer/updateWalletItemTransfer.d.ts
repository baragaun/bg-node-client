import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateWalletItemTransfer: (changes: Partial<WalletItemTransfer>, queryOptions?: QueryOptions) => Promise<QueryResult<WalletItemTransfer>>;
export default updateWalletItemTransfer;
