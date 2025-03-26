import { describe, expect, test } from 'vitest';

import { uniqueEmail, uniqueUserHandle } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';

describe('operations.myUser.startMySessionV2', () => {
  test.skip('should start the app session and return the content status', async () => {
    const client = await clientStore.getTestClient();
    const userHandle = uniqueUserHandle();
    const email = uniqueEmail();

    await client.operations.myUser.signUpUser({
      userHandle,
      email,
      isTestUser: true,
    });
    const clientInfo1 = await client.clientInfoStore.load();

    expect(clientInfo1.sessionStartedAt).toBeUndefined();
    expect(clientInfo1.sessionEndedAt).toBeUndefined();
    expect(client.operations.myUser.isSessionActive()).toBeFalsy();

    await client.operations.myUser.startMySessionV2();

    const clientInfo2 = await client.clientInfoStore.load();

    expect(clientInfo2.remoteContentStatus).toBeDefined();
    expect(clientInfo2.remoteContentStatus.myUserUpdatedAt).toBeGreaterThan(Date.now() - 1000);
    expect(clientInfo2.sessionStartedAt).toBeGreaterThan(Date.now() - 1000);
    expect(clientInfo2.sessionEndedAt).toBeUndefined();
    expect(client.operations.myUser.isSessionActive()).toBeTruthy();

    await deleteMyUserSpecHelper(client);
  });
});
