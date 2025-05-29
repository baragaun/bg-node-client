import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { ReportUserReasonTextId } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { createMultipleUsersSpecHelper } from '../../helpers/createMultipleUsers.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { reportUserForMeSpecHelper } from '../../helpers/reportUserForMe.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';

describe('operations.myUser.reportUserForMe', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

  test('should report another user', async () => {
    const reasonTextId = ReportUserReasonTextId.fakePerson;
    const messageText = chance.sentence();

    const users = await createMultipleUsersSpecHelper(2, client);

    await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);

    await reportUserForMeSpecHelper(
      users[1].id,
      reasonTextId,
      messageText,
      client,
    );

    expect(true).toBeTruthy();
  });
}, 60000);
