import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ShoppingCart } from '../../../models/ShoppingCart.js';
import { QueryResult } from '../../../types/QueryResult.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findMyShoppingCart: ShoppingCart;
  };
  errors?: { message: string }[];
};

const findMyShoppingCart = async (): Promise<QueryResult<ShoppingCart>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findMyShoppingCart: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();

    const response: ResponseDataType = await client.query.findMyShoppingCart({
      ...modelFields.shoppingCart,
    });

    logger.debug('fsdata.findMyShoppingCart response:', { response });

    return {
      object: response.data.findMyShoppingCart,
    };
  } catch (error) {
    logger.error('fsdata.findMyShoppingCart: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findMyShoppingCart;
