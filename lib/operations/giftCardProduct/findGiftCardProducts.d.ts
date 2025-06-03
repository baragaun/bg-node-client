import { GiftCardProduct } from '../../models/GiftCardProduct.js';
import { GiftCardProductListFilter } from '../../models/GiftCardProductListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findGiftCardProducts: (filter: GiftCardProductListFilter | null | undefined, match: Partial<GiftCardProduct> | null | undefined, _selector: MangoQueryTypes<GiftCardProduct> | null | undefined, options: FindObjectsOptions, _queryOptions?: QueryOptions) => Promise<QueryResult<GiftCardProduct>>;
export default findGiftCardProducts;
