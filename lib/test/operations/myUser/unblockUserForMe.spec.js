import { afterEach, beforeAll, describe, test } from 'vitest';
import chance from '../../../helpers/chance.js';
import { blockUserForMeSpecHelper } from '../../helpers/blockUserForMe.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { createMultipleUsersSpecHelper } from '../../helpers/createMultipleUsers.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';
import { unblockUserForMeSpecHelper } from '../../helpers/unblockUserForMe.specHelper.js';
describe('operations.myUser.unblockUserForMe', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should remove a UserBlock object from myUser', async () => {
        const notes = chance.sentence();
        const reasonTextId = chance.word();
        const users = await createMultipleUsersSpecHelper(2, client);
        await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);
        await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
        await unblockUserForMeSpecHelper(users[1].id, client);
    });
    test('should remove a UserBlock object from myUser (mock mode)', async () => {
        client.enableMockMode = true;
        const notes = chance.sentence();
        const reasonTextId = chance.word();
        const users = await createMultipleUsersSpecHelper(2, client);
        await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);
        await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
        await unblockUserForMeSpecHelper(users[1].id, client);
    });
}, 60000);
//# sourceMappingURL=unblockUserForMe.spec.js.map