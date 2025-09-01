import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { GiftCardProduct } from '../../models/GiftCardProduct.js';
import { GiftCardProductListFilter } from '../../models/GiftCardProductListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findGiftCardProducts = async (
  filter: GiftCardProductListFilter | null | undefined,
  match: Partial<GiftCardProduct> | null | undefined,
  _selector: MangoQueryTypes<GiftCardProduct> | null | undefined,
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<GiftCardProduct>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findGiftCardProducts: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findGiftCardProducts: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local Cache
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
        const product = libData.getObjectFromCachedList<GiftCardProduct>(
          ModelType.GiftCardProduct,
          filter.ids[0],
        );

        if (product) {
          return { objects: [product] };
        }
      }

      const products = libData.getObjectListFromCache<GiftCardProduct>(
        ModelType.GiftCardProduct,
      );

      if (Array.isArray(products) && products.length > 0) {
        return { objects: products };
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.giftCardProduct.findGiftCardProducts(
      filter,
      match,
      options,
    );

    if (Array.isArray(result.objects) && result.objects.length > 0) {
      libData.setObjectListInCache(ModelType.GiftCardProduct, result.objects);
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findGiftCardProducts;
