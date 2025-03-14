import { describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import { testConfig } from '../../helpers/testConfig.js';

describe('operations.myUser.updateMyUser', () => {
  test('should update the user', async () => {
    const client = await new BgNodeClient().init(testConfig);
    const firstName = chance.first();
    const lastName = chance.last();
    const newLastName = chance.last();
    const userHandle = chance.word();
    const email = chance.email();

    await client.operations.myUser.signUpUser({
      userHandle,
      firstName,
      lastName,
      email,
      isTestUser: true,
    });

    await client.operations.myUser.updateMyUser(
      {
        id: testConfig.myUserId,
        lastName: newLastName,
      },
      { cachePolicy: CachePolicy.network },
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const myUserFromNetwork = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.network,
    });

    expect(myUserFromNetwork.id).toBe(testConfig.myUserId);
    expect(myUserFromNetwork.userHandle).toBe(userHandle);
    expect(myUserFromNetwork.firstName).toBe(firstName);
    expect(myUserFromNetwork.lastName).toBe(newLastName);
    expect(myUserFromNetwork.email).toBe(email);

    const myUserFromCache = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.cache,
    });

    expect(myUserFromCache.id).toBe(testConfig.myUserId);
    expect(myUserFromCache.userHandle).toBe(userHandle);
    expect(myUserFromCache.firstName).toBe(firstName);
    expect(myUserFromCache.lastName).toBe(newLastName);
    expect(myUserFromCache.email).toBe(email);

    // Deleting the user again:
    const deleteMyUserResponse = await deleteMyUser(undefined, undefined, true);

    expect(deleteMyUserResponse.error).toBeUndefined();

    const config = data.config();
    expect(config.myUserId).toBeNull();
    expect(config.authToken).toBeNull();
  });
}, 60000);
