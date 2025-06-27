import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ServiceRequest } from '../../../models/ServiceRequest.js';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationDeleteShoppingCartItemArgs } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = {
  data: {
    deleteShoppingCartItem: ShoppingCartItem;
  };
  errors?: { message: string }[];
};

const deleteShoppingCartItem = async (
  id: string,
  deletePhysically: boolean,
): Promise<QueryResult<ServiceRequest>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.deleteShoppingCartItem: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationDeleteShoppingCartItemArgs = { id, deletePhysically };

    const response: ResponseDataType = await client.mutation.deleteShoppingCartItem({
      $: args,
      result: true,
      message: true,
      objectIds: true,
      errorCode: true,
    });

    logger.debug('fsdata.deleteShoppingCartItem response:', { response });

    return {};
  } catch (error) {
    logger.error('fsdata.deleteShoppingCartItem: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default deleteShoppingCartItem;
