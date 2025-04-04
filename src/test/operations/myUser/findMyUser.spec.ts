import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.myUser.findMyUser', () => {
  let client: BgNodeClient;
  let myUser: MyUser;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should return the cached user from the local db', async () => {
    const findMyUserFromCacheResult = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.cache,
    });
    const myUserFromCache = findMyUserFromCacheResult.object;

    expect(findMyUserFromCacheResult.error).toBeUndefined();
    expect(findMyUserFromCacheResult.object).toBeDefined();
    expect(myUserFromCache.id).toBe(myUser.id);
    expect(myUserFromCache.userHandle).toBe(myUser.userHandle);
    expect(myUserFromCache.email).toBe(myUser.email);
  });

  test('should return the cached user from the local db', async () => {
    const findMyUserFromNetworkResult = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.network,
    });
    const myUserFromNetwork = findMyUserFromNetworkResult.object;

    expect(findMyUserFromNetworkResult.error).toBeUndefined();
    expect(findMyUserFromNetworkResult.object).toBeDefined();
    expect(myUserFromNetwork.id).toBe(myUser.id);
    expect(myUserFromNetwork.userHandle).toBe(myUser.userHandle);
    expect(myUserFromNetwork.email).toBe(myUser.email);
  });
});
