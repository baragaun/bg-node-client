import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { QueryResult } from '../../../types/QueryResult.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';

type ResponseDataType = {
  data: {
    emptyMyShoppingCart: void;
  };
  errors?: { message: string }[];
};

const emptyMyShoppingCart = async (
): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.emptyMyShoppingCart: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    const response: ResponseDataType = await client.query.emptyMyShoppingCart();

    logger.debug('fsdata.emptyMyShoppingCart response:', { response });

    return {
      object: response.data.emptyMyShoppingCart,
    };
  } catch (error) {
    logger.error('fsdata.emptyMyShoppingCart: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default emptyMyShoppingCart;
