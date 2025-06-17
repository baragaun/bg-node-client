import { WalletItem } from '../../../models/WalletItem.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const updateWalletItem: (changes: Partial<WalletItem>, queryOptions?: QueryOptions<WalletItem>) => Promise<QueryResult<WalletItem>>;
export default updateWalletItem;
