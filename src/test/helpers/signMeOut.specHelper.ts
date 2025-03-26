import { expect } from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy } from '../../enums.js';
import logger from '../../helpers/logger.js';

export const signMeOutSpecHelper = async (
  client: BgNodeClient,
): Promise<boolean> => {
  logger.debug('BgServiceApiCheck.signMeOut: calling API/signMeOut');

  await client.operations.myUser.signMeOut();

  const clientInfo = await client?.clientInfoStore.load();
  expect(clientInfo.myUserId).toBeUndefined();
  expect(clientInfo.authToken).toBeUndefined();

  try {
    // Verifying the local user object:
    const myUserFromCache = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.cache,
    });

    expect(myUserFromCache).toBeUndefined();
  } catch {
    // ignore
  }

  expect(client.isSignedIn).toBeFalsy();
  expect(client.myUserId).toBeUndefined();

  return true;
};
