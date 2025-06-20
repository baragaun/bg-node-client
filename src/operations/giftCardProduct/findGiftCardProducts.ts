// import db from '../../db/db.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
// import buildQuery from '../../helpers/objectQuery/buildQuery.js';
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
  _queryOptions: QueryOptions = defaultQueryOptions,
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

    // const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    // if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
    //   if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
    //     return db.findById<GiftCard>(filter.ids[0], ModelType.GiftCard);
    //   }
    //
    //   const localQuery = buildQuery<GiftCard, GiftCardListFilter>(
    //     ModelType.GiftCard,
    //     filter,
    //     match,
    //     selector,
    //     options,
    //   );
    //
    //   const localResult = await db.find<GiftCard>(localQuery, ModelType.GiftCard);
    //
    //   if ((!localResult.error && localResult.objects) || !allowNetwork) {
    //     return localResult;
    //   }
    // }

    //------------------------------------------------------------------------------------------------
    // Network
    // if (!allowNetwork) {
    //   return { error: 'offline' };
    // }

    const result = await fsdata.giftCardProduct.findGiftCardProducts(
      filter,
      match,
      options,
    );

    // if (Array.isArray(result.objects) && result.objects.length > 0) {
    //   for (const giftCard of result.objects) {
    //     await db.upsert<GiftCard>(giftCard, ModelType.GiftCard);
    //   }
    // }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findGiftCardProducts;
