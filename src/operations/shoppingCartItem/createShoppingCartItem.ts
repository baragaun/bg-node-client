import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ShoppingCartItem } from '../../models/ShoppingCartItem.js';
import { QueryResult } from '../../types/QueryResult.js';

const createShoppingCartItem = async (
  props: Partial<ShoppingCartItem>,
): Promise<QueryResult<ShoppingCartItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('createShoppingCartItem: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('createShoppingCartItem: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork();

    if (!props) {
      return { error: 'missing-input', operation: MutationType.create };
    }

    if (!props.createdBy) {
      props.createdBy = libData.clientInfoStore().myUserId;
    }

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (!allowNetwork) {
      // todo: instead of using a separate collection, add it to the shopping_cart collection
      const response = await db.insert<ShoppingCartItem>(props, ModelType.ShoppingCartItem);

      if (response.object) {
        response.object = new ShoppingCartItem(response.object);
        return response;
      }

      return response;
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline', operation: MutationType.create };
    }

    const result = await fsdata.shoppingCartItem.createShoppingCartItem(props);

    if (result.object) {
      result.object = new ShoppingCartItem(result.object);
    }

    if (!result.error || result.object) {
      await db.insert<ShoppingCartItem>(result.object, ModelType.ShoppingCartItem);
    }

    return result;
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createShoppingCartItem;
