import { describe, expect, test } from 'vitest';

import { uniqueEmail, uniqueUserHandle } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import deleteMyUser from '../../helpers/deleteMyUser.specHelper.js';

describe('operations.myUser.deleteMyUser', () => {
  test('should delete the user and reset the client', async () => {
    const client = await clientStore.getTestClient();
    const userHandle = uniqueUserHandle();
    const email = uniqueEmail();

    await client.operations.myUser.signUpUser({
      userHandle,
      email,
      isTestUser: true,
    });

    await deleteMyUser(client);

    const clientInfo = await client.clientInfoStore.load();

    expect(clientInfo.myUserId).toBeUndefined();
    expect(clientInfo.authToken).toBeUndefined();
    expect(clientInfo.localContentStatus).toBeUndefined();
    expect(clientInfo.remoteContentStatus).toBeUndefined();
    expect(clientInfo.sessionStartedAt).toBeUndefined();
    expect(clientInfo.sessionEndedAt).toBeUndefined();
  });
});
