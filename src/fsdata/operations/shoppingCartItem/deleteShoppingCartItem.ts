import { ModelType } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { QueryResult } from '../../../types/QueryResult.js';
import helpers from '../../helpers/helpers.js';
import deleteFunc from '../delete.js';

const deleteShoppingCartItem = async (
  id: string,
  deletePhysically: boolean,
): Promise<QueryResult<ServiceRequest>> => {
  try {
    return deleteFunc(
      id,
      ModelType.ShoppingCartItem,
      deletePhysically,
    );
  } catch (error) {
    logger.error('fsdata.deleteShoppingCartItem: failed with error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default deleteShoppingCartItem;
