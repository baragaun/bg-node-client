import { afterEach, describe, test } from 'vitest';
import chance from '../../../helpers/chance.js';
import { blockUserForMeSpecHelper } from '../../helpers/blockUserForMe.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { createMultipleUsersSpecHelper } from '../../helpers/createMultipleUsers.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';
describe('operations.myUser.blockUserForMe', () => {
    let client;
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should add a UserBlock object to myUser', async () => {
        client = await clientStore.getTestClient(true);
        const notes = chance.sentence();
        const reasonTextId = chance.word();
        const users = await createMultipleUsersSpecHelper(2, client);
        await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);
        await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
    });
    test('should add a UserBlock object to myUser (mock mode)', async () => {
        client = await clientStore.getTestClient();
        client.enableMockMode = true;
        const notes = chance.sentence();
        const reasonTextId = chance.word();
        const users = await createMultipleUsersSpecHelper(2, client);
        await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);
        await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
    });
}, 60000);
//# sourceMappingURL=blockUserForMe.spec.js.map