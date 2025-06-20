import { afterAll, beforeAll, describe, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
// import { CachePolicy } from '../../../enums.js';
// import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
// import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.shoppingCart.placeOrder', () => {
  let client: BgNodeClient;
  // let myUser: MyUser;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    // myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  // test('should return the cached shoppingCart from the local db', async () => {
  //   const localResult = await client.operations.shoppingCart.placeOrder({
  //     cachePolicy: CachePolicy.cache,
  //   });
  //   const cachedShoppingCart = localResult.object;
  //
  //   expect(localResult.error).toBeUndefined();
  //   expect(localResult.object).toBeDefined();
  //   expect(cachedShoppingCart.id).toBe(myUser.id);
  //   expect(cachedShoppingCart.items.length).toBe(0);
  // });

  test('should return the cached user from the local db', async () => {
    // const networkResult = await client.operations.purchaseOrder.createPurchaseOrder({
    //   cachePolicy: CachePolicy.network,
    // });
    // const shoppingCart = networkResult.object;
    //
    // expect(networkResult.error).toBeUndefined();
    // expect(networkResult.object).toBeDefined();
    // expect(shoppingCart.id).toBe(myUser.id);
    // expect(shoppingCart.items.length).toBe(0);
  });
});
