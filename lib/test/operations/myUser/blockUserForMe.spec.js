import { describe, expect, test } from 'vitest';
import chance from '../../../helpers/chance.js';
import { blockUserForMeSpecHelper } from '../../helpers/blockUserForMe.specHelper.js';
import clientStore from '../../helpers/clientStore.js';
import { createMultipleUsersSpecHelper } from '../../helpers/createMultipleUsers.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/signMeIn.specHelper.js';
describe('operations.myUser.blockUserForMe', () => {
    test('should add a UserBlock object to myUser', async () => {
        const client = await clientStore.getTestClient();
        const notes = chance.sentence();
        const reasonTextId = chance.word();
        const users = await createMultipleUsersSpecHelper(2, client);
        await signMeInSpecHelper(users[0].email, getTestUserPropsSpecHelper(users[0]).password, client);
        const response = await blockUserForMeSpecHelper(users[1].id, reasonTextId, notes, client);
        expect(response).toBeDefined();
        // Deleting the user again:
        await deleteMyUserSpecHelper(client);
    });
}, 60000);
//# sourceMappingURL=blockUserForMe.spec.js.map