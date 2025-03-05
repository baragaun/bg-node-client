import { describe, expect, test } from 'vitest';
import { ModelType } from '../../../types/enums.js';
import { testConfig } from '../../testConfig.js';
import chance from '../../../helpers/chance.js';
import client from '../../../index.js';
import findById from '../../../operations/findById.js';
describe('signUpUser', () => {
    test('should sign up a user with valid input', async () => {
        const userHandle = chance.word();
        const password = chance.word();
        const email = chance.email();
        await client.init(testConfig);
        console.log('Test input:', { userHandle, email, password });
        const { object: userAuthResponse } = await client.operations.myUser.signUpUser(userHandle, email, password);
        console.log('Sign Up User', userAuthResponse);
        const { object: reloadedUser, error } = await findById(userAuthResponse.userId, ModelType.MyUser);
        expect(error).toBeUndefined();
        expect(reloadedUser.id).toBe(userAuthResponse.userId);
        expect(reloadedUser.userHandle).toBe(userHandle);
        expect(reloadedUser.email).toBe(email);
    });
});
//# sourceMappingURL=signUpUser.spec.js.map