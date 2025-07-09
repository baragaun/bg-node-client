import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import { MyUser } from '../../../models/MyUser.js';
import { WalletItem } from '../../../models/WalletItem.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import {
  createPurchaseOrderSpecHelper,
} from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe.runIf(isFeatureEnabled('marketplace'))('operations.walletItem.updateWalletItem', () => {
  let client: BgNodeClient;
  let myUser: MyUser;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('updates a wallet item', async () => {
    await createPurchaseOrderSpecHelper(
      {},
      chance.integer({ min: 3, max: 6 }),
      [],
      client,
    );

    const walletItemsResult = await client.operations.walletItem.findWalletItems(
      undefined,
      { walletId: myUser.id },
      undefined,
      undefined,
      { cachePolicy: CachePolicy.network },
    );
    const items = walletItemsResult.objects;

    expect(walletItemsResult.error).toBeUndefined();
    expect(walletItemsResult.objects).toBeDefined();

    // Pick the first wallet item and update its 'archivedAt' property
    const itemToUpdate = items[0];
    const newArchivedAt = new Date().toISOString();
    const updateResult = await client.operations.walletItem.updateWalletItem({
      id: itemToUpdate.id,
      archivedAt: newArchivedAt,
    });

    expect(updateResult.error).toBeUndefined();
    expect(updateResult.object).toBeDefined();
    expect(updateResult.object.id).toBe(itemToUpdate.id);
    expect(updateResult.object.archivedAt).toBe(newArchivedAt);

    // Reloading the wallet items to verify the update:
    const findResult = await client.operations.findById<WalletItem>(
      itemToUpdate.id,
      ModelType.WalletItem,
      { cachePolicy: CachePolicy.network },
    );

    expect(findResult.error).toBeUndefined();
    expect(findResult.object).toBeTruthy();
    expect(findResult.object.id).toBe(itemToUpdate.id);
    expect(findResult.object.archivedAt).toBe(newArchivedAt);
  });
}, { timeout: 10000 });
