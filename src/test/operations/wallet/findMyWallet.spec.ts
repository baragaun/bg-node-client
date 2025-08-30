import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe.runIf(isFeatureEnabled('marketplace'))('operations.wallet.findMyWallet', () => {
  let client: BgNodeClient;
  let myUser: MyUser;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test.skip('should return the cached wallet from the local db', async () => {
    // const props = factories.channel.build({
    //   id: client.clientInfoStore.myUserId,
    //   createdBy: client.clientInfoStore.myUserId,
    // });
    //
    // const createResult = await client.operations.wallet.findMyWallet({
    //   cachePolicy: CachePolicy.cache,
    // });
    // const cachedWallet = createResult.object;

    const localResult = await client.operations.wallet.findMyWallet({
      cachePolicy: CachePolicy.cache,
    });
    const cachedWallet = localResult.object;

    expect(localResult.error).toBeUndefined();
    expect(localResult.object).toBeTruthy();
    expect(cachedWallet.id).toBe(myUser.id);
  });

  test('should return the wallet from the network', async () => {
    const networkResult = await client.operations.wallet.findMyWallet({
      cachePolicy: CachePolicy.network,
    });
    const wallet = networkResult.object;

    expect(networkResult.error).toBeUndefined();
    expect(networkResult.object).toBeTruthy();
    expect(wallet.id).toBe(myUser.id);
  });
});
