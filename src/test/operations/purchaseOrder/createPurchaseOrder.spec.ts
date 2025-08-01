import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import {
  createPurchaseOrderSpecHelper,
} from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe.runIf(isFeatureEnabled('marketplace'))('operations.purchaseOrder.createPurchaseOrder', () => {
  let client: BgNodeClient;
  let myUser: MyUser;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should create and return the purchase order with the items', async () => {
    const itemCount = chance.integer({ min: 3, max: 6 });
    const { purchaseOrder, shoppingCartItems } = await createPurchaseOrderSpecHelper(
      {},
      itemCount,
      [],
      client,
    );
    const walletItemCount = shoppingCartItems.reduce((sum, item) => sum + item.quantity, 0);

    expect(purchaseOrder).toBeDefined();
    expect(purchaseOrder.items).toBeDefined();
    expect(purchaseOrder.items.length).toEqual(shoppingCartItems.length);

    const networkResult = await client.operations.shoppingCart.findMyShoppingCart({
      cachePolicy: CachePolicy.network,
    });
    const shoppingCart = networkResult.object;

    expect(networkResult.error).toBeUndefined();
    expect(networkResult.object).toBeDefined();
    expect(shoppingCart.id).toBe(myUser.id);
    expect(shoppingCart.items.length).toBe(0);

    const walletResult = await client.operations.wallet.findMyWallet({
      cachePolicy: CachePolicy.network,
    });
    const networkWallet = walletResult.object;

    expect(walletResult.error).toBeUndefined();
    expect(walletResult.object).toBeDefined();
    expect(networkWallet.id).toBe(myUser.id);

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
    expect(items.length).toBe(walletItemCount);
  });
}, 10000);
