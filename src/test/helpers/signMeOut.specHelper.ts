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
    // Verifying we can no longer pull the local user object:
    const response = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.cache,
    });

    expect(response.error).toBe('unauthorized');
  } catch {
    // ignore
  }

  expect(client.isSignedIn).toBeFalsy();
  expect(client.myUserId).toBeUndefined();

  return true;
};
