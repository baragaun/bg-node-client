// import db from '../../db/db.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
// import buildQuery from '../../helpers/objectQuery/buildQuery.js';
import { ProductCategory } from '../../models/ProductCategory.js';
import { ProductCategoryListFilter } from '../../models/ProductCategoryListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findProductCategories = async (
  filter: ProductCategoryListFilter | null | undefined,
  match: Partial<ProductCategory> | null | undefined,
  _selector: MangoQueryTypes<ProductCategory> | null | undefined,
  options: FindObjectsOptions,
  _queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<ProductCategory>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findProductCategories: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findProductCategories: unauthorized');
      return { error: 'unauthorized' };
    }

    // const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local cache
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

    const result = await fsdata.productCategory.findProductCategories(
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

export default findProductCategories;
