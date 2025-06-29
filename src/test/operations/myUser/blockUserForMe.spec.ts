import { afterEach, beforeAll, describe, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { blockUserForMeSpecHelper } from '../../helpers/user/blockUserForMe.specHelper.js';
import { createMultipleUsersSpecHelper } from '../../helpers/user/createMultipleUsers.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';

describe('operations.myUser.blockUserForMe', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should add a UserBlock object to myUser', async () => {
    const notes = chance.sentence();
    const reasonTextId = chance.word();

    const users = await createMultipleUsersSpecHelper(2, client);

    await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);
    await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
  });

  test('should add a UserBlock object to myUser (mock mode)', async () => {
    client.enableMockMode = true;
    const notes = chance.sentence();
    const reasonTextId = chance.word();

    const users = await createMultipleUsersSpecHelper(2, client);

    await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);
    await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
  });
}, 60000);
