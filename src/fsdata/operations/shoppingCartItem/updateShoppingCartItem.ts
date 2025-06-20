import { ModelType } from '../../../enums.js';
import { defaultQueryOptionsForMutations } from '../../../helpers/defaults.js';
import logger from '../../../helpers/logger.js';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
import { QueryOptions } from '../../../types/QueryOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import helpers from '../../helpers/helpers.js';
import update from '../update.js';

const updateShoppingCartItem = async (
  changes: Partial<ShoppingCartItem>,
  queryOptions: QueryOptions<ShoppingCartItem> = defaultQueryOptionsForMutations,
): Promise<QueryResult<ShoppingCartItem>> => {
  try {
    return update<ShoppingCartItem>(changes, ModelType.ShoppingCartItem, queryOptions);
  } catch (error) {
    logger.error('fsdata.updateShoppingCartItem: failed with error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default updateShoppingCartItem;
