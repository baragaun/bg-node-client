import { describe, expect, test } from 'vitest';
import { CachePolicy, ModelType, UserIdentType } from '../../../enums.js';
import findById from '../../../operations/findById.js';
import clientStore from '../../helpers/clientStore.js';
import { createMultipleUsersSpecHelper } from '../../helpers/user/createMultipleUsers.specHelper.js';
import { deleteMultipleUsersSpecHelper } from '../../helpers/user/deleteMultipleUsers.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeOutSpecHelper } from '../../helpers/user/signMeOut.specHelper.js';
describe('operations.myUser.signInUser', () => {
    test('handles multiple users', async () => {
        const client = await clientStore.getTestClient();
        const users = await createMultipleUsersSpecHelper(2, client);
        // Signing in as one of the two users in a semi random order:
        const sessionUsers = [
            users[1],
            users[0],
            users[1],
            users[1],
            users[0],
        ];
        for (const user of sessionUsers) {
            const signInUserResponse = await client.operations.myUser.signInUser({
                ident: user.email,
                identType: UserIdentType.email,
                password: getTestUserPropsSpecHelper(user).password,
            });
            const myUserId = signInUserResponse.object.userAuthResponse.userId;
            expect(signInUserResponse.error).toBeUndefined();
            expect(signInUserResponse.object.userAuthResponse).toBeTruthy();
            expect(signInUserResponse.object.userAuthResponse.authToken.length).toBeGreaterThan(10);
            expect(signInUserResponse.object.myUser).toBeTruthy();
            expect(signInUserResponse.object.myUser.id).toBeTruthy();
            const clientInfo3 = await client.clientInfoStore.load();
            expect(clientInfo3.myUserId).toBe(signInUserResponse.object.userAuthResponse.userId);
            expect(clientInfo3.authToken).not.toBeNull();
            expect(clientInfo3.myUserId).toBe(signInUserResponse.object.userAuthResponse.userId);
            expect(clientInfo3.authToken).toBe(signInUserResponse.object.userAuthResponse.authToken);
            expect(client.isSignedIn).toBeTruthy();
            // Verifying the myUser object in the local cache/db:
            const findMyUserResult = await findById(signInUserResponse.object.userAuthResponse.userId, ModelType.MyUser, { cachePolicy: CachePolicy.cache });
            expect(findMyUserResult.error).toBeUndefined();
            expect(findMyUserResult.object).toBeTruthy();
            expect(findMyUserResult.object.id).toBe(myUserId);
            expect(findMyUserResult.object.userHandle).toBe(user.userHandle);
            expect(findMyUserResult.object.firstName).toBe(user.firstName);
            expect(findMyUserResult.object.lastName).toBe(user.lastName);
            expect(findMyUserResult.object.email).toBe(user.email);
            const clientInfo4 = await client.clientInfoStore.load();
            expect(clientInfo4.myUserId).toBe(myUserId);
            expect(clientInfo4.authToken).toBe(signInUserResponse.object.userAuthResponse.authToken);
            await signMeOutSpecHelper(client);
        }
        await deleteMultipleUsersSpecHelper(users, client);
    });
}, 100000);
//# sourceMappingURL=handlesMultipleUsers.spec.js.map