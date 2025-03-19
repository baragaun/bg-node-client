import { describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import chance, { uniqueEmail, uniqueUserHandle, } from '../../../helpers/chance.js';
import deleteMyUser from '../../helpers/deleteMyUser.specHelper.js';
import getTestClient from '../../helpers/getTestClient.js';
describe('signUpUser', () => {
    test('should sign up a user with valid input', async () => {
        const client1 = await getTestClient();
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
        expect(client1.clientInfoStore.get().authToken).toBe(signUpResponse.object.userAuthResponse.authToken);
        expect(client1.myUserDeviceUuid).toBe(myUserDeviceUuid);
        expect(client1.operations.myUser.isSignedIn()).toBeTruthy();
        // Reloading the client info:
        const clientInfo1 = await client1.clientInfoStore.load();
        expect(clientInfo1.myUserId).toBe(myUserId);
        expect(clientInfo1.authToken).toBe(signUpResponse.object.userAuthResponse.authToken);
        expect(clientInfo1.myUserDeviceUuid).toBe(myUserDeviceUuid);
        expect(client1.operations.myUser.isSignedIn()).toBeTruthy();
        await client1.clientInfoStore.persist();
        // Closing the client to simulate the closing of the app:
        await (async () => {
            return new Promise((resolve) => {
                client1.close(resolve);
            });
        })();
        // Creating a new client to verify the user info has been persisted:
        const client2 = await getTestClient(true);
        const clientInfo2 = await client2.clientInfoStore.load();
        expect(clientInfo2.myUserId).toBe(myUserId);
        expect(clientInfo2.authToken).toBe(signUpResponse.object.userAuthResponse.authToken);
        expect(clientInfo2.myUserDeviceUuid).toBe(myUserDeviceUuid);
        expect(client2.operations.myUser.isSignedIn()).toBeTruthy();
        // Verifying the cached user:
        const findMyUserResponse = await client2.operations.myUser.findMyUser({ cachePolicy: CachePolicy.network });
        expect(findMyUserResponse).toBeDefined();
        expect(findMyUserResponse.userHandle).toBe(userHandle);
        expect(findMyUserResponse.firstName).toBe(firstName);
        expect(findMyUserResponse.lastName).toBe(lastName);
        expect(findMyUserResponse.email).toBe(email);
        await deleteMyUser(client2);
    });
}, 120000);
//# sourceMappingURL=signUpUser.spec.js.map