import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { ServiceRequest } from '../../models/ServiceRequest.js';
import { ShoppingCartItem } from '../../models/ShoppingCartItem.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateShoppingCartItem = async (
  changes: Partial<ShoppingCartItem>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ServiceRequest>> => {
  return update<ServiceRequest>(changes, ModelType.ShoppingCartItem, queryOptions);
};

export default updateShoppingCartItem;
