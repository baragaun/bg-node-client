import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ShoppingCart } from '../../models/ShoppingCart.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const emptyMyShoppingCart = async (
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<void>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('emptyMyShoppingCart: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('emptyMyShoppingCart: unauthorized');
      return { error: 'unauthorized' };
    }

    const myUserId = libData.clientInfoStore().myUserId;
    if (!myUserId) {
      logger.error('emptyMyShoppingCart: myUserId not set');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local cache
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      const localResult = await db.findById<ShoppingCart>(
        myUserId,
        ModelType.ShoppingCart,
      );

      // todo: delete items

      if (!localResult.error && localResult.object) {
        return {};
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.shoppingCart.emptyMyShoppingCart();

    if (result.error) {
      logger.error('emptyMyShoppingCart: error from fsdata', { error: result.error });
      return { error: result.error };
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default emptyMyShoppingCart;
