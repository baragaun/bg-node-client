import { describe, expect, test } from 'vitest';
import client from '../../../bgNodeClient.js';
import { UserIdentType } from '../../../fsdata/gql/graphql.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import findById from '../../../operations/findById.js';
import { CachePolicy, ModelType } from '../../../types/enums.js';
import { testConfig } from '../../testConfig.js';
describe('signInUser', () => {
    test('should sign in a user with valid input', async () => {
        await client.init(testConfig);
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = chance.word();
        const password = chance.word();
        const email = chance.email();
        console.log('Test input:', { userHandle, email, password });
        const { object: signUpUserAuthResponse } = await client.operations.myUser.signUpUser({
            userHandle,
            firstName,
            lastName,
            email,
            password,
        });
        const myUserId = signUpUserAuthResponse.userAuthResponse.userId;
        const config1 = data.config();
        expect(config1.myUserId).toBe(signUpUserAuthResponse.userAuthResponse.userId);
        expect(config1.authToken).toBe(signUpUserAuthResponse.userAuthResponse.authToken);
        console.log('Sign Up User', signUpUserAuthResponse);
        await client.operations.myUser.signMeOut();
        const config2 = data.config();
        expect(config2.myUserId).toBeNull();
        expect(config2.authToken).toBeNull();
        const signInUserResponse = await client.operations.myUser.signInUser({
            ident: email,
            identType: UserIdentType.Email,
            password,
        });
        const config3 = data.config();
        expect(config3.myUserId).toBe(signInUserResponse.object.userAuthResponse.userId);
        expect(config3.authToken).not.toBeNull();
        expect(signInUserResponse.error).toBeUndefined();
        expect(signInUserResponse.object.userAuthResponse).toBeDefined();
        expect(signInUserResponse.object.userAuthResponse.userId).toBe(myUserId);
        expect(signInUserResponse.object.myUser).toBeDefined();
        expect(signInUserResponse.object.myUser.id).toBeDefined();
        // Verifying the myUser object in the local cache/db:
        const findMyUserResult = await findById(signInUserResponse.object.userAuthResponse.userId, ModelType.MyUser, { cachePolicy: CachePolicy.cache });
        expect(findMyUserResult.error).toBeUndefined();
        expect(findMyUserResult.object).toBeDefined();
        expect(findMyUserResult.object.id).toBe(myUserId);
        expect(findMyUserResult.object.userHandle).toBe(userHandle);
        expect(findMyUserResult.object.firstName).toBe(firstName);
        expect(findMyUserResult.object.lastName).toBe(lastName);
        expect(findMyUserResult.object.email).toBe(email);
    });
});
//# sourceMappingURL=signInUser.spec.js.map