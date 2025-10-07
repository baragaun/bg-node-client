import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import chance from '../../../helpers/chance.js';
import updateWalletItemTransferPassword from '../../../operations/walletItemTransfer/updateWalletItemTransferPassword.js';
import clientStore from '../../helpers/clientStore.js';
import { createPurchaseOrderSpecHelper } from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';
describe('operations.walletItemTransfer.updateWalletItemTransferPassword', () => {
    let client;
    let myUser;
    let transferSecret;
    let transferSlug;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
        transferSlug = chance.guid();
        transferSecret = chance.integer({ min: 100000, max: 999999 }).toString();
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should update wallet item transfer password successfully', async () => {
        const itemCount = 1;
        await createPurchaseOrderSpecHelper({}, itemCount, [], client);
        const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);
        const walletItem = walletItems[0];
        await createWalletItemTransferSpecHelper({
            walletItemId: walletItem.id,
            transferSlug,
            transferSecret,
            recipientFullName: chance.name(),
            recipientEmail: chance.email(),
            messageText: chance.sentence(),
        }, client);
        // Update the password
        const newPassword = chance.string({ length: 8, alpha: true, numeric: true });
        const result = await updateWalletItemTransferPassword(transferSlug, transferSecret, newPassword);
        expect(result.error).toBeUndefined();
        expect(result.serviceRequest).toBeTruthy();
        expect(result.serviceRequest?.finishedAt).toBeTruthy();
    }, 15000);
    test('should return error for invalid transfer slug', async () => {
        const invalidSlug = chance.guid();
        const invalidSecret = chance.string({ length: 6, numeric: true });
        const password = chance.string({ length: 8, alpha: true, numeric: true });
        const result = await updateWalletItemTransferPassword(invalidSlug, invalidSecret, password);
        expect(result.serviceRequest?.errorCode).toEqual('invalidInput');
    }, 10000);
    test('should return error for invalid transfer secret', async () => {
        const invalidSecret = chance.string({ length: 6, numeric: true });
        const password = chance.string({ length: 8, alpha: true, numeric: true });
        const result = await updateWalletItemTransferPassword(transferSlug, invalidSecret, password);
        expect(result.serviceRequest?.errorCode).toEqual('invalidInput');
    }, 10000);
});
//# sourceMappingURL=updateWalletItemTransferPassword.spec.js.map