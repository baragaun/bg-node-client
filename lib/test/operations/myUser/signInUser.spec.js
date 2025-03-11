import { describe, expect, test } from 'vitest';
import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, ModelType, UserIdentType } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import findById from '../../../operations/findById.js';
import { testConfig } from '../../helpers/testConfig.js';
describe('operations.myUser.signInUser', () => {
    test('should sign in a user with valid input', async () => {
        const client = await new BgNodeClient().init(testConfig);
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
            isTestUser: true,
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
            identType: UserIdentType.email,
            password,
        });
        expect(signInUserResponse.error).toBeUndefined();
        expect(signInUserResponse.object.userAuthResponse).toBeDefined();
        expect(signInUserResponse.object.userAuthResponse.userId).toBe(myUserId);
        expect(signInUserResponse.object.userAuthResponse.authToken.length).toBeGreaterThan(10);
        expect(signInUserResponse.object.myUser).toBeDefined();
        expect(signInUserResponse.object.myUser.id).toBeDefined();
        const config3 = data.config();
        expect(config3.myUserId).toBe(signInUserResponse.object.userAuthResponse.userId);
        expect(config3.authToken).not.toBeNull();
        expect(config3.myUserId).toBe(signInUserResponse.object.userAuthResponse.userId);
        expect(config3.authToken).toBe(signInUserResponse.object.userAuthResponse.authToken);
        expect(client.operations.myUser.isSignedIn()).toBeTruthy();
        // Verifying the myUser object in the local cache/db:
        const findMyUserResult = await findById(signInUserResponse.object.userAuthResponse.userId, ModelType.MyUser, { cachePolicy: CachePolicy.cache });
        expect(findMyUserResult.error).toBeUndefined();
        expect(findMyUserResult.object).toBeDefined();
        expect(findMyUserResult.object.id).toBe(myUserId);
        expect(findMyUserResult.object.userHandle).toBe(userHandle);
        expect(findMyUserResult.object.firstName).toBe(firstName);
        expect(findMyUserResult.object.lastName).toBe(lastName);
        expect(findMyUserResult.object.email).toBe(email);
        const config4 = data.config();
        expect(config4.myUserId).toBe(myUserId);
        expect(config4.authToken).toBe(signInUserResponse.object.userAuthResponse.authToken);
    });
});
//# sourceMappingURL=signInUser.spec.js.map