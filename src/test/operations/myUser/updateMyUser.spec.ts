import { describe, expect, test } from 'vitest';

import { CachePolicy } from '../../../enums.js';
import chance, {
  uniqueEmail,
  uniqueUserHandle,
} from '../../../helpers/chance.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import getTestClient from '../../helpers/getTestClient.js';

describe('operations.myUser.updateMyUser', () => {
  test('should update the user', async () => {
    const client = await getTestClient();
    const firstName = chance.first();
    const lastName = chance.last();
    const newLastName = chance.last();
    const userHandle = uniqueUserHandle();
    const email = uniqueEmail();

    await client.operations.myUser.signUpUser({
      userHandle,
      firstName,
      lastName,
      email,
      isTestUser: true,
    });

    await client.operations.myUser.updateMyUser(
      {
        id: client.myUserId,
        lastName: newLastName,
      },
      { cachePolicy: CachePolicy.network },
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const myUserFromNetwork = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.network,
    });

    expect(myUserFromNetwork.id).toBe(client.myUserId);
    expect(myUserFromNetwork.userHandle).toBe(userHandle);
    expect(myUserFromNetwork.firstName).toBe(firstName);
    expect(myUserFromNetwork.lastName).toBe(newLastName);
    expect(myUserFromNetwork.email).toBe(email);

    const myUserFromCache = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.cache,
    });

    expect(myUserFromCache.id).toBe(client.myUserId);
    expect(myUserFromCache.userHandle).toBe(userHandle);
    expect(myUserFromCache.firstName).toBe(firstName);
    expect(myUserFromCache.lastName).toBe(newLastName);
    expect(myUserFromCache.email).toBe(email);

    // Deleting the user again:
    const deleteMyUserResponse = await deleteMyUser(undefined, undefined, true);

    expect(deleteMyUserResponse.error).toBeUndefined();

    const clientInfo = await client.clientInfoStore.load();
    expect(clientInfo.myUserId).toBeUndefined();
    expect(clientInfo.authToken).toBeUndefined();
  });
}, 60000);
