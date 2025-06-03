import { GiftCardProduct } from '../../../models/GiftCardProduct.js';
import { GiftCardProductListFilter as GiftCardListFilterFromClient } from '../../../models/GiftCardProductListFilter.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findGiftCardProducts: (filter: GiftCardListFilterFromClient | null | undefined, match: Partial<GiftCardProduct> | null | undefined, options: FindObjectsOptionsFromClient) => Promise<QueryResult<GiftCardProduct>>;
export default findGiftCardProducts;
