import { expect } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import { MyUser } from '../../../models/MyUser.js';

export const blockUserForMeSpecHelper = async (
  userId: string,
  reasonTextId: string | undefined,
  notes: string | undefined,
  client: BgNodeClient,
): Promise<MyUser> => {
  logger.debug('BgServiceApiCheck.blockUserForMe: calling API/blockUserForMe',
    { userId, reasonTextId, notes });

  const response = await client.operations.myUser.blockUserForMe(userId, reasonTextId, notes);

  logger.debug('BgServiceApiCheck.blockUserForMe: received response from blockUserForMe',
    { updateUserResponse: response });

  expect(response).toBeDefined();
  expect(response.error).toBeUndefined();
  expect(response.object.id).toBe(client.myUserId);
  expect(response.object.userBlocks).toBeDefined();
  expect(response.object.userBlocks.length).toBe(1);
  expect(response.object.userBlocks[0].userId).toBe(userId);
  expect(response.object.userBlocks[0].reasonTextId).toBe(reasonTextId);
  expect(response.object.userBlocks[0].notes).toBe(notes);

  // It should have also updated the cached object:
  const findMyUserFromCache1Result = await client.operations.myUser.findMyUser({
    cachePolicy: CachePolicy.cache,
  });
  const myUserFromCache1 = findMyUserFromCache1Result.object;

  expect(findMyUserFromCache1Result.error).toBeUndefined();
  expect(findMyUserFromCache1Result.object).toBeDefined();
  expect(myUserFromCache1.id).toBe(client.myUserId);
  expect(response.object.userBlocks).toBeDefined();
  expect(response.object.userBlocks.length).toBe(1);
  expect(response.object.userBlocks[0].userId).toBe(userId);
  expect(response.object.userBlocks[0].reasonTextId).toBe(reasonTextId);
  expect(response.object.userBlocks[0].notes).toBe(notes);

  if (!client.isInMockMode) {
    // Let's verify the object again, by pulling a fresh copy of it from the backend:
    const findMyUserFromNetworkResult = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.network,
    });
    const myUserFromNetwork = findMyUserFromNetworkResult.object;

    expect(findMyUserFromNetworkResult.error).toBeUndefined();
    expect(findMyUserFromNetworkResult.object).toBeDefined();
    expect(myUserFromNetwork.id).toBe(client.myUserId);
    expect(response.object.userBlocks).toBeDefined();
    expect(response.object.userBlocks.length).toBe(1);
    expect(response.object.userBlocks[0].userId).toBe(userId);
    expect(response.object.userBlocks[0].reasonTextId).toBe(reasonTextId);
    expect(response.object.userBlocks[0].notes).toBe(notes);

    const findMyUserFromCache2Result = await client.operations.myUser.findMyUser({
      cachePolicy: CachePolicy.cache,
    });
    const myUserFromCache2 = findMyUserFromCache2Result.object;

    expect(findMyUserFromCache2Result.error).toBeUndefined();
    expect(findMyUserFromCache2Result.object).toBeDefined();
    expect(myUserFromCache2.id).toBe(client.myUserId);
    expect(response.object.userBlocks).toBeDefined();
    expect(response.object.userBlocks.length).toBe(1);
    expect(response.object.userBlocks[0].userId).toBe(userId);
    expect(response.object.userBlocks[0].reasonTextId).toBe(reasonTextId);
    expect(response.object.userBlocks[0].notes).toBe(notes);
  }

  return response.object;
};
