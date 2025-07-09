import { WalletItemTransfer } from '../../../models/WalletItemTransfer.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { WalletItemTransferInput } from '../../../types/WalletItemTransferInput.js';
declare const createWalletItemTransfer: (props: WalletItemTransferInput) => Promise<QueryResult<WalletItemTransfer>>;
export default createWalletItemTransfer;
