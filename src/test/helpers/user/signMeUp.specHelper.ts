import { expect } from 'vitest';

import { signMeOutSpecHelper } from './signMeOut.specHelper.js';
import { verifyUserPropsSpecHelper } from './verifyUserProps.specHelper.js';
import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';
import { MyUserChanges } from '../../../models/MyUserChanges.js';
import { SignUpUserInput } from '../../../types/SignUpUserInput.js';
import userFactory from '../../factories/user.js';

export const signMeUpSpecHelper = async (
  props: Partial<MyUserChanges> | undefined,
  signOut: boolean,
  client: BgNodeClient,
): Promise<MyUser | null> => {
  logger.debug('BgServiceApiCheck.createMyUser: calling client.signUpUser', { props });

  // The calling scope may have sent a password. There is no way to tell the factory to use
  // it, since there is no User.password defined. We'll ignore the password from the factory.
  const password = props?.newPassword || chance.string({ length: 8 });
  props = userFactory.build(props);

  const input: SignUpUserInput = {
    firstName: props.firstName,
    lastName: props.lastName,
    userHandle: props.userHandle,
    email: props.email,
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
  expect(signUpUserAuthResponse.object).toBeTruthy();

  const authResponse = signUpUserAuthResponse.object.userAuthResponse;
  const myUserId = authResponse.userId;

  expect(authResponse).toBeTruthy();
  expect(myUserId).toBeTruthy();
  expect(authResponse.authToken).toBeTruthy();

  const clientInfo1 = await client?.clientInfoStore.load();
  expect(clientInfo1.myUserId).toBeTruthy();
  expect(clientInfo1.myUserId).toBe(signUpUserAuthResponse.object.userAuthResponse.userId);
  expect(clientInfo1.authToken).toBeTruthy();
  expect(clientInfo1.authToken).toBe(signUpUserAuthResponse.object.userAuthResponse.authToken);
  expect(clientInfo1.myUserDeviceUuid).toBeTruthy();
  expect(client.isSignedIn).toBeTruthy();

  // Verifying the local user object:
  const findMyUserResult = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.cache,
  });
  const myUser = findMyUserResult.object;

  expect(findMyUserResult.error).toBeUndefined();
  expect(findMyUserResult.object).toBeTruthy();
  expect(myUser).toBeTruthy();

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
