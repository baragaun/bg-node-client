import { expect } from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';

const deleteMyUser = async (client: BgNodeClient): Promise<void> => {
  const deleteMyUserResponse = await client.operations.myUser.deleteMyUser(undefined, undefined, true);

  expect(deleteMyUserResponse.error).toBeUndefined();

  const clientInfo = await client.clientInfoStore.load();
  expect(clientInfo.myUserId).toBeUndefined();
  expect(clientInfo.authToken).toBeUndefined();
}

export default deleteMyUser;

