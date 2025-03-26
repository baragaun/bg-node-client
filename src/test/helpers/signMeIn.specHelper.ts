import { expect } from 'vitest';

import logger from '../../helpers/logger.js';
import { UserProps } from '../types.js';
import { verifyUserPropsSpecHelper } from './verifyUserProps.specHelper.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy, UserIdentType } from '../../enums.js';

export const signMeInSpecHelper = async (
  email: string,
  password: string,
  client: BgNodeClient,
): Promise<boolean> => {
  logger.debug('BgServiceApiCheck.signMeIn: calling API/signInUser');

  const signInUserResponse = await client.operations.myUser.signInUser({
    ident: email as string,
    identType: UserIdentType.email,
    password,
  });

  logger.debug('BgServiceApiCheck.signMeIn: received response', { signInUserResponse });

  expect(signInUserResponse).toBeDefined();
  expect(signInUserResponse.error).toBeUndefined();
  expect(signInUserResponse.object).toBeDefined();
  expect(signInUserResponse.object.userAuthResponse).toBeDefined();
  expect(signInUserResponse.object.userAuthResponse.userId).toBeDefined();
  expect(signInUserResponse.object.userAuthResponse.authToken).toBeDefined();
  expect(signInUserResponse.object.myUser.id).toBe(signInUserResponse.object?.userAuthResponse?.userId);
  expect(client.isSignedIn).toBeTruthy();
  expect(client.myUserId).toBe(signInUserResponse.object?.userAuthResponse?.userId);

  const clientInfo = await client?.clientInfoStore.load();
  expect(clientInfo.myUserId).toBeDefined();
  expect(clientInfo.authToken).toBeDefined();
  expect(clientInfo.myUserDeviceUuid).toBeDefined();

  // Verifying the local user object:
  const myUserFromCache = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.cache,
  });

  verifyUserPropsSpecHelper(
    myUserFromCache as Partial<UserProps>,
    {
      id: signInUserResponse.object?.userAuthResponse?.userId,
      firstName: signInUserResponse.object?.userAuthResponse?.firstName,
      lastName: signInUserResponse.object?.userAuthResponse?.lastName,
      email,
    },
  );

  return true;
};
