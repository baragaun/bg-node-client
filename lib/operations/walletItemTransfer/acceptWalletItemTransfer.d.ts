import { WalletItem } from '../../models/WalletItem.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const acceptWalletItemTransfer: (transferSlug: string, transferSecret: string) => Promise<QueryResult<WalletItem>>;
export default acceptWalletItemTransfer;
