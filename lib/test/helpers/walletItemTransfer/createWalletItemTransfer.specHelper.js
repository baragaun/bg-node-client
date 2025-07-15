import { expect } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { createPurchaseOrderSpecHelper } from '../purchaseOrder/createPurchaseOrder.specHelper.js';
export const createWalletItemTransferSpecHelper = async (props, client) => {
    logger.debug('createWalletItemTransferSpecHelper called.', { props });
    if (!props) {
        props = {};
    }
    if (!props.walletItemId) {
        // Try to find an existing wallet item for the user
        const walletItemsResult = await client.operations.walletItem.findWalletItems(undefined, { walletId: client.clientInfoStore.myUserId }, undefined, undefined, { cachePolicy: CachePolicy.network });
        let walletItem = walletItemsResult.objects?.[0];
        logger.debug('createWalletItemTransferSpecHelper: found wallet items', { walletItemsResult });
        // If no wallet item exists, create one via purchase order flow
        if (!walletItem) {
            await createPurchaseOrderSpecHelper({}, 1, [], client);
            // After purchase order, try to find wallet items again
            const walletItemsResult2 = await client.operations.walletItem.findWalletItems(undefined, { walletId: client.clientInfoStore.myUserId }, undefined, undefined, { cachePolicy: CachePolicy.network });
            walletItem = walletItemsResult2.objects?.[0];
        }
        if (!walletItem) {
            throw new Error('Failed to find or create a wallet item for transfer');
        }
        props.walletItemId = walletItem.id;
        props.recipientFullName = 'Test User';
        props.recipientEmail = 'test@example.com';
        props.messageText = 'Test Message';
    }
    const response = await client.operations.walletItemTransfer.createWalletItemTransfer(props);
    const walletItemTransfer = response.object;
    expect(response.error).toBeUndefined();
    expect(walletItemTransfer).toBeDefined();
    expect(response.object.walletItemId).toBe(props.walletItemId);
    return { walletItemTransfer };
};
//# sourceMappingURL=createWalletItemTransfer.specHelper.js.map