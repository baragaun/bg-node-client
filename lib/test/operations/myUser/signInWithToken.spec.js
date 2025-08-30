import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { MultiStepActionEventType, MultiStepActionResult, NotificationMethod, } from '../../../enums.js';
import logger from '../../../helpers/logger.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe('operations.myUser.signInWithToken', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should verify using email and token', async () => {
        const myUser = await signMeUpSpecHelper(undefined, true, client);
        // Start sign in process
        const signInResponse = await client.operations.myUser.signInWithToken(myUser.email, {
            polling: { enabled: true, interval: 2000, timeout: 15 * 60 * 1000 },
        });
        expect(signInResponse).toBeTruthy();
        expect(signInResponse.error).toBeUndefined();
        expect(signInResponse.object).toBeTruthy();
        expect(signInResponse.object.actionProgress).toBeTruthy();
        expect(signInResponse.object.run).toBeTruthy();
        expect(signInResponse.object.error).toBeUndefined();
        const actionId = signInResponse.object.actionProgress.actionId;
        const actionRun = signInResponse.object.run;
        return new Promise((resolve) => {
            actionRun.addListener({
                id: 'test-listener',
                onEvent: async (eventType, action) => {
                    logger.debug('signInWithToken.spec.onEvent called.', { eventType, action });
                    if (eventType === MultiStepActionEventType.notificationSent ||
                        eventType === MultiStepActionEventType.notificationFailed) {
                        expect(action.notificationResult).toBeTruthy();
                        // Let's send out another notification:
                        const sendNotificationResponse = await client.operations.multiStepAction.sendMultiStepActionNotification(actionId, undefined, undefined, NotificationMethod.email);
                        expect(sendNotificationResponse.error).toBeUndefined();
                        expect(sendNotificationResponse.object).toBe(actionId);
                        // Verify token with an invalid token:
                        logger.debug('signInWithToken.spec.onEvent: sending 000000.', { eventType, action });
                        const verifyResponse = await client.operations.multiStepAction.verifyMultiStepActionToken(actionId, '000000');
                        expect(verifyResponse.error).toBeUndefined();
                        expect(verifyResponse.object).toBeTruthy();
                        expect(verifyResponse.object.actionId).toBe(actionId);
                        return;
                    }
                    if (eventType === MultiStepActionEventType.tokenFailed) {
                        const msaToken = getTestUserPropsSpecHelper(myUser).msaToken;
                        // The token was rejected; we try again with the correct token
                        logger.debug('signInWithToken.spec.onEvent: sending msaToken.', { eventType, action, msaToken });
                        const verifyResponse = await client.operations.multiStepAction.verifyMultiStepActionToken(actionId, msaToken);
                        expect(verifyResponse.error).toBeUndefined();
                        expect(verifyResponse.object).toBeTruthy();
                        expect(verifyResponse.object.actionId).toBe(actionId);
                        return;
                    }
                    if (eventType === MultiStepActionEventType.success) {
                        // The token was accepted
                        expect(action.result).toBe(MultiStepActionResult.ok);
                        expect(action.userId).toBe(myUser.id);
                        expect(action.authToken).not.toBeUndefined();
                        expect(action.authToken.length).toBeGreaterThan(10);
                        const clientInfo1 = await client.clientInfoStore.load();
                        expect(clientInfo1.myUserId).toBe(myUser.id);
                        expect(clientInfo1.authToken).toBe(action.authToken);
                        expect(client.isSignedIn).toBeTruthy();
                        resolve(true);
                    }
                },
            });
        });
    });
    test.skip('should verify using userHandle and token', async () => {
        const client = await clientStore.getTestClient();
        const myUser = await signMeUpSpecHelper(undefined, true, client);
        // Start sign in process
        const signInResponse = await client.operations.myUser.signInWithToken(myUser.userHandle, {
            polling: { enabled: true, timeout: 15 * 60 * 1000 },
        });
        expect(signInResponse).toBeTruthy();
        expect(signInResponse.error).toBeUndefined();
        expect(signInResponse.object).toBeTruthy();
        expect(signInResponse.object.actionProgress).toBeTruthy();
        expect(signInResponse.object.run).toBeTruthy();
        expect(signInResponse.object.error).toBeUndefined();
        const actionId = signInResponse.object.actionProgress.actionId;
        const actionRun = signInResponse.object.run;
        return new Promise((resolve) => {
            actionRun.addListener({
                id: 'test-listener',
                onEvent: async (eventType, action) => {
                    logger.debug('signInWithToken.spec.onEvent called.', { eventType, action });
                    if (eventType === MultiStepActionEventType.notificationSent ||
                        eventType === MultiStepActionEventType.notificationFailed) {
                        expect(action.notificationResult).toBeTruthy();
                        // Sending an invalid token:
                        const msaToken = getTestUserPropsSpecHelper(myUser).msaToken;
                        // The token was rejected; we try again with the correct token
                        logger.debug('signInWithToken.spec.onEvent: sending msaToken.', { eventType, action, msaToken: 'invalid' });
                        const verifyResponse = await client.operations.multiStepAction.verifyMultiStepActionToken(actionId, msaToken);
                        expect(verifyResponse.error).toBeUndefined();
                        expect(verifyResponse.object).toBeTruthy();
                        expect(verifyResponse.object.actionId).toBe(actionId);
                        return;
                    }
                    if (eventType === MultiStepActionEventType.tokenFailed) {
                        expect('MultiStepActionEventType.tokenFailed not to be called').toBeUndefined();
                        // Sending a valid token:
                        const msaToken = getTestUserPropsSpecHelper(myUser).msaToken;
                        // The token was rejected; we try again with the correct token
                        logger.debug('signInWithToken.spec.onEvent: sending msaToken.', { eventType, action, msaToken });
                        const verifyResponse = await client.operations.multiStepAction.verifyMultiStepActionToken(actionId, msaToken);
                        expect(verifyResponse.error).toBeUndefined();
                        expect(verifyResponse.object).toBeTruthy();
                        expect(verifyResponse.object.actionId).toBe(actionId);
                        return;
                    }
                    if (eventType === MultiStepActionEventType.success) {
                        // The token was accepted
                        expect(action.result).toBe(MultiStepActionResult.ok);
                        expect(action.userId).toBe(myUser.id);
                        expect(action.authToken).not.toBeUndefined();
                        expect(action.authToken.length).toBeGreaterThan(10);
                        const clientInfo1 = await client.clientInfoStore.load();
                        expect(clientInfo1.myUserId).toBe(myUser.id);
                        expect(clientInfo1.authToken).toBe(action.authToken);
                        expect(client.isSignedIn).toBeTruthy();
                        actionRun.removeListener('test-listener');
                        await deleteMyUserSpecHelper(client);
                        resolve(true);
                    }
                },
            });
        });
    });
}, 10000);
//# sourceMappingURL=signInWithToken.spec.js.map