import { expect } from 'vitest';

import { verifyUserPropsSpecHelper } from './verifyUserProps.specHelper.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy, UserIdentType } from '../../enums.js';
import logger from '../../helpers/logger.js';

export const signMeInSpecHelper = async (
  email: string,
  password: string,
  client: BgNodeClient,
): Promise<void> => {
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
  const findMyUserFromCacheResult = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.cache,
  });
  const myUserFromCache = findMyUserFromCacheResult.object;

  expect(findMyUserFromCacheResult).toBeDefined();
  expect(findMyUserFromCacheResult.error).toBeUndefined();
  expect(findMyUserFromCacheResult.object).toBeDefined();

  verifyUserPropsSpecHelper(
    myUserFromCache,
    {
      id: signInUserResponse.object?.userAuthResponse?.userId,
      firstName: signInUserResponse.object?.userAuthResponse?.firstName,
      lastName: signInUserResponse.object?.userAuthResponse?.lastName,
      email,
    },
  );
};
