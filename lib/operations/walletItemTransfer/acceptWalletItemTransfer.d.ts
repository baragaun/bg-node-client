import { WalletItem } from '../../models/WalletItem.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const acceptWalletItemTransfer: (transferSecret: string, transferSlug: string) => Promise<QueryResult<WalletItem>>;
export default acceptWalletItemTransfer;
