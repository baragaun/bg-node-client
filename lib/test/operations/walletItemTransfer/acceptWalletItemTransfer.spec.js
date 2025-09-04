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
describe.runIf(isFeatureEnabled('marketplace'))('operations.walletItemTransfer.acceptWalletItemTransfer', () => {
    let client;
    let myUser;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should accept a wallet item transfer', async () => {
        const transferSlug = chance.guid();
        const transferSecret = chance.integer({ min: 100000, max: 999999 }).toString();
        const itemCount = chance.integer({ min: 2, max: 4 });
        await createPurchaseOrderSpecHelper({}, itemCount, [], client);
        const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);
        const walletItem = chance.pickone(walletItems);
        const { walletItemTransfer } = await createWalletItemTransferSpecHelper({
            walletItemId: walletItem.id,
            transferSlug,
            transferSecret,
            recipientFullName: chance.name(),
            recipientEmail: chance.email(),
            messageText: chance.sentence(),
        }, client);
        expect(walletItemTransfer).toBeTruthy();
        expect(walletItemTransfer.transferSecret).toBeUndefined(); // The server should not expose this
        expect(walletItemTransfer.transferSlug).toBeTruthy();
        const walletItemTransferAcceptInfoResult = await client.operations.walletItemTransfer.findWalletItemTransferAcceptInfoByTransferSlug(transferSlug);
        const walletItemTransferAcceptInfo = walletItemTransferAcceptInfoResult.object;
        expect(walletItemTransferAcceptInfo.brand).toBeTruthy();
        expect(walletItemTransferAcceptInfo.brand.id).toEqual(walletItem.brandId);
        expect(walletItemTransferAcceptInfo.walletItem).toBeTruthy();
        expect(walletItemTransferAcceptInfo.walletItem.id).toEqual(walletItem.id);
        expect(walletItemTransferAcceptInfo.walletItemTransfer).toBeTruthy();
        expect(walletItemTransferAcceptInfo.walletItemTransfer.id).toEqual(walletItemTransfer.id);
        const acceptResponse = await client.operations.walletItemTransfer.acceptWalletItemTransfer(transferSlug, transferSecret);
        expect(acceptResponse.error).toBeUndefined();
        expect(acceptResponse.object).toBeTruthy();
        const updatedWalletItem = await findWalletItemByTransferSlugSpecHelper(client, transferSlug);
        expect(updatedWalletItem).toBeTruthy();
        expect(updatedWalletItem.transferStartedAt).toBeTruthy();
        expect(updatedWalletItem.transferAcceptedAt).toBeTruthy();
    });
}, 10000);
//# sourceMappingURL=acceptWalletItemTransfer.spec.js.map