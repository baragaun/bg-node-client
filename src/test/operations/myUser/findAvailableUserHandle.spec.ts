import { describe, expect, test } from 'vitest';

import { uniqueEmail } from '../../../helpers/chance.js';
import logger from '../../../helpers/logger.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import getTestClient from '../../helpers/getTestClient.js';

describe('operations.myUser.findAvailableUserHandle', () => {
  test('should return an available user handle', async () => {
    const client = await getTestClient();
    const email = uniqueEmail();

    await client.operations.myUser.signUpUser({ email, isTestUser: true });

    const response =
      await client.operations.myUser.findAvailableUserHandle(email);

    logger.debug('available user handle:', { email, response });
    expect(response).toBeDefined();
    expect(response.length).toBeGreaterThan(3);

    const deleteMyUserResponse = await deleteMyUser(undefined, undefined, true);

    expect(deleteMyUserResponse.error).toBeUndefined();

    const clientInfo = await client.clientInfoStore.load();
    expect(clientInfo.myUserId).toBeUndefined();
    expect(clientInfo.authToken).toBeUndefined();
  });
});
