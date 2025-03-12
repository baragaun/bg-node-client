import { describe, expect, test } from 'vitest';
import { BgNodeClient } from '../../../BgNodeClient.js';
import chance from '../../../helpers/chance.js';
import { testConfig } from '../../helpers/testConfig.js';
describe('operations.myUser.findAvailableUserHandle', () => {
    test('should return an available user handle', async () => {
        const client = await new BgNodeClient().init(testConfig);
        const email = chance.email();
        const response = await client.operations.myUser.findAvailableUserHandle(email);
        console.log('available user handle:', { email, response });
        expect(response).toBeDefined();
        expect(response.length).toBeGreaterThan(3);
    });
});
//# sourceMappingURL=findAvailableUserHandle.spec.js.map