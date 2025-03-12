import { describe, expect, test } from 'vitest';
import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy, MultiStepActionEventType, MultiStepActionResult, UserIdentType, } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import { testConfig } from '../../helpers/testConfig.js';
describe('operations.myUser.resetMyPassword', () => {
    test('should verify a correct token', async () => {
        const client = await new BgNodeClient().init(testConfig);
        // Set up test user
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = chance.word();
        const password = chance.word();
        const newPassword = chance.word();
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
        const config1 = data.config();
        expect(config1.myUserId).toBe(signUpUserAuthResponse.userAuthResponse.userId);
        expect(config1.authToken).toBe(signUpUserAuthResponse.userAuthResponse.authToken);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Start sign in process
        const response1 = await client.operations.myUser.resetMyPassword(email, {
            polling: { enabled: true },
        });
        expect(response1.error).toBeUndefined();
        expect(response1.object).toBeDefined();
        expect(response1.object.actionProgress).toBeDefined();
        expect(response1.object.run).toBeDefined();
        expect(response1.object.error).toBeUndefined();
        const actionId = response1.object.actionProgress.actionId;
        const actionRun = response1.object.run;
        // Add listener
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
                        const verifyResponse = await client.operations.multiStepAction.verifyMultiStepActionToken(actionId, token, newPassword);
                        expect(verifyResponse.error).toBeUndefined();
                        expect(verifyResponse.object).toBeDefined();
                        expect(verifyResponse.object.actionId).toBe(actionId);
                        return;
                    }
                    if (eventType === MultiStepActionEventType.tokenFailed) {
                        // The token was rejected; we try again with the correct token
                        const verifyResponse = await client.operations.multiStepAction.verifyMultiStepActionToken(actionId, token, newPassword);
                        expect(verifyResponse.error).toBeUndefined();
                        expect(verifyResponse.object).toBeDefined();
                        expect(verifyResponse.object.actionId).toBe(actionId);
                        return;
                    }
                    if (eventType === MultiStepActionEventType.success) {
                        // The token was accepted
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
                        expect(myUser.id).toBe(testConfig.myUserId);
                        expect(myUser.userHandle).toBe(userHandle);
                        expect(myUser.firstName).toBe(firstName);
                        expect(myUser.lastName).toBe(lastName);
                        expect(myUser.email).toBe(email);
                        expect(Date.now() - new Date(myUser.passwordUpdatedAt).getTime()).toBeLessThan(10000);
                        // Verify the email has been marked as confirmed on the cached user object:
                        const myUserFromCache = await client.operations.myUser.findMyUser({
                            cachePolicy: CachePolicy.network,
                        });
                        expect(myUserFromCache.id).toBe(myUserId);
                        expect(myUserFromCache.id).toBe(testConfig.myUserId);
                        expect(myUserFromCache.userHandle).toBe(userHandle);
                        expect(myUserFromCache.firstName).toBe(firstName);
                        expect(myUserFromCache.lastName).toBe(lastName);
                        expect(myUserFromCache.email).toBe(email);
                        expect(Date.now() - new Date(myUser.passwordUpdatedAt).getTime()).toBeLessThan(10000);
                        // Signing out the user, so we can test to sign in again with the new password:
                        await client.operations.myUser.signMeOut();
                        const config2 = data.config();
                        expect(config2.myUserId).toBeNull();
                        expect(config2.authToken).toBeNull();
                        // Signing in with the new password:
                        const signInUserResponse = await client.operations.myUser.signInUser({
                            ident: email,
                            identType: UserIdentType.email,
                            password: newPassword,
                        });
                        expect(signInUserResponse.error).toBeUndefined();
                        expect(signInUserResponse.object.userAuthResponse).toBeDefined();
                        expect(signInUserResponse.object.userAuthResponse.userId).toBe(myUserId);
                        expect(signInUserResponse.object.userAuthResponse.authToken.length).toBeGreaterThan(10);
                        expect(signInUserResponse.object.myUser).toBeDefined();
                        expect(signInUserResponse.object.myUser.id).toBe(myUserId);
                        expect(signInUserResponse.object.myUser.userHandle).toBe(userHandle);
                        expect(signInUserResponse.object.myUser.firstName).toBe(firstName);
                        expect(signInUserResponse.object.myUser.lastName).toBe(lastName);
                        expect(signInUserResponse.object.myUser.email).toBe(email);
                        resolve(true);
                    }
                },
            });
        });
    });
}, 60000);
//# sourceMappingURL=resetMyPassword.spec.js.map