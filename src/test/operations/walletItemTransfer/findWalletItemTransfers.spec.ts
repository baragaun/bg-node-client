import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import { MyUser } from '../../../models/MyUser.js';
import findWalletItemTransfers from '../../../operations/walletItemTransfer/findWalletItemTransfers.js';
import clientStore from '../../helpers/clientStore.js';
import { createPurchaseOrderSpecHelper } from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';


describe('operations.walletItemTransfer.findWalletItemTransfers', () => {
  let client: BgNodeClient;
  let myUser: MyUser;
  let walletItemTransferId: string;

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

    const walletItem = chance.pickone(walletItems);

    const {
      walletItemTransfer,
    } = await createWalletItemTransferSpecHelper({
      walletItemId: walletItem.id,
    }, client);

    walletItemTransferId = walletItemTransfer.id;

    const result = await findWalletItemTransfers(
      undefined,
      { createdBy: myUser.id },
      undefined,
      {},
    );
    expect(result.error).toBeUndefined();
    expect(result.objects).toBeTruthy();
    expect(result.objects.length).toBeGreaterThan(0);
    expect(result.objects[0].id).toBe(walletItemTransferId);
  });
});
