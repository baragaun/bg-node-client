import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.giftCardProduct.findGiftCardProducts', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('returns the gift card products', async () => {
    await signMeUpSpecHelper(undefined, false, client);
    const giftCardResponse = await client.operations.giftCardProduct.findGiftCardProducts(
      undefined,
      undefined,
      undefined,
      undefined,
      { cachePolicy: CachePolicy.network },
    );
    expect(giftCardResponse.error).toBeUndefined();
    expect(giftCardResponse.objects.length).toBeGreaterThan(10);
  });
}, { timeout: 60000 });
