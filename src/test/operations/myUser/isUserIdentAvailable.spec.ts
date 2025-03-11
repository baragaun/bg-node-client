import { describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { UserIdentType } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import { testConfig } from '../../helpers/testConfig.js';

describe('operations.myUser.isUserIdentAvailable', () => {
  test('should return true for an available email', async () => {
    const email = chance.email();

    const client = await new BgNodeClient().init(testConfig);

    const result = await client.operations.myUser.isUserIdentAvailable(email, UserIdentType.email);

    expect(result).toBeTruthy();
  });

  test('should return false for an email that is already taken', async () => {
    const client = await new BgNodeClient().init(testConfig);

    const userHandle = chance.word();
    const email = chance.email();

    let resultEmail = await client.operations.myUser.isUserIdentAvailable(
      email,
      UserIdentType.email,
    );
    let resultUserHandle = await client.operations.myUser.isUserIdentAvailable(
      userHandle,
      UserIdentType.userHandle,
    );

    expect(resultEmail).toBeTruthy();
    expect(resultUserHandle).toBeTruthy();

    await client.operations.myUser.signUpUser({
      userHandle,
      email,
      isTestUser: true,
    });

    resultEmail = await client.operations.myUser.isUserIdentAvailable(email, UserIdentType.email);
    resultUserHandle = await client.operations.myUser.isUserIdentAvailable(
      userHandle,
      UserIdentType.userHandle,
    );

    expect(resultEmail).toBeFalsy();
    expect(resultUserHandle).toBeFalsy();
  });
});
