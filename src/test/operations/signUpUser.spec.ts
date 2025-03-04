import { describe, expect, test } from 'vitest'

import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import { DbType, ModelType } from '../../types/enums.js';
import { init } from '../../index.js';
import { MyUser } from '../../types/index.js';
import findById from '../../operations/findById.js';
import chance from '../../helpers/chance.js';

const config: BgNodeClientConfig = {
  dbType: DbType.rxdb,
  inBrowser: false,
  debugMode: true,
}

describe('signUpUser', () => {
  test('should sign up a user with valid input', async () => {
    const client = await init(null, config);
    const userHandle = chance.word();
    const password = chance.word();
    const email = chance.email();

    const { object: user } = await client.signUpUser(
      userHandle,
      email,
      password,
    );

    const {
      object: reloadedUser,
      error,
    } = await findById<MyUser>(user.id, ModelType.MyUser)

    expect(error).toBeUndefined();
    expect(reloadedUser.id).toBe(user.id);
    expect(reloadedUser.userHandle).toBe(userHandle);
    expect(reloadedUser.email).toBe(email);
  });
});
