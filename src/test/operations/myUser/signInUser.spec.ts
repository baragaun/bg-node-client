import { describe, expect, test } from 'vitest';

import { ModelType } from '../../../types/enums.js';
import { MyUser } from '../../../types/models/MyUser.js';
import { testConfig } from '../../testConfig.js';
import chance from '../../../helpers/chance.js';
import createClient from '../../../createClient.js';
import findById from '../../../operations/findById.js';
import { UserIdentType } from '../../../fsdata/gql/graphql.js';

describe('signInUser', () => {
  test('should sign in a user with valid input', async () => {
    const client = await createClient(testConfig);

    const userHandle = chance.word();
    const password = chance.word();
    const email = chance.email();

    console.log('Test input:', { userHandle, email, password });

    const { object: signUpUserAuthResponse } = await client.operations.myUser.signUpUser(userHandle, email, password);

    console.log('Sign Up User', signUpUserAuthResponse);

    const { object: signInUserAuthResponse } = await client.operations.myUser.signInUser(
      email,
      UserIdentType.Email,
      password,
    );
    console.log('Sign In User', signInUserAuthResponse);

    const { object: reloadedUser, error } = await findById<MyUser>(signInUserAuthResponse.userId, ModelType.MyUser);

    expect(error).toBeUndefined();
    expect(reloadedUser.id).toBe(signInUserAuthResponse.userId);
    // expect(reloadedUser.userHandle).toBe(userHandle);
    // expect(reloadedUser.email).toBe(email);
  });
});
