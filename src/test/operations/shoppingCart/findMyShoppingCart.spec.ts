import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import {
  createMultipleShoppingCartItemsSpecHelper
} from '../../helpers/shoppingCartItem/createMultipleShoppingCartItems.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe('operations.shoppingCart.findMyShoppingCart', () => {
  let client: BgNodeClient;
  let myUser: MyUser;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  // test('should return the cached shoppingCart from the local db', async () => {
  //   const localResult = await client.operations.shoppingCart.findMyShoppingCart({
  //     cachePolicy: CachePolicy.cache,
  //   });
  //   const cachedShoppingCart = localResult.object;
  //
  //   expect(localResult.error).toBeUndefined();
  //   expect(localResult.object).toBeDefined();
  //   expect(cachedShoppingCart.id).toBe(myUser.id);
  //   expect(cachedShoppingCart.items.length).toBe(0);
  // });

  test('returns the shopping cart from the network', async () => {
    const itemCount = chance.integer({ min: 2, max: 6 });
    const shoppingCartItems = await createMultipleShoppingCartItemsSpecHelper(itemCount, client);

    const networkResult = await client.operations.shoppingCart.findMyShoppingCart({
      cachePolicy: CachePolicy.network,
    });
    const shoppingCart = networkResult.object;

    expect(networkResult.error).toBeUndefined();
    expect(networkResult.object).toBeDefined();
    expect(shoppingCart.id).toBe(myUser.id);
    expect(shoppingCart.items.length).toBe(itemCount);
  });
});
