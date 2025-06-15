import { ShoppingCart } from '../../../models/ShoppingCart.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const findMyShoppingCart: () => Promise<QueryResult<ShoppingCart>>;
export default findMyShoppingCart;
