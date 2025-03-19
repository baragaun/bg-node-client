import { describe, expect, test } from 'vitest';

import { uniqueEmail } from '../../../helpers/chance.js';
import deleteMyUser from '../../helpers/deleteMyUser.specHelper.js';
import getTestClient from '../../helpers/getTestClient.js';

describe('operations.myUser.findAvailableUserHandle', () => {
  test('should return an available user handle', async () => {
    const client = await getTestClient();
    const email = uniqueEmail();

    await client.operations.myUser.signUpUser({ email, isTestUser: true });

    const response = await client.operations.myUser.findAvailableUserHandle(email);

    expect(response).toBeDefined();
    expect(response.length).toBeGreaterThan(3);

    await deleteMyUser(client);
  });
});
