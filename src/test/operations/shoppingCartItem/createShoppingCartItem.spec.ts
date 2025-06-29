import { afterAll, beforeAll, describe, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import clientStore from '../../helpers/clientStore.js';
import { createShoppingCartItemSpecHelper } from '../../helpers/shoppingCartItem/createShoppingCartItem.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe('operations.shoppingCartItem.createShoppingCartItem', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('creates a shopping cart item', async () => {
    await createShoppingCartItemSpecHelper({}, client);
  });
});
