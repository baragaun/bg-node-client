import { beforeEach, describe, expect, test } from 'vitest';
import { ModelType } from '../../types/enums.js';
import { init } from '../../index.js';
import findById from '../../operations/findById.js';
import chance from '../../helpers/chance.js';
import { setConfig } from '../../graphql/utils/createGraffleClient.js';
import { testConfig } from '../testConfig.js';
describe('signUpUser', () => {
    beforeEach(() => {
        setConfig(testConfig);
    });
    test('should sign up a user with valid input', async () => {
        const client = await init(null, testConfig);
        const userHandle = chance.word();
        const password = chance.word();
        const email = chance.email();
        console.log('Test input:', { userHandle, email, password });
        const { object: user } = await client.signUpUser(userHandle, email, password);
        console.log('Sign Up User', user);
        const { object: reloadedUser, error, } = await findById(user.id, ModelType.MyUser);
        expect(error).toBeUndefined();
        expect(reloadedUser.id).toBe(user.id);
        expect(reloadedUser.userHandle).toBe(userHandle);
        expect(reloadedUser.email).toBe(email);
    });
});
//# sourceMappingURL=signUpUser.spec.js.map