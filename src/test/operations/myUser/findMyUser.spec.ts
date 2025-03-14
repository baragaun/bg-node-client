import { describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import db from '../../../db/db.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import { MyUser } from '../../../types/models/MyUser.js';
import userFactory from '../../factories/user.js';
import { testConfig } from '../../helpers/testConfig.js';

describe('operations.myUser.findMyUser', () => {
  test('should return the cached user from the local db', async () => {
    const client = await new BgNodeClient().init(testConfig);
    const userHandle = chance.word();
    const email = chance.email();

    let user = await userFactory.build({
      userHandle,
      email,
    });
    const saveResult = await db.insert<MyUser>(new MyUser(user));
    user = saveResult.object;
    data.config().myUserId = user.id;

    const myUser = await client.operations.myUser.findMyUser({ cachePolicy: CachePolicy.cache });

    expect(myUser.id).toBe(user.id);
    expect(myUser.userHandle).toBe(userHandle);
    expect(myUser.email).toBe(email);
  });

  test('should return the user from the remote API', async () => {
    const client = await new BgNodeClient().init(testConfig);
    const firstName = chance.first();
    const lastName = chance.last();
    const userHandle = chance.word();
    const email = chance.email();

    await client.operations.myUser.signUpUser({
      userHandle,
      firstName,
      lastName,
      email,
      isTestUser: true,
    });

    const myUser = await client.operations.myUser.findMyUser({ cachePolicy: CachePolicy.network });

    expect(myUser.id).toBe(testConfig.myUserId);
    expect(myUser.userHandle).toBe(userHandle);
    expect(myUser.firstName).toBe(firstName);
    expect(myUser.lastName).toBe(lastName);
    expect(myUser.email).toBe(email);

    const deleteMyUserResponse = await deleteMyUser(undefined, undefined, true);

    expect(deleteMyUserResponse.error).toBeUndefined();

    const config2 = data.config();
    expect(config2.myUserId).toBeNull();
    expect(config2.authToken).toBeNull();
  });
});
