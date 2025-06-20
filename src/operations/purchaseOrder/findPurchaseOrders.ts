import { CachePolicy } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { PurchaseOrder } from '../../models/PurchaseOrder.js';
import { PurchaseOrderListFilter } from '../../models/PurchaseOrderListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findPurchaseOrders = async (
  filter: PurchaseOrderListFilter | null | undefined,
  match: Partial<PurchaseOrder> | null | undefined,
  _selector: MangoQueryTypes<PurchaseOrder> | null | undefined,
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<PurchaseOrder>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findPurchaseOrders: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findPurchaseOrders: unauthorized');
      return { error: 'unauthorized' };
    }

    const myUserId = libData.clientInfoStore().myUserId;
    if (!myUserId) {
      logger.error('findPurchaseOrders: myUserId not set');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    // if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
    //   if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
    //     return db.findById<PurchaseOrder>(filter.ids[0], ModelType.PurchaseOrder);
    //   }
    //
    //   const localResult = await db.findById<PurchaseOrder>(
    //     myUserId,
    //     ModelType.PurchaseOrder,
    //   );
    //
    //   if (!localResult.error && localResult.object) {
    //     return localResult;
    //   }
    // }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.purchaseOrder.findPurchaseOrders(
      filter,
      match,
      options,
    );

    if (result.error) {
      logger.error('findPurchaseOrders: error from fsdata', { error: result.error });
      return { error: result.error };
    }

    // if (Array.isArray(result.objects) && result.objects.length > 0) {
    //   for (const purchaseOrder of result.objects) {
    //     await db.upsert<PurchaseOrder>(purchaseOrder, ModelType.PurchaseOrder);
    //   }
    // }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findPurchaseOrders;
