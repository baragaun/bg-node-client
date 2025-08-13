import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import {
  createPurchaseOrderSpecHelper,
} from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { findWalletItemByTransferSlugSpecHelper } from '../../helpers/walletItem/findWalletItemByTransferSlug.specHelper.js';
import { findWalletItemsSpecHelper } from '../../helpers/walletItem/findWalletItems.specHelper.js';
import { createWalletItemTransferSpecHelper } from '../../helpers/walletItemTransfer/createWalletItemTransfer.specHelper.js';

describe.runIf(isFeatureEnabled('marketplace'))('operations.walletItemTransfer.declineWalletItemTransfer', () => {
  let client: BgNodeClient;
  let myUser: MyUser;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should decline a wallet item transfer', async () => {
    const itemCount = chance.integer({ min: 2, max: 4 });
    await createPurchaseOrderSpecHelper(
      {},
      itemCount,
      [],
      client,
    );

    const walletItems = await findWalletItemsSpecHelper(client, myUser, itemCount);
    const walletItem = chance.pickone(walletItems);

    const { walletItemTransfer } = await createWalletItemTransferSpecHelper({
      walletItemId: walletItem.id,
    }, client);

    expect(walletItemTransfer).toBeDefined();
    expect(walletItemTransfer.transferSlug).toBeDefined();

    const transferSlug = walletItemTransfer.transferSlug;

    const acceptResponse = await client.operations.walletItemTransfer.declineWalletItemTransfer(
       transferSlug,
    );

    expect(acceptResponse.error).toBeUndefined();
    expect(acceptResponse.object).toBeDefined();

    const updatedWalletItem = await findWalletItemByTransferSlugSpecHelper(
      client,
      transferSlug,
    );

    expect(updatedWalletItem).toBeDefined();
    expect(updatedWalletItem.transferStartedAt).toBeDefined();
    expect(updatedWalletItem.transferAcceptedAt).toBeNull();
  });
}, 10000);
