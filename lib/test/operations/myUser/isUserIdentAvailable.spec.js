import { describe, expect, test } from 'vitest';
import { UserIdentType } from '../../../enums.js';
import chance, { uniqueEmail, uniqueUserHandle } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
// @failing-in-set
describe('operations.myUser.isUserIdentAvailable', () => {
    test('should return false for an email that is already taken', async () => {
        const client = await clientStore.getTestClient();
        const userHandle1 = uniqueUserHandle();
        const userHandle2 = uniqueUserHandle();
        const email1 = uniqueEmail();
        const email2 = uniqueEmail();
        const password1 = chance.word({ length: 9 });
        const password2 = chance.word({ length: 9 });
        // Signing up user1:
        const signUpResponse1 = await client.operations.myUser.signUpUser({
            userHandle: userHandle1,
            email: email1,
            password: password1,
            isTestUser: true,
        });
        expect(signUpResponse1.error).toBeUndefined();
        expect(signUpResponse1.object).toBeDefined();
        expect(signUpResponse1.object.userAuthResponse).toBeDefined();
        expect(signUpResponse1.object.userAuthResponse.userId).toBeDefined();
        expect(signUpResponse1.object.myUser).toBeDefined();
        const user1 = signUpResponse1.object.myUser;
        // Signing out user1:
        await client.operations.myUser.signMeOut();
        // Signing up user2:
        const signUpResponse2 = await client.operations.myUser.signUpUser({
            userHandle: userHandle2,
            email: email2,
            password: password2,
            isTestUser: true,
        });
        expect(signUpResponse2.error).toBeUndefined();
        expect(signUpResponse2.object).toBeDefined();
        expect(signUpResponse2.object.userAuthResponse).toBeDefined();
        expect(signUpResponse2.object.userAuthResponse.userId).toBeDefined();
        expect(signUpResponse2.object.myUser).toBeDefined();
        // Testing any random email and userHandle - they should be available:
        const resultAvailableEmail = await client.operations.myUser.isUserIdentAvailable(uniqueEmail(), UserIdentType.email);
        const resultAvailableUserHandle = await client.operations.myUser.isUserIdentAvailable(chance.word(), UserIdentType.userHandle);
        expect(resultAvailableEmail.object).toBeTruthy();
        expect(resultAvailableUserHandle.object).toBeTruthy();
        // Testing the email and userHandle of the two existing users - they should be unavailable:
        const resultUnavailableEmail1 = await client.operations.myUser.isUserIdentAvailable(email1, UserIdentType.email);
        const resultUnavailableUserHandle1 = await client.operations.myUser.isUserIdentAvailable(userHandle1, UserIdentType.userHandle);
        expect(resultUnavailableEmail1.object).toBeFalsy();
        expect(resultUnavailableUserHandle1.object).toBeFalsy();
        const resultUnavailableEmail2 = await client.operations.myUser.isUserIdentAvailable(email2, UserIdentType.email);
        const resultUnavailableUserHandle2 = await client.operations.myUser.isUserIdentAvailable(userHandle2, UserIdentType.userHandle);
        expect(resultUnavailableEmail2.object).toBeFalsy();
        expect(resultUnavailableUserHandle2.object).toBeFalsy();
        // Deleting user2 (which is still signed in):
        await deleteMyUserSpecHelper(client);
        // Signing in user1, so that we can delete it, too:
        const signInUser1Response = await client.operations.myUser.signInUser({
            ident: email1,
            identType: UserIdentType.email,
            password: password1,
        });
        expect(signInUser1Response.error).toBeUndefined();
        expect(signInUser1Response.object.userAuthResponse).toBeDefined();
        expect(signInUser1Response.object.userAuthResponse.userId).toBe(user1.id);
        expect(signInUser1Response.object.userAuthResponse.authToken.length).toBeGreaterThan(10);
        expect(signInUser1Response.object.myUser).toBeDefined();
        expect(signInUser1Response.object.myUser.id).toBeDefined();
        expect(client.isSignedIn).toBeTruthy();
        const clientInfo2 = await client.clientInfoStore.load();
        expect(clientInfo2.myUserId).toBe(signInUser1Response.object.userAuthResponse.userId);
        expect(clientInfo2.authToken).not.toBeNull();
        expect(clientInfo2.myUserId).toBe(signInUser1Response.object.userAuthResponse.userId);
        expect(clientInfo2.authToken).toBe(signInUser1Response.object.userAuthResponse.authToken);
        // Deleting user1:
        await deleteMyUserSpecHelper(client);
    });
}, { timeout: 30000 });
//# sourceMappingURL=isUserIdentAvailable.spec.js.map