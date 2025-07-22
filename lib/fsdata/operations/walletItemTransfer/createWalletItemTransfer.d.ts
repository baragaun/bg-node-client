import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const createWalletItemTransfer: (props: Partial<WalletItemTransfer>) => Promise<QueryResult<WalletItemTransfer>>;
export default createWalletItemTransfer;
