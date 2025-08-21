import { WalletItem } from '../../models/WalletItem.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const declineWalletItemTransfer: (transferSlug: string) => Promise<QueryResult<WalletItem>>;
export default declineWalletItemTransfer;
