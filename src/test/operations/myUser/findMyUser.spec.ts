import { describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import db from '../../../db/db.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import { MyUser } from '../../../types/models/MyUser.js';
import userFactory from '../../factories/user.js';
import { testConfig } from '../../testConfig.js';

describe('findMyUser', () => {
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
});
