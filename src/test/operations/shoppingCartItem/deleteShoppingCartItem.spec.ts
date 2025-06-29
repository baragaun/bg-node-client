import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import clientStore from '../../helpers/clientStore.js';
import { createShoppingCartItemSpecHelper } from '../../helpers/shoppingCartItem/createShoppingCartItem.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe('operations.shoppingCartItem.deleteShoppingCartItem', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('deletes a shopping cart item', async () => {
    const item = await createShoppingCartItemSpecHelper({}, client);

    const response = await client.operations.shoppingCartItem.deleteShoppingCartItem(
      item.id,
      true,
    );

    expect(response.error).toBeUndefined();
  });
});
