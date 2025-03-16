import { describe, expect, test } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import chance, { uniqueEmail, uniqueUserHandle, } from '../../../helpers/chance.js';
import findById from '../../../operations/findById.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import { getTestClient } from '../../helpers/getTestClient.js';
describe('signUpUser', () => {
    test('should sign up a user with valid input', async () => {
        const client = await getTestClient();
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        const password = chance.word();
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
        const clientInfo1 = await client.clientInfoStore.load();
        expect(clientInfo1.myUserId).toBe(signUpResponse.object.userAuthResponse.userId);
        expect(clientInfo1.authToken).toBe(signUpResponse.object.userAuthResponse.authToken);
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
        const clientInfo2 = await client.clientInfoStore.load();
        expect(clientInfo2.myUserId).toBeUndefined();
        expect(clientInfo2.authToken).toBeUndefined();
    });
});
//# sourceMappingURL=signUpUser.spec.js.map