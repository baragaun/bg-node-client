import { beforeAll, describe, expect, test } from 'vitest';
import signMeOut from '../../../operations/myUser/signMeOut.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe('operations.findUserById', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    test('should find my user on the network', async () => {
        const otherUser = await signMeUpSpecHelper(undefined, false, client);
        const otherUserPassword = getTestUserPropsSpecHelper(otherUser).password;
        await signMeOut();
        await signMeUpSpecHelper(undefined, false, client);
        const response = await client.operations.user.findUserById(otherUser.id);
        const reloadedUser = response.object;
        expect(response.error).toBeUndefined();
        expect(response.object).toBeDefined();
        expect(reloadedUser.id).toBe(otherUser.id);
        expect(reloadedUser.userHandle).toBe(otherUser.userHandle);
        expect(reloadedUser.firstName).toBe(otherUser.firstName);
        expect(reloadedUser.lastName).toBe(otherUser.lastName);
        await deleteMyUserSpecHelper(client);
        // Cleanup for otherUser:
        await signMeInSpecHelper(otherUser.email, otherUserPassword, client);
        await deleteMyUserSpecHelper(client);
    });
}, 100000);
//# sourceMappingURL=findUserById.spec.js.map