import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const updateShoppingCartItem: (changes: Partial<ShoppingCartItem>, queryOptions?: QueryOptions<ShoppingCartItem>) => Promise<QueryResult<ShoppingCartItem>>;
export default updateShoppingCartItem;
