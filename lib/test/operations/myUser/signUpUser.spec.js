import { describe, expect, test } from 'vitest';
import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import findById from '../../../operations/findById.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import { testConfig } from '../../helpers/testConfig.js';
describe('signUpUser', () => {
    test('should sign up a user with valid input', async () => {
        const client = await new BgNodeClient().init(testConfig);
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = chance.word();
        const password = chance.word();
        const email = chance.email();
        const signUpResponse = await client.operations.myUser.signUpUser({
            userHandle,
            firstName,
            lastName,
            email,
            password,
            isTestUser: true,
        });
        expect(signUpResponse.error).toBeUndefined();
        expect(signUpResponse.object).toBeDefined();
        expect(signUpResponse.object.userAuthResponse).toBeDefined();
        expect(signUpResponse.object.userAuthResponse.userId).toBeDefined();
        expect(signUpResponse.object.myUser).toBeDefined();
        expect(signUpResponse.object.myUser.userHandle).toBe(userHandle);
        expect(signUpResponse.object.myUser.firstName).toBe(firstName);
        expect(signUpResponse.object.myUser.lastName).toBe(lastName);
        expect(signUpResponse.object.myUser.email).toBe(email);
        const config = data.config();
        expect(config.myUserId).toBe(signUpResponse.object.userAuthResponse.userId);
        expect(config.authToken).toBe(signUpResponse.object.userAuthResponse.authToken);
        expect(client.operations.myUser.isSignedIn()).toBeTruthy();
        const findMyUserResponse = await findById(signUpResponse.object.userAuthResponse.userId, ModelType.MyUser, {
            cachePolicy: CachePolicy.cache,
        });
        expect(findMyUserResponse.error).toBeUndefined();
        expect(findMyUserResponse.object).toBeDefined();
        expect(findMyUserResponse.object.userHandle).toBe(userHandle);
        expect(findMyUserResponse.object.firstName).toBe(firstName);
        expect(findMyUserResponse.object.lastName).toBe(lastName);
        expect(findMyUserResponse.object.email).toBe(email);
        const deleteMyUserResponse = await deleteMyUser(undefined, undefined, true);
        expect(deleteMyUserResponse.error).toBeUndefined();
        const config2 = data.config();
        expect(config2.myUserId).toBeNull();
        expect(config2.authToken).toBeNull();
    });
});
//# sourceMappingURL=signUpUser.spec.js.map