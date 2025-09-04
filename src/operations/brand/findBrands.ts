import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
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
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<Brand>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findBrands: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findBrands: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local Cache
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
        const brand = libData.getObjectFromCachedList<Brand>(ModelType.Brand, filter.ids[0]);
        if (brand) {
          return { objects: [brand] };
        }
      }

      const brands = libData.getObjectListFromCache<Brand>(ModelType.Brand);
      if (Array.isArray(brands) && brands.length > 0) {
        return { objects: brands };
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.brand.findBrands(
      filter,
      match,
      options,
    );

    if (Array.isArray(result.objects) && result.objects.length > 0) {
      libData.setObjectListInCache(ModelType.Brand, result.objects);
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findBrands;
