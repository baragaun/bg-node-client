import { describe, expect, test } from 'vitest';

import { ReportUserReasonTextId } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { createMultipleUsersSpecHelper } from '../../helpers/createMultipleUsers.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { reportUserForMeSpecHelper } from '../../helpers/reportUserForMe.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';

describe('operations.myUser.reportUserForMe', () => {
  test('should report another user', async () => {
    const client = await clientStore.getTestClient();
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

    // Deleting the user again:
    await deleteMyUserSpecHelper(client);
  });
}, 60000);
