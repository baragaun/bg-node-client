import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { ReportUserReasonTextId } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { createMultipleUsersSpecHelper } from '../../helpers/user/createMultipleUsers.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { reportUserForMeSpecHelper } from '../../helpers/user/reportUserForMe.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
describe('operations.myUser.reportUserForMe', () => {
    let client;
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
        await reportUserForMeSpecHelper(users[1].id, reasonTextId, messageText, client);
        expect(true).toBeTruthy();
    });
}, 60000);
//# sourceMappingURL=reportUserForMe.spec.js.map