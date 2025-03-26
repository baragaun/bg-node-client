import { describe, expect, test } from 'vitest';
import { uniqueEmail, uniqueUserHandle } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import deleteMyUser from '../../helpers/deleteMyUser.specHelper.js';
describe('operations.myUser.endMySession', () => {
    test('should end the app session and save sessionEndedAt', async () => {
        const client = await clientStore.getTestClient();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        await client.operations.myUser.signUpUser({
            userHandle,
            email,
            isTestUser: true,
        });
        const clientInfo1 = await client.clientInfoStore.load();
        expect(clientInfo1.sessionStartedAt).toBeUndefined();
        expect(clientInfo1.sessionEndedAt).toBeUndefined();
        expect(client.operations.myUser.isSessionActive()).toBeFalsy();
        await client.operations.myUser.endMySession();
        const clientInfo2 = await client.clientInfoStore.load();
        expect(clientInfo2.sessionStartedAt).toBeUndefined();
        expect(clientInfo2.sessionEndedAt).toBeGreaterThan(Date.now() - 1000);
        expect(client.operations.myUser.isSessionActive()).toBeFalsy();
        await deleteMyUser(client);
    });
});
//# sourceMappingURL=endMySession.spec.js.map