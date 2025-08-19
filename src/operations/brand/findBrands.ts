// import db from '../../db/db.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
// import buildQuery from '../../helpers/objectQuery/buildQuery.js';
import { Brand } from '../../models/Brand.js';
import { BrandListFilter } from '../../models/BrandListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findBrands = async (
  filter: BrandListFilter | null | undefined,
  match: Partial<Brand> | null | undefined,
  _selector: MangoQueryTypes<Brand> | null | undefined,
  options: FindObjectsOptions,
  _queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<Brand>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findBrands: unavailable');
      return { error: 'unavailable' };
    }

    // if (!libData.clientInfoStore().isSignedIn) {
    //   logger.error('findBrands: unauthorized');
    //   return { error: 'unauthorized' };
    // }

    // const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    // if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
    //   if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
    //     return db.findById<Brand>(filter.ids[0], ModelType.Brand);
    //   }
    //
    //   const localQuery = buildQuery<Brand, BrandListFilter>(
    //     ModelType.Brand,
    //     filter,
    //     match,
    //     selector,
    //     options,
    //   );
    //
    //   const localResult = await db.find<Brand>(localQuery, ModelType.Brand);
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

    const result = await fsdata.brand.findBrands(
      filter,
      match,
      options,
    );

    // if (Array.isArray(result.objects) && result.objects.length > 0) {
    //   for (const brand of result.objects) {
    //     await db.upsert<Brand>(brand, ModelType.Brand);
    //   }
    // }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findBrands;
