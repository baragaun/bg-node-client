import { WalletItem } from '../../models/WalletItem.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const verifyWalletItemTransfer: (transferSecret: string, walletItemId: string) => Promise<QueryResult<WalletItem>>;
export default verifyWalletItemTransfer;
