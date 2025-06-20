// import db from '../../db/db.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
// import buildQuery from '../../helpers/objectQuery/buildQuery.js';
import { Vendor } from '../../models/Vendor.js';
import { VendorListFilter } from '../../models/VendorListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findVendors = async (
  filter: VendorListFilter | null | undefined,
  match: Partial<Vendor> | null | undefined,
  _selector: MangoQueryTypes<Vendor> | null | undefined,
  options: FindObjectsOptions,
  _queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<Vendor>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findVendors: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findVendors: unauthorized');
      return { error: 'unauthorized' };
    }

    // const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    // if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
    //   if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
    //     return db.findById<Vendor>(filter.ids[0], ModelType.Vendor);
    //   }
    //
    //   const localQuery = buildQuery<Vendor, VendorListFilter>(
    //     ModelType.Vendor,
    //     filter,
    //     match,
    //     selector,
    //     options,
    //   );
    //
    //   const localResult = await db.find<Vendor>(localQuery, ModelType.Vendor);
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

    const result = await fsdata.vendor.findVendors(
      filter,
      match,
      options,
    );

    // if (Array.isArray(result.objects) && result.objects.length > 0) {
    //   for (const vendor of result.objects) {
    //     await db.upsert<Vendor>(vendor, ModelType.Vendor);
    //   }
    // }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findVendors;
