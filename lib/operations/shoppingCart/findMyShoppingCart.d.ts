import { ShoppingCart } from '../../models/ShoppingCart.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const findMyShoppingCart: (queryOptions?: QueryOptions) => Promise<QueryResult<ShoppingCart>>;
export default findMyShoppingCart;
