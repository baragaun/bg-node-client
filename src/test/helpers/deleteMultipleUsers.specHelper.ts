import { expect } from 'vitest';

import { deleteMyUserSpecHelper } from './deleteMyUser.specHelper.js';
import { signMeInSpecHelper } from './signMeIn.specHelper.js';
import { BgNodeClient } from '../../BgNodeClient.js';
import { MyUser } from '../../models/MyUser.js';

export const deleteMultipleUsersSpecHelper = async (
  users: MyUser[],
  client: BgNodeClient,
): Promise<boolean> => {
  for (let i = 0; i < 2; i++) {
    const signInResult = await signMeInSpecHelper(
      users[i].email as string,
      users[i].adminNotes as string,
      client,
    );
    expect(signInResult).toBeTruthy();
    expect(await deleteMyUserSpecHelper(client)).toBeTruthy();
  }

  return true;
};
