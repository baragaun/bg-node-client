import { WalletItem } from '../../../models/WalletItem.js';
import { WalletItemListFilter } from '../../../models/WalletItemListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findWalletItems: (_filter: WalletItemListFilter, _match: Partial<WalletItem>, _options: FindObjectsOptionsFromClient) => Promise<QueryResult<WalletItem>>;
export default findWalletItems;
