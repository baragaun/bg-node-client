import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import { WalletItemTransferInput } from '../../types/WalletItemTransferInput.js';
declare const createWalletItemTransfer: (props: WalletItemTransferInput, _queryOptions?: QueryOptions) => Promise<QueryResult<WalletItemTransfer>>;
export default createWalletItemTransfer;
