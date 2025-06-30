import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
// import { CachePolicy } from '../../../enums.js';
// import { MyUser } from '../../../models/MyUser.js';
import chance from '../../../helpers/chance.js';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
import clientStore from '../../helpers/clientStore.js';
import {
  findGiftCardProductsSpecHelper,
} from '../../helpers/giftCardProduct/findGiftCardProducts.specHelper.js';
import {
  createShoppingCartItemSpecHelper,
} from '../../helpers/shoppingCartItem/createShoppingCartItem.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import {
  createPurchaseOrderSpecHelper
} from '../../helpers/purchaseOrder/createPurchaseOrder.specHelper.js';
import { CachePolicy } from '../../../enums.js';
import { MyUser } from '../../../models/MyUser.js';
// import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe('operations.purchaseOrder.createPurchaseOrder', () => {
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
    expect(purchaseOrder).toBeDefined();
    expect(purchaseOrder.items).toBeDefined();
    expect(shoppingCartItems.length).toEqual(itemCount);
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
    expect(networkWallet.items.length).toBe(itemCount);
  });
}, { timeout: 10000 });
