import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const createWalletItemTransfer: (props: WalletItemTransfer) => Promise<QueryResult<WalletItemTransfer>>;
export default createWalletItemTransfer;
