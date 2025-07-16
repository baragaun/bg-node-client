import fsdata from '../../fsdata/fsdata.js';
import { WalletItemTransferListFilter } from '../../fsdata/gql/graphql.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { PurchaseOrder } from '../../models/PurchaseOrder.js';
import { WalletItemTransfer } from '../../models/WalletItemTransfer.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findWalletItemTransfers = async (
  filter: WalletItemTransferListFilter | null | undefined,
  match: Partial<WalletItemTransfer> | null | undefined,
  _selector: MangoQueryTypes<PurchaseOrder> | null | undefined,
  options: FindObjectsOptions,
  _queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<WalletItemTransfer>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findWalletItemTransfers: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findWalletItemTransfers: unauthorized');
      return { error: 'unauthorized' };
    }

    const result = await fsdata.walletItemTransfer.findWalletItemTransfers(
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

export default findWalletItemTransfers;
