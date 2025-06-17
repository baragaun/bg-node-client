import { WalletItem } from '../../models/WalletItem.js';
import { WalletItemListFilter } from '../../models/WalletItemListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findWalletItems: (filter: WalletItemListFilter | null | undefined, match: Partial<WalletItem> | null | undefined, _selector: MangoQueryTypes<WalletItem> | null | undefined, options: FindObjectsOptions, _queryOptions?: QueryOptions) => Promise<QueryResult<WalletItem>>;
export default findWalletItems;
