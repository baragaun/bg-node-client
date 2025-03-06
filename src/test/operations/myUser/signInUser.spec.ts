import { describe, expect, test } from 'vitest';

import createClient from '../../../createClient.js';
import { UserIdentType } from '../../../fsdata/gql/graphql.js';
import chance from '../../../helpers/chance.js';
import findById from '../../../operations/findById.js';
import { ModelType } from '../../../types/enums.js';
import { MyUser } from '../../../types/models/MyUser.js';
import { testConfig } from '../../testConfig.js';

describe('signInUser', () => {
  test('should sign in a user with valid input', async () => {
    const client = await createClient(testConfig);

    const firstName = chance.first();
    const lastName = chance.last();
    const userHandle = chance.word();
    const password = chance.word();
    const email = chance.email();

    console.log('Test input:', { userHandle, email, password });

    const { object: signUpUserAuthResponse } = await client.operations.myUser.signUpUser({
      userHandle,
      firstName,
      lastName,
      email,
      password,
    });

    console.log('Sign Up User', signUpUserAuthResponse);

    await client.operations.myUser.signMeOut();

    const signInUserResponse = await client.operations.myUser.signInUser({
      ident: email,
      identType: UserIdentType.Email,
      password,
    });
    console.log('Sign In User', signInUserResponse);

    expect(signInUserResponse.error).toBeUndefined();
    expect(signInUserResponse.object.userAuthResponse).toBeDefined();
    expect(signInUserResponse.object.userAuthResponse.userId).toBeDefined();
    expect(signInUserResponse.object.myUser).toBeDefined();
    expect(signInUserResponse.object.myUser.id).toBeDefined();

    // Verifying the myUser object in the local cache/db:
    const findMyUserResult = await findById<MyUser>(
      signInUserResponse.object.userAuthResponse.userId,
      ModelType.MyUser,
    );

    expect(findMyUserResult.error).toBeUndefined();
    expect(findMyUserResult.object).toBeDefined();
    expect(findMyUserResult.object.id).toBe(signInUserResponse.object.userAuthResponse.userId);
    expect(findMyUserResult.object.userHandle).toBe(userHandle);
    expect(findMyUserResult.object.firstName).toBe(firstName);
    expect(findMyUserResult.object.lastName).toBe(lastName);
    expect(findMyUserResult.object.email).toBe(email);
  });
});
