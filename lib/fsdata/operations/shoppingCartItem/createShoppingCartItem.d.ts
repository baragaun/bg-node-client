import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const createShoppingCartItem: (props: Partial<ShoppingCartItem>) => Promise<QueryResult<ShoppingCartItem>>;
export default createShoppingCartItem;
