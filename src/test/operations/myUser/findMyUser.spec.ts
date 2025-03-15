import { describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import { testConfig } from '../../helpers/testConfig.js';

describe('operations.myUser.findMyUser', () => {
  test('should return the cached user from the local db', async () => {
    const client = await new BgNodeClient().init(testConfig);
    const userHandle = chance.word();
    const email = chance.email();

    const { object: signUpUserAuthResponse } =
      await client.operations.myUser.signUpUser({
        userHandle,
        email,
        isTestUser: true,
      });
    const myUserId = signUpUserAuthResponse.userAuthResponse.userId;

    const myUserFromCache = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.cache,
    });

    expect(myUserFromCache.id).toBe(myUserId);
    expect(myUserFromCache.userHandle).toBe(userHandle);
    expect(myUserFromCache.email).toBe(email);

    const myUserFromNetwork = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.network,
    });

    expect(myUserFromNetwork.id).toBe(client.myUserId);
    expect(myUserFromNetwork.userHandle).toBe(userHandle);
    expect(myUserFromNetwork.email).toBe(email);

    const deleteMyUserResponse = await deleteMyUser(undefined, undefined, true);

    expect(deleteMyUserResponse.error).toBeUndefined();

    const clientInfo = await client.clientInfoStore.load();
    expect(clientInfo.myUserId).toBeUndefined();
    expect(clientInfo.authToken).toBeUndefined();
  });
});
