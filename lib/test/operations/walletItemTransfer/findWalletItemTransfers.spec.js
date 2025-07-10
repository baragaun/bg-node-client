import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { WalletItemTransferListFilter } from '../../../models/WalletItemTransferListFilter.js';
import findWalletItemTransfers from '../../../operations/walletItemTransfer/findWalletItemTransfers.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';
describe('operations.walletItemTransfer.findWalletItemTransfers', () => {
    let client;
    let myUser;
    let walletItemTransferId;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
        const { walletItemTransfer } = await createWalletItemTransferSpecHelper({}, client);
        walletItemTransferId = walletItemTransfer.id;
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should find the created wallet item transfer', async () => {
        const filter = new WalletItemTransferListFilter();
        filter.ids = [walletItemTransferId];
        const result = await findWalletItemTransfers(filter, { createdBy: myUser.id }, undefined, {});
        expect(result.error).toBeUndefined();
        expect(result.objects).toBeDefined();
        expect(result.objects.length).toBeGreaterThan(0);
        expect(result.objects[0].id).toBe(walletItemTransferId);
    });
});
//# sourceMappingURL=findWalletItemTransfers.spec.js.map