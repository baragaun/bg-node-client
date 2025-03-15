import { describe, expect, test } from 'vitest';
import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, MultiStepActionEventType, MultiStepActionResult, } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import { testConfig } from '../../helpers/testConfig.js';
describe('operations.myUser.verifyMyEmail', () => {
    test('should verify a correct token', async () => {
        const myUserDeviceUuid = 'ab29fb7f368a4b26bfc3add16bef0e23';
        const client = await new BgNodeClient().init(testConfig, undefined, myUserDeviceUuid);
        // Set up test user
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = chance.word();
        const password = chance.word();
        const email = chance.email();
        const token = '666666';
        const { object: signUpUserAuthResponse } = await client.operations.myUser.signUpUser({
            userHandle,
            firstName,
            lastName,
            email,
            password,
            isTestUser: true,
            source: `testtoken=${token}`, // this causes all confirmation tokens to be set to '666666'
        });
        const myUserId = signUpUserAuthResponse.userAuthResponse.userId;
        // Verify we are signed in:
        const clientInfo1 = await client.clientInfoStore.load();
        expect(clientInfo1.myUserId).toBe(signUpUserAuthResponse.userAuthResponse.userId);
        expect(clientInfo1.authToken).toBe(signUpUserAuthResponse.userAuthResponse.authToken);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Step 1: Start sign in process
        const signInResponse = await client.operations.myUser.verifyMyEmail(email, {
            polling: { enabled: true },
        });
        expect(signInResponse.error).toBeUndefined();
        expect(signInResponse.object).toBeDefined();
        expect(signInResponse.object.actionProgress).toBeDefined();
        expect(signInResponse.object.run).toBeDefined();
        expect(signInResponse.object.error).toBeUndefined();
        const actionId = signInResponse.object.actionProgress.actionId;
        const actionRun = signInResponse.object.run;
        // Step 2: Add listener
        return new Promise((resolve) => {
            actionRun.addListener({
                id: 'test-listener',
                onEvent: async (eventType, action) => {
                    expect(action.notificationResult).toBeDefined();
                    // Verify token
                    if (eventType === MultiStepActionEventType.notificationSent ||
                        eventType === MultiStepActionEventType.notificationFailed) {
                        expect(action.notificationResult).toBeDefined();
                        // Verify token with an invalid token:
                        const verifyResponse = await client.operations.multiStepAction.verifyMultiStepActionToken(actionId, token);
                        expect(verifyResponse.error).toBeUndefined();
                        expect(verifyResponse.object).toBeDefined();
                        expect(verifyResponse.object.actionId).toBe(actionId);
                        return;
                    }
                    if (eventType === MultiStepActionEventType.tokenFailed) {
                        // The token was rejected; we try again with the correct token
                        const verifyResponse = await client.operations.multiStepAction.verifyMultiStepActionToken(actionId, token);
                        expect(verifyResponse.error).toBeUndefined();
                        expect(verifyResponse.object).toBeDefined();
                        expect(verifyResponse.object.actionId).toBe(actionId);
                        return;
                    }
                    if (eventType === MultiStepActionEventType.success) {
                        // The token was accepted
                        // Verify final state
                        expect(action).toBeDefined();
                        expect(action.actionId).toBe(actionId);
                        expect(action.result).toBe(MultiStepActionResult.ok);
                        expect(action.userId).toBe(myUserId);
                        await new Promise((resolve) => setTimeout(resolve, 1000));
                        // Verify the email has been marked as confirmed on the remote user object:
                        const myUser = await client.operations.myUser.findMyUser({
                            cachePolicy: CachePolicy.network,
                        });
                        expect(myUser.id).toBe(myUserId);
                        expect(myUser.id).toBe(client.myUserId);
                        expect(myUser.userHandle).toBe(userHandle);
                        expect(myUser.firstName).toBe(firstName);
                        expect(myUser.lastName).toBe(lastName);
                        expect(myUser.email).toBe(email);
                        expect(myUser.isEmailVerified).toBeTruthy();
                        // Verify the email has been marked as confirmed on the cached user object:
                        const myUserFromCache = await client.operations.myUser.findMyUser({
                            cachePolicy: CachePolicy.network,
                        });
                        expect(myUserFromCache.id).toBe(myUserId);
                        expect(myUserFromCache.id).toBe(client.myUserId);
                        expect(myUserFromCache.userHandle).toBe(userHandle);
                        expect(myUserFromCache.firstName).toBe(firstName);
                        expect(myUserFromCache.lastName).toBe(lastName);
                        expect(myUserFromCache.email).toBe(email);
                        expect(myUserFromCache.isEmailVerified).toBeTruthy();
                        // Deleting the user again:
                        const deleteMyUserResponse = await deleteMyUser(undefined, undefined, true);
                        expect(deleteMyUserResponse.error).toBeUndefined();
                        const clientInfo2 = await client.clientInfoStore.load();
                        expect(clientInfo2.myUserId).toBeUndefined();
                        expect(clientInfo2.authToken).toBeUndefined();
                        resolve(true);
                    }
                },
            });
        });
    });
}, 60000);
//# sourceMappingURL=verifyMyEmail.spec.js.map