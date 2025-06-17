import { WalletItem } from '../../../models/WalletItem.js';
import { WalletItemListFilter } from '../../../models/WalletItemListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findWalletItems: (filter: WalletItemListFilter, match: Partial<WalletItem>, options: FindObjectsOptions) => Promise<QueryResult<WalletItem>>;
export default findWalletItems;
