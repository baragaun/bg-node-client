import { expect } from 'vitest';

import { verifyUserPropsSpecHelper } from './verifyUserProps.specHelper.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy } from '../../enums.js';
import { MyUserInput } from '../../fsdata/gql/graphql.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';

export const updateMyUserSpecHelper = async (
  changes: Partial<MyUserInput>,
  client: BgNodeClient,
): Promise<boolean> => {
  logger.debug('BgServiceApiCheck.updateMyUser: calling API/updateMyUser',
    { changes });

  logger.debug('BgServiceApiCheck.updateMyUser: calling API/updateMyUser');

  const updateUserResponse = await client.operations.myUser.updateMyUser(
    changes as unknown as Partial<MyUser>,
  );

  logger.debug('BgServiceApiCheck.updateMyUser: received response from updateMyUser',
    { updateUserResponse });

  expect(updateUserResponse).toBeDefined();
  expect(updateUserResponse.error).toBeUndefined();
  expect(updateUserResponse.object).toBeDefined();

  verifyUserPropsSpecHelper(
    updateUserResponse.object as Partial<MyUser>,
    changes as unknown as Partial<MyUser>,
  );

  // Verifying the local user object:
  const findMyUserFromCacheResult = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.cache,
  });

  if (findMyUserFromCacheResult.error || !findMyUserFromCacheResult.object) {
    logger.error('BgServiceApiCheck.updateMyUser: failed to find my user from cache',
      { findMyUserFromCacheResult });
    return false; // Indicate failure
  }

  const myUserFromCache = findMyUserFromCacheResult.object;

  expect(myUserFromCache?.id).toBe(changes.id);

  verifyUserPropsSpecHelper(
    updateUserResponse.object as Partial<MyUser>,
    changes as unknown as Partial<MyUser>,
  );

  if (!client.isInMockMode) {
    // Verifying the remote user object:
    const findMyUserFromNetworkResult = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.network,
    });

    expect(findMyUserFromNetworkResult).toBeDefined();
    expect(findMyUserFromNetworkResult.error).toBeUndefined();
    expect(findMyUserFromNetworkResult.object?.id).toBe(changes.id);

    verifyUserPropsSpecHelper(
      updateUserResponse.object as Partial<MyUser>,
      changes as unknown as Partial<MyUser>,
    );
  }

  return true;
};
