import { describe, expect, test } from 'vitest';
import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import { testConfig } from '../../helpers/testConfig.js';
describe('operations.myUser.findAvailableUserHandle', () => {
    test('should return an available user handle', async () => {
        const client = await new BgNodeClient().init(testConfig);
        const email = chance.email();
        await client.operations.myUser.signUpUser({ email, isTestUser: true });
        const response = await client.operations.myUser.findAvailableUserHandle(email);
        console.log('available user handle:', { email, response });
        expect(response).toBeDefined();
        expect(response.length).toBeGreaterThan(3);
        const deleteMyUserResponse = await deleteMyUser(undefined, undefined, true);
        expect(deleteMyUserResponse.error).toBeUndefined();
        const config2 = data.config();
        expect(config2.myUserId).toBeNull();
        expect(config2.authToken).toBeNull();
    });
});
//# sourceMappingURL=findAvailableUserHandle.spec.js.map