import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { uniqueEmail } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
describe('operations.myUser.findAvailableUserHandle', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should return an available user handle', async () => {
        const email = uniqueEmail();
        await client.operations.myUser.signUpUser({ email, isTestUser: true });
        const response = await client.operations.myUser.findAvailableUserHandle(email);
        expect(response).toBeDefined();
        expect(response.error).toBeUndefined();
        expect(response.object.length).toBeGreaterThan(3);
    });
});
//# sourceMappingURL=findAvailableUserHandle.spec.js.map