import { expect } from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';

export const deleteMyUserSpecHelper = async (client: BgNodeClient): Promise<void> => {
  const deleteMyUserResponse = await client.operations.myUser.deleteMyUser(undefined, undefined, true);

  expect(deleteMyUserResponse.error).toBeUndefined();

  const clientInfo = await client.clientInfoStore.load();

  expect(clientInfo.isSignedIn).toBeFalsy();
  expect(clientInfo.authToken).toBeUndefined();
  expect(clientInfo.localContentStatus).toBeUndefined();
  expect(clientInfo.remoteContentStatus).toBeUndefined();
  expect(clientInfo.sessionStartedAt).toBeUndefined();
  expect(clientInfo.sessionEndedAt).toBeUndefined();
}
