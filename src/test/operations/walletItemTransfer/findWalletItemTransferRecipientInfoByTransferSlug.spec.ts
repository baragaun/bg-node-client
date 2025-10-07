import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import { WalletItemTransfer } from '../../../index.js';
import { MyUser } from '../../../models/MyUser.js';
import findWalletItemTransferRecipientInfoByTransferSlug from '../../../operations/walletItemTransfer/findWalletItemTransferRecipientInfoByTransferSlug.js';
import clientStore from '../../helpers/clientStore.js';
import { createPurchaseOrderSpecHelper } from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';


describe('operations.walletItemTransfer.findWalletItemTransferRecipientInfoByTransferSlug', () => {
  let client: BgNodeClient;
  let myUser: MyUser;
  const walletItemTransfers: WalletItemTransfer[] = [];
  let walletItemTransfer: WalletItemTransfer;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should find the created wallet item transfer', async () => {
    const itemCount = chance.integer({ min: 2, max: 4 });
    await createPurchaseOrderSpecHelper(
      {},
      itemCount,
      [],
      client,
    );

    const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);

    for (const item of walletItems) {
      const response = await createWalletItemTransferSpecHelper({
        walletItemId: item.id,
      }, client);
      walletItemTransfers.push(response.walletItemTransfer);
    }

    walletItemTransfer = chance.pickone(walletItemTransfers);

    const result = await findWalletItemTransferRecipientInfoByTransferSlug(
      walletItemTransfer.transferSlug,
    );
    expect(result.error).toBeUndefined();
    expect(result.object).toBeTruthy();
    expect(result.object.walletItem).toBeTruthy();
    expect(result.object.product).toBeTruthy();
    expect(result.object.brand).toBeTruthy();
    expect(result.object.walletItemTransfer.transferSlug).toBe(walletItemTransfer.transferSlug);
    expect(result.object.walletItemTransfer.transferSecret).toBe(walletItemTransfer.transferSecret);
  }, 10000);
});
