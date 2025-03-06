import { describe, expect, test } from 'vitest';
import client from '../../../bgNodeClient.js';
import chance from '../../../helpers/chance.js';
import findById from '../../../operations/findById.js';
import { CachePolicy, ModelType } from '../../../types/enums.js';
import { testConfig } from '../../testConfig.js';
describe('signUpUser', () => {
    test('should sign up a user with valid input', async () => {
        await client.init(testConfig);
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = chance.word();
        const password = chance.word();
        const email = chance.email();
        console.log('Test input:', { userHandle, email, password });
        const signUpResponse = await client.operations.myUser.signUpUser({
            userHandle,
            firstName,
            lastName,
            email,
            password,
        });
        console.log('Sign Up User', signUpResponse);
        expect(signUpResponse.error).toBeUndefined();
        expect(signUpResponse.object).toBeDefined();
        expect(signUpResponse.object.userAuthResponse).toBeDefined();
        expect(signUpResponse.object.userAuthResponse.userId).toBeDefined();
        expect(signUpResponse.object.myUser).toBeDefined();
        expect(signUpResponse.object.myUser.userHandle).toBe(userHandle);
        expect(signUpResponse.object.myUser.firstName).toBe(firstName);
        expect(signUpResponse.object.myUser.lastName).toBe(lastName);
        expect(signUpResponse.object.myUser.email).toBe(email);
        const findMyUserResponse = await findById(signUpResponse.object.userAuthResponse.userId, ModelType.MyUser, {
            cachePolicy: CachePolicy.cache,
        });
        expect(findMyUserResponse.error).toBeUndefined();
        expect(findMyUserResponse.object).toBeDefined();
        expect(findMyUserResponse.object.userHandle).toBe(userHandle);
        expect(findMyUserResponse.object.firstName).toBe(firstName);
        expect(findMyUserResponse.object.lastName).toBe(lastName);
        expect(findMyUserResponse.object.email).toBe(email);
    });
});
//# sourceMappingURL=signUpUser.spec.js.map