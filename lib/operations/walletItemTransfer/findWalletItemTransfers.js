import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findWalletItemTransfers = async (filter, match, _selector, options, _queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findWalletItemTransfers: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findWalletItemTransfers: unauthorized');
            return { error: 'unauthorized' };
        }
        const result = await fsdata.walletItemTransfer.findWalletItemTransfers(filter, match, options);
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
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findWalletItemTransfers;
//# sourceMappingURL=findWalletItemTransfers.js.map