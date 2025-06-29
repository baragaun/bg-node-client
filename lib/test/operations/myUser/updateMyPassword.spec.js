import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy, UserIdentType } from '../../../enums.js';
import chance, { uniqueEmail, uniqueUserHandle, } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
describe('operations.myUser.updateMyPassword', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should update the password', async () => {
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        const oldPassword = chance.string({ length: 10 });
        const newPassword = chance.string({ length: 10 });
        await client.operations.myUser.signUpUser({
            userHandle,
            firstName,
            lastName,
            email,
            password: oldPassword,
            isTestUser: true,
        });
        const updateResult = await client.operations.myUser.updateMyPassword(oldPassword, newPassword, { cachePolicy: CachePolicy.network });
        expect(updateResult).toBeDefined();
        expect(updateResult.error).toBeUndefined();
        expect(updateResult.object.id).toBe(client.myUserId);
        expect(updateResult.object.lastName).toBe(lastName);
        await client.operations.myUser.signMeOut();
        const clientInfo = await client.clientInfoStore.load();
        expect(client.myUserId).toBeUndefined();
        expect(clientInfo.myUserId).toBeUndefined();
        expect(clientInfo.authToken).toBeUndefined();
        const signInUserResponse = await client.operations.myUser.signInUser({
            ident: email,
            identType: UserIdentType.email,
            password: newPassword,
        });
        expect(signInUserResponse.error).toBeUndefined();
        expect(signInUserResponse.object.userAuthResponse).toBeDefined();
        expect(signInUserResponse.object.userAuthResponse.userId).toBe(client.myUserId);
        expect(signInUserResponse.object.userAuthResponse.authToken.length).toBeGreaterThan(10);
        expect(signInUserResponse.object.myUser).toBeDefined();
        expect(signInUserResponse.object.myUser.id).toBeDefined();
    });
});
//# sourceMappingURL=updateMyPassword.spec.js.map