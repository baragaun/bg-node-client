import { expect } from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy } from '../../enums.js';
import logger from '../../helpers/logger.js';
import { MyUser } from '../../models/MyUser.js';

export const unblockUserForMeSpecHelper = async (
  userId: string,
  client: BgNodeClient,
): Promise<MyUser> => {
  logger.debug('BgServiceApiCheck.blockUserForMe: calling API/blockUserForMe',
    { userId });

  const findMyUserResult = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.cache,
  });

  expect(findMyUserResult.error).toBeUndefined();
  expect(findMyUserResult.object).toBeDefined();

  const myUser = findMyUserResult.object;
  const oldUserBlockCount = myUser.userBlocks ? myUser.userBlocks.length : 0;

  const response = await client.operations.myUser.unblockUserForMe(
    userId,
    { cachePolicy: CachePolicy.network },
  );

  logger.debug('BgServiceApiCheck.blockUserForMe: received response from blockUserForMe',
    { updateUserResponse: response });

  expect(response).toBeDefined();
  expect(response.error).toBeUndefined();
  expect(response.object.id).toBe(client.myUserId);
  expect(response.object.userBlocks).toBeDefined();
  expect(response.object.userBlocks.length).toBe(oldUserBlockCount - 1);

  if (Array.isArray(response.object.userBlocks) && response.object.userBlocks.length > 0) {
    expect(response.object.userBlocks.filter(b => b.userId === userId).length).toBe(0);
  }

  // It should have also updated the cached object:
  const findMyUserFromCache1Result = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.cache,
  });
  const myUserFromCache1 = findMyUserFromCache1Result.object;

  expect(findMyUserFromCache1Result.error).toBeUndefined();
  expect(findMyUserFromCache1Result.object).toBeDefined();
  expect(myUserFromCache1.id).toBe(client.myUserId);
  expect(myUserFromCache1.userBlocks.length).toBe(oldUserBlockCount - 1);

  if (Array.isArray(myUserFromCache1.userBlocks) && myUserFromCache1.userBlocks.length > 0) {
    expect(myUserFromCache1.userBlocks.filter(b => b.userId === userId).length).toBe(0);
  }

  // Let's verify the object again, by pulling a fresh copy of it from the backend:
  const findMyUserFromNetworkResult = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.network,
  });
  const myUserFromNetwork = findMyUserFromNetworkResult.object;

  expect(findMyUserFromNetworkResult.error).toBeUndefined();
  expect(findMyUserFromNetworkResult.object).toBeDefined();
  expect(myUserFromNetwork.id).toBe(client.myUserId);
  expect(myUserFromNetwork.userBlocks.length).toBe(oldUserBlockCount - 1);

  if (Array.isArray(myUserFromNetwork.userBlocks) && myUserFromNetwork.userBlocks.length > 0) {
    expect(myUserFromNetwork.userBlocks.filter(b => b.userId === userId).length).toBe(0);
  }

  const findMyUserFromCacheResult = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.cache,
  });
  const myUserFromCache2 = findMyUserFromCacheResult.object;

  expect(findMyUserFromCacheResult.error).toBeUndefined();
  expect(findMyUserFromCacheResult.object).toBeDefined();
  expect(myUserFromCache2.id).toBe(client.myUserId);
  expect(myUserFromCache2.userBlocks.length).toBe(oldUserBlockCount - 1);

  if (Array.isArray(myUserFromCache2.userBlocks) && myUserFromCache2.userBlocks.length > 0) {
    expect(myUserFromCache2.userBlocks.filter(b => b.userId === userId).length).toBe(0);
  }

  return myUserFromCache2;
};
