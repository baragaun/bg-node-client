import { afterEach, describe, expect, test } from 'vitest';
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
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should remove a UserBlock object from myUser', async () => {
        client = await clientStore.getTestClient(true);
        const notes = chance.sentence();
        const reasonTextId = chance.word();
        const users = await createMultipleUsersSpecHelper(2, client);
        await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);
        await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
        const response = await unblockUserForMeSpecHelper(users[1].id, client);
        expect(response).toBeDefined();
    });
    test('should remove a UserBlock object from myUser (mock mode)', async () => {
        await new Promise((resolve) => { setTimeout(resolve, 1000); });
        client = await clientStore.getTestClient(true, true);
        const notes = chance.sentence();
        const reasonTextId = chance.word();
        const users = await createMultipleUsersSpecHelper(2, client);
        await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);
        await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
        const response = await unblockUserForMeSpecHelper(users[1].id, client);
        expect(response).toBeDefined();
    });
}, 60000);
//# sourceMappingURL=unblockUserForMe.spec.js.map