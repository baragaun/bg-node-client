import { describe, expect, test } from 'vitest';

import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.myUser.verifyMyPassword', () => {
  test('returns true for the correct password', async () => {
    const client = await clientStore.getTestClient();
    const myUser = await signMeUpSpecHelper(undefined, false, client);

    const response = await client.operations.myUser.verifyMyPassword(
      getTestUserPropsSpecHelper(myUser).password,
    );

    expect(response).toBeDefined();
    expect(response.error).toBeUndefined();
    expect(response.object).toBeTruthy();

    await deleteMyUserSpecHelper(client);
  });

  test('returns false for the incorrect password', async () => {
    const client = await clientStore.getTestClient();
    await signMeUpSpecHelper(undefined, false, client);

    const response = await client.operations.myUser.verifyMyPassword(
      'invalid',
    );

    expect(response).toBeDefined();
    expect(response.error).toBeUndefined();
    expect(response.object).toBeTruthy();

    await deleteMyUserSpecHelper(client);
  });
});
