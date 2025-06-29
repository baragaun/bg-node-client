import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe('operations.brand.findBrands', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('returns the gift card products', async () => {
    await signMeUpSpecHelper(undefined, false, client);
    const brandResponse = await client.operations.brand.findBrands(
      undefined,
      undefined,
      undefined,
      undefined,
      { cachePolicy: CachePolicy.network },
    );
    expect(brandResponse.error).toBeUndefined();
    expect(brandResponse.objects.length).toBeGreaterThan(10);
  });
});
