import { ServiceRequest } from '../../models/ServiceRequest.js';
import { ShoppingCartItem } from '../../models/ShoppingCartItem.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const updateShoppingCartItem: (changes: Partial<ShoppingCartItem>, queryOptions?: QueryOptions) => Promise<QueryResult<ServiceRequest>>;
export default updateShoppingCartItem;
