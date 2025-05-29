import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import { MyUser } from '../../../models/MyUser.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.myUser.findMyInbox', () => {
  let client: BgNodeClient;
  let myUser: MyUser;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
    myUser = await signMeUpSpecHelper(undefined, false, client);
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  afterAll(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should return the remote user inbox', async () => {
    const response = await client.operations.myUser.findMyInbox({
      cachePolicy: CachePolicy.network,
    });
    const userInbox = response.object;

    expect(response.error).toBeUndefined();
    expect(response.object).toBeDefined();
    // expect(userInbox.userId).toBe(myUser.id); // <-- todo: fix; why is userInbox.userId an empty string?
    expect(userInbox.channels.userId).toBe(myUser.id);
  });
});
