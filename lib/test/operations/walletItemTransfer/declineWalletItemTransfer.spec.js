import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { createPurchaseOrderSpecHelper, } from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemByTransferSlugSpecHelper } from '../../helpers/walletItem/findWalletItemByTransferSlug.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';
describe.runIf(isFeatureEnabled('marketplace'))('operations.walletItemTransfer.declineWalletItemTransfer', () => {
    let client;
    let myUser;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should decline a wallet item transfer', async () => {
        const itemCount = chance.integer({ min: 2, max: 4 });
        await createPurchaseOrderSpecHelper({}, itemCount, [], client);
        const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);
        const walletItem = chance.pickone(walletItems);
        const { walletItemTransfer } = await createWalletItemTransferSpecHelper({
            walletItemId: walletItem.id,
        }, client);
        expect(walletItemTransfer).toBeTruthy();
        expect(walletItemTransfer.transferSlug).toBeTruthy();
        const transferSlug = walletItemTransfer.transferSlug;
        const acceptResponse = await client.operations.walletItemTransfer.declineWalletItemTransfer(transferSlug);
        expect(acceptResponse.error).toBeUndefined();
        expect(acceptResponse.object).toBeTruthy();
        const updatedWalletItem = await findWalletItemByTransferSlugSpecHelper(client, transferSlug);
        expect(updatedWalletItem).toBeTruthy();
        expect(updatedWalletItem.transferStartedAt).toBeNull();
        expect(updatedWalletItem.transferAcceptedAt).toBeNull();
        const updatedTransfer = await client.operations.walletItemTransfer.findWalletItemTransferById(walletItemTransfer.id, {});
        expect(updatedTransfer.error).toBeUndefined();
        expect(updatedTransfer.object).toBeTruthy();
        const declinedAtTime = new Date(updatedTransfer.object.declinedAt).getTime();
        expect(declinedAtTime).toBeLessThanOrEqual(Date.now());
        expect(declinedAtTime).toBeGreaterThan(Date.now() - 60000); // within the last minute
    });
}, 10000);
//# sourceMappingURL=declineWalletItemTransfer.spec.js.map