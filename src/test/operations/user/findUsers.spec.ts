import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import { User } from '../../../models/User.js';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

// @failing-in-set
describe('operations.user.findUsers', () => {
  let client: BgNodeClient;
  let count: number;
  const users: User[] = [];

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    for (let i = 0; i < count; i++) {
      const user = users[i];
      const password = getTestUserPropsSpecHelper(user).password;
      await signMeInSpecHelper(user.email, password, client);
      await deleteMyUserSpecHelper(client);
    }
  });

  test('returns users', async () => {
    count = 3;
    const name = new Date().getTime().toString();
    const propsList = [
      { firstName: chance.first(), lastName: chance.last() },
      { firstName: chance.first(), lastName: 'Lidlehupf' },
      { firstName: chance.first(), lastName: 'abcd' + name + 'efg' },
    ];

    for (let i = 0; i < count; i++) {
      const user = await signMeUpSpecHelper(propsList[i], true, client);
      users.push(user);
    }

    const searcher = users[0];
    const password = getTestUserPropsSpecHelper(searcher).password;
    await signMeInSpecHelper(searcher.email, password, client);

    // 1. Fetching users from the network:
    const queryResultFromNetwork = await client.operations.user.findUsers(
      { searchText: name},
      undefined,
      undefined,
      undefined,
      { cachePolicy: CachePolicy.network },
    );
    const usersFromNetwork = queryResultFromNetwork.objects;
    expect(queryResultFromNetwork.error).toBeUndefined();
    expect(usersFromNetwork.length).toEqual(1);

    await signMeOut();
  });
}, { timeout: 10000 });
