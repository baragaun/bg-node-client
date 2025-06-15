// import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { QueryResult } from '../../types/QueryResult.js';

const deleteShoppingCartItem = async (
  id: string,
): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('deleteShoppingCartItem: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('deleteShoppingCartItem: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork();

    if (!id) {
      return { error: 'missing-input', operation: MutationType.delete };
    }

    //------------------------------------------------------------------------------------------------
    // Local cache
    if (!allowNetwork) {
      // todo: remove from ShoppingCart.items
      // const response = await db.insert<ShoppingCartItem>(props, ModelType.ShoppingCartItem);
      //
      // if (response.object) {
      //   response.object = new ShoppingCartItem(response.object);
      //   return response;
      // }

      return {};
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline', operation: MutationType.delete };
    }

    const result = await fsdata.shoppingCartItem.deleteShoppingCartItem(id);

    if (!result.error || result.object) {
      // todo: remove from ShoppingCart.items
      // await db.insert<ShoppingCartItem>(result.object, ModelType.ShoppingCartItem);
    }

    return result;
  } catch (error) {
    return {
      operation: MutationType.delete,
      error: (error as Error).message,
    };
  }
};

export default deleteShoppingCartItem;
