import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';
describe('operations.walletItemTransfer.createWalletItemTransfer', () => {
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
        const { walletItemTransfer } = await createWalletItemTransferSpecHelper({}, client);
        expect(walletItemTransfer).toBeDefined();
        expect(walletItemTransfer.walletItemId).toBeDefined();
        expect(walletItemTransfer.createdBy).toBe(myUser.id);
    });
}, 10000);
//# sourceMappingURL=createWalletItemTransfer.spec.js.map