import { expect } from 'vitest';

import { signMeOutSpecHelper } from './signMeOut.specHelper.js';
import { verifyUserPropsSpecHelper } from './verifyUserProps.specHelper.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy } from '../../enums.js';
import chance from '../../helpers/chance.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';
import { MyUserChanges } from '../../models/MyUserChanges.js';
import { SignUpUserInput } from '../../types/SignUpUserInput.js';
import userFactory from '../factories/user.js';

export const signMeUpSpecHelper = async (
  changes: Partial<MyUserChanges> | undefined,
  signOut: boolean,
  client: BgNodeClient,
): Promise<MyUser | null> => {
  logger.debug('BgServiceApiCheck.createMyUser: calling client.signUpUser', { changes });

  // The calling scope may have sent a password. There is no way to tell the factory to use
  // it, since there is no User.password defined. We'll ignore the password from the factory.
  const password = changes?.newPassword || chance.string({ length: 8 });
  changes = userFactory.build(changes);

  const input: SignUpUserInput = {
    firstName: changes.firstName,
    lastName: changes.lastName,
    userHandle: changes.userHandle,
    email: changes.email,
    password,
    source: JSON.stringify({
      password,
      msaToken: '666666',
    }),
    isTestUser: true,
  };

  const signUpUserAuthResponse = await client.operations.myUser.signUpUser(input);

  logger.debug('BgServiceApiCheck.signMeUp: received signUpUser response',
    { signUpUserAuthResponse });
  if (signUpUserAuthResponse.error) {
    logger.error('BgServiceApiCheck.signMeUp: signUpUser error', { signUpUserAuthResponse });
  }

  expect(signUpUserAuthResponse.error).toBeUndefined();
  expect(signUpUserAuthResponse.object).toBeDefined();

  const authResponse = signUpUserAuthResponse.object.userAuthResponse;
  const myUserId = authResponse.userId;

  expect(authResponse).toBeDefined();
  expect(myUserId).toBeDefined();
  expect(authResponse.authToken).toBeDefined();

  const clientInfo1 = await client?.clientInfoStore.load();
  expect(clientInfo1.myUserId).toBeDefined();
  expect(clientInfo1.myUserId).toBe(signUpUserAuthResponse.object.userAuthResponse.userId);
  expect(clientInfo1.authToken).toBeDefined();
  expect(clientInfo1.authToken).toBe(signUpUserAuthResponse.object.userAuthResponse.authToken);
  expect(clientInfo1.myUserDeviceUuid).toBeDefined();
  expect(client.isSignedIn).toBeTruthy();

  // Verifying the local user object:
  const findMyUserResult = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.cache,
  });
  const myUser = findMyUserResult.object;

  expect(findMyUserResult.error).toBeUndefined();
  expect(findMyUserResult.object).toBeDefined();
  expect(myUser).toBeDefined();

  verifyUserPropsSpecHelper(
    myUser as Partial<MyUser>,
    {
      firstName: input.firstName,
      lastName: input.lastName,
      userHandle: input.userHandle,
      email: input.email,
      source: input.source,
    },
  );

  if (signOut) {
    await signMeOutSpecHelper(client);
  }

  return myUser;
};
