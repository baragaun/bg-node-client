import { describe, expect, test } from 'vitest';
import { CachePolicy, ModelType, UserIdentType } from '../../../enums.js';
import chance, { uniqueEmail, uniqueUserHandle, } from '../../../helpers/chance.js';
import logger from '../../../helpers/logger.js';
import findById from '../../../operations/findById.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
describe('operations.myUser.signInUser', () => {
    test('should sign in a user with valid input', async () => {
        const client = await clientStore.getTestClient();
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        const password = chance.word();
        const { object: signUpUserAuthResponse } = await client.operations.myUser.signUpUser({
            userHandle,
            firstName,
            lastName,
            email,
            password,
            isTestUser: true,
        });
        const myUserId = signUpUserAuthResponse.userAuthResponse.userId;
        const clientInfo1 = await client.clientInfoStore.load();
        expect(clientInfo1.myUserId).toBe(signUpUserAuthResponse.userAuthResponse.userId);
        expect(clientInfo1.authToken).toBe(signUpUserAuthResponse.userAuthResponse.authToken);
        logger.debug('Sign Up User', signUpUserAuthResponse);
        await client.operations.myUser.signMeOut();
        const clientInfo2 = await client.clientInfoStore.load();
        expect(clientInfo2.myUserId).toBeUndefined();
        expect(clientInfo2.authToken).toBeUndefined();
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
        const clientInfo3 = await client.clientInfoStore.load();
        expect(clientInfo3.myUserId).toBe(signInUserResponse.object.userAuthResponse.userId);
        expect(clientInfo3.authToken).not.toBeNull();
        expect(clientInfo3.myUserId).toBe(signInUserResponse.object.userAuthResponse.userId);
        expect(clientInfo3.authToken).toBe(signInUserResponse.object.userAuthResponse.authToken);
        expect(client.isSignedIn).toBeTruthy();
        // Verifying the myUser object in the local cache/db:
        const findMyUserResult = await findById(signInUserResponse.object.userAuthResponse.userId, ModelType.MyUser, { cachePolicy: CachePolicy.cache });
        expect(findMyUserResult.error).toBeUndefined();
        expect(findMyUserResult.object).toBeDefined();
        expect(findMyUserResult.object.id).toBe(myUserId);
        expect(findMyUserResult.object.userHandle).toBe(userHandle);
        expect(findMyUserResult.object.firstName).toBe(firstName);
        expect(findMyUserResult.object.lastName).toBe(lastName);
        expect(findMyUserResult.object.email).toBe(email);
        const clientInfo4 = await client.clientInfoStore.load();
        expect(clientInfo4.myUserId).toBe(myUserId);
        expect(clientInfo4.authToken).toBe(signInUserResponse.object.userAuthResponse.authToken);
        await deleteMyUserSpecHelper(client);
    });
});
//# sourceMappingURL=signInUser.spec.js.map