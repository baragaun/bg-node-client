import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import chance from '../../../helpers/chance.js';
import findWalletItemTransferById from '../../../operations/walletItemTransfer/findWalletItemTransferById.js';
import clientStore from '../../helpers/clientStore.js';
import { createPurchaseOrderSpecHelper } from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';
describe('operations.walletItemTransfer.findWalletItemTransferById', () => {
    let client;
    let myUser;
    const walletItemTransfers = [];
    let walletItemTransferId;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should find the created wallet item transfer', async () => {
        const itemCount = chance.integer({ min: 2, max: 4 });
        await createPurchaseOrderSpecHelper({}, itemCount, [], client);
        const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);
        for (const item of walletItems) {
            const response = await createWalletItemTransferSpecHelper({
                walletItemId: item.id,
            }, client);
            walletItemTransfers.push(response.walletItemTransfer);
        }
        walletItemTransferId = chance.pickone(walletItemTransfers).id;
        const result = await findWalletItemTransferById(walletItemTransferId, {});
        expect(result.error).toBeUndefined();
        expect(result.object).toBeTruthy();
        expect(result.object.id).toBe(walletItemTransferId);
    }, 20000);
});
//# sourceMappingURL=findWalletItemTransferById.spec.js.map