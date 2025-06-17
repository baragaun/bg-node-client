import { afterAll, beforeAll, describe, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import { createShoppingCartItemSpecHelper } from '../../helpers/createShoppingCartItem.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.shoppingCartItem.createShoppingCartItem', () => {
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

  test('creates a shopping cart item', async () => {
    await createShoppingCartItemSpecHelper(
      {
        shoppingCartId: myUser.id,
        productId: '683fae6f08cdeb5b8c5c06da',
        quantity: 2,
        price: 5000,
        totalPrice: 10000,
      },
      client,
    );
    // const networkResult = await client.operations.shoppingCartItem.createShoppingCartItem({
    //   shoppingCartId: myUser.id,
    //   productId: '683fae6f08cdeb5b8c5c06da',
    //   quantity: 1,
    //   price: 5000,
    // });
    // const item = networkResult.object;
    //
    // expect(networkResult.error).toBeUndefined();
    // expect(networkResult.object).toBeDefined();
    // expect(item.shoppingCartId).toBe(myUser.id);
    // expect(item.productId).toBe('683fae6f08cdeb5b8c5c06da');
    // expect(item.quantity).toBe(1);
    // expect(item.price).toBe(5000);
  });
});
