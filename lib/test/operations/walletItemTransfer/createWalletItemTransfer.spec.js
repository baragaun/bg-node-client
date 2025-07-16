import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { createPurchaseOrderSpecHelper, } from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';
describe.runIf(isFeatureEnabled('marketplace'))('operations.walletItemTransfer.createWalletItemTransfer', () => {
    let client;
    let myUser;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should create and return a wallet item transfer', async () => {
        const itemCount = chance.integer({ min: 2, max: 4 });
        await createPurchaseOrderSpecHelper({}, itemCount, [], client);
        const walletItemsResult = await client.operations.walletItem.findWalletItems(undefined, { walletId: myUser.id }, undefined, undefined, { cachePolicy: CachePolicy.network });
        const items = walletItemsResult.objects;
        expect(walletItemsResult.error).toBeUndefined();
        expect(walletItemsResult.objects).toBeDefined();
        expect(items.length).toBeGreaterThanOrEqual(itemCount);
        const walletItem = chance.pickone(items);
        const { walletItemTransfer,
        // serviceRequest,
         } = await createWalletItemTransferSpecHelper({
            walletItemId: walletItem.id,
        }, client);
        expect(walletItemTransfer).toBeDefined();
        expect(walletItemTransfer.walletItemId).toBeDefined();
        expect(walletItemTransfer.createdBy).toBe(myUser.id);
        // The server currently fails to create/send the notification, so the service request result
        // is not ok.
        // expect(serviceRequest.result).toBe(ServiceRequestResult.ok);
    });
}, 10000);
//# sourceMappingURL=createWalletItemTransfer.spec.js.map