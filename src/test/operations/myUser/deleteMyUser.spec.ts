import { beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { uniqueEmail, uniqueUserHandle } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';

describe('operations.myUser.deleteMyUser', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  test('should delete the user and reset the client', async () => {
    const userHandle = uniqueUserHandle();
    const email = uniqueEmail();

    await client.operations.myUser.signUpUser({
      userHandle,
      email,
      isTestUser: true,
    });

    await deleteMyUserSpecHelper(client);

    const clientInfo = await client.clientInfoStore.load();

    expect(clientInfo.myUserId).toBeUndefined();
    expect(clientInfo.authToken).toBeUndefined();
    expect(clientInfo.localContentStatus).toBeUndefined();
    expect(clientInfo.remoteContentStatus).toBeUndefined();
    expect(clientInfo.sessionStartedAt).toBeUndefined();
    expect(clientInfo.sessionEndedAt).toBeUndefined();
  });
});
