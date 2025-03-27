import { describe, expect, test } from 'vitest';

import chance from '../../../helpers/chance.js';
import { blockUserForMeSpecHelper } from '../../helpers/blockUserForMe.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { createMultipleUsersSpecHelper } from '../../helpers/createMultipleUsers.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';
import { unblockUserForMeSpecHelper } from '../../helpers/unblockUserForMe.specHelper.js';
import { userPasswordSpecHelper } from '../../helpers/userPassword.specHelper.js';

describe('operations.myUser.unblockUserForMe', () => {
  test('should remove a UserBlock object from myUser', async () => {
    const client = await clientStore.getTestClient();
    const notes = chance.sentence();
    const reasonTextId = chance.word();

    const users = await createMultipleUsersSpecHelper(2, client);

    await signMeInSpecHelper(users[0].email, userPasswordSpecHelper(users[0]), client);

    await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
    const response = await unblockUserForMeSpecHelper(users[1].id, client);

    expect(response).toBeDefined();

    // Deleting the user again:
    await deleteMyUserSpecHelper(client);
  });
}, 60000);
