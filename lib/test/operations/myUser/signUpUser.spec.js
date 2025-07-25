import { describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import chance, { uniqueEmail, uniqueUserHandle, } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
describe('signUpUser', () => {
    test('should sign up a user with valid input', async () => {
        const client1 = await clientStore.getTestClient();
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        const password = chance.word();
        const myUserDeviceUuid = client1.myUserDeviceUuid;
        const signUpResponse = await client1.operations.myUser.signUpUser({
            userHandle,
            firstName,
            lastName,
            email,
            password,
            isTestUser: true,
        });
        const myUserId = signUpResponse.object.userAuthResponse.userId;
        const clientInfo1 = client1.clientInfoStore.clientInfo;
        expect(signUpResponse.error).toBeUndefined();
        expect(signUpResponse.object).toBeDefined();
        expect(signUpResponse.object.userAuthResponse).toBeDefined();
        expect(myUserId).toBeDefined();
        expect(signUpResponse.object.myUser).toBeDefined();
        expect(signUpResponse.object.myUser.userHandle).toBe(userHandle);
        expect(signUpResponse.object.myUser.firstName).toBe(firstName);
        expect(signUpResponse.object.myUser.lastName).toBe(lastName);
        expect(signUpResponse.object.myUser.email).toBe(email);
        // Before reloading the client info:
        expect(client1.myUserId).toBe(myUserId);
        expect(client1.isSignedIn).toBeTruthy();
        expect(clientInfo1.myUserId).toBe(myUserId);
        expect(clientInfo1.authToken).toBe(signUpResponse.object.userAuthResponse.authToken);
        expect(clientInfo1.myUserDeviceUuid).toBe(myUserDeviceUuid);
        // Reloading the client info:
        const clientInfo2 = await client1.clientInfoStore.load();
        expect(client1.myUserId).toBe(myUserId);
        expect(client1.isSignedIn).toBeTruthy();
        expect(clientInfo2.myUserId).toBe(myUserId);
        expect(clientInfo2.authToken).toBe(signUpResponse.object.userAuthResponse.authToken);
        expect(clientInfo2.myUserDeviceUuid).toBe(myUserDeviceUuid);
        await client1.clientInfoStore.save();
        const clientInfo3 = await client1.clientInfoStore.clientInfo;
        expect(client1.myUserId).toBe(myUserId);
        expect(client1.isSignedIn).toBeTruthy();
        expect(clientInfo3.myUserId).toBe(myUserId);
        expect(clientInfo3.authToken).toBe(signUpResponse.object.userAuthResponse.authToken);
        expect(clientInfo3.myUserDeviceUuid).toBe(myUserDeviceUuid);
        // Closing the client to simulate the closing of the app:
        await (async () => {
            return new Promise((resolve) => {
                client1.close(resolve);
            });
        })();
        // Creating a new client to verify the user info has been persisted:
        const client2 = await clientStore.getTestClient(true);
        const clientInfo4 = await client2.clientInfoStore.load();
        expect(client2.myUserId).toBe(myUserId);
        expect(client2.isSignedIn).toBeTruthy();
        expect(clientInfo4.myUserId).toBe(myUserId);
        expect(clientInfo4.authToken).toBe(signUpResponse.object.userAuthResponse.authToken);
        expect(clientInfo4.myUserDeviceUuid).toBe(myUserDeviceUuid);
        // Verifying the cached user:
        const findMyUserResponse = await client2.operations.myUser.findMyUser({ cachePolicy: CachePolicy.network });
        expect(findMyUserResponse).toBeDefined();
        expect(findMyUserResponse.error).toBeUndefined();
        expect(findMyUserResponse.object).toBeDefined();
        expect(findMyUserResponse.object.userHandle).toBe(userHandle);
        expect(findMyUserResponse.object.firstName).toBe(firstName);
        expect(findMyUserResponse.object.lastName).toBe(lastName);
        expect(findMyUserResponse.object.email).toBe(email);
        await deleteMyUserSpecHelper(client2);
    });
}, 120000);
//# sourceMappingURL=signUpUser.spec.js.map