import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.myUser.verifyMyPassword', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('returns true for the correct password', async () => {
    const myUser = await signMeUpSpecHelper(undefined, false, client);

    const response = await client.operations.myUser.verifyMyPassword(
      getTestUserPropsSpecHelper(myUser).password,
    );

    expect(response).toBeDefined();
    expect(response.error).toBeUndefined();
    expect(response.object).toBe('true');
  });

  test('returns false for the incorrect password', async () => {
    const client = await clientStore.getTestClient();
    await signMeUpSpecHelper(undefined, false, client);

    const response = await client.operations.myUser.verifyMyPassword(
      'invalid',
    );

    expect(response).toBeDefined();
    expect(response.error).toBeUndefined();
    expect(response.object).toBe('false');
  });
});
