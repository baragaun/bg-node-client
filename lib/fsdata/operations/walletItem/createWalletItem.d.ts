import { WalletItem } from '../../../models/WalletItem.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const createWalletItem: (props: Partial<WalletItem>) => Promise<QueryResult<WalletItem>>;
export default createWalletItem;
