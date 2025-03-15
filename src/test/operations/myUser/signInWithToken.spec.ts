import { describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import {
  MultiStepActionEventType,
  MultiStepActionResult,
} from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import deleteMyUser from '../../../operations/myUser/deleteMyUser.js';
import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
import { testConfig } from '../../helpers/testConfig.js';

describe('operations.myUser.signInWithToken', () => {
  test('should verify a correct token', async () => {
    const myUserDeviceUuid = 'ab29fb7f368a4b26bfc3add16bef0e23';
    const client = await new BgNodeClient().init(
      testConfig,
      undefined,
      myUserDeviceUuid,
    );

    // Set up test user
    const firstName = chance.first();
    const lastName = chance.last();
    const userHandle = chance.word();
    const password = chance.word();
    const email = chance.email();
    const token = '666666';

    const { object: signUpUserAuthResponse } =
      await client.operations.myUser.signUpUser({
        userHandle,
        firstName,
        lastName,
        email,
        password,
        isTestUser: true,
        source: `testtoken=${token}`, // this causes all confirmation tokens to be set to '666666'
      });
    const myUserId = signUpUserAuthResponse.userAuthResponse.userId;

    // Verifying we are signed in:
    const clientInfo1 = await client.clientInfoStore.load();
    expect(clientInfo1.myUserId).toBe(
      signUpUserAuthResponse.userAuthResponse.userId,
    );
    expect(clientInfo1.authToken).toBe(
      signUpUserAuthResponse.userAuthResponse.authToken,
    );

    // Sign out to test sign in process
    await client.operations.myUser.signMeOut();

    // Verifying we are signed out:
    const clientInfo2 = await client.clientInfoStore.load();
    expect(clientInfo2.myUserId).toBeUndefined();
    expect(clientInfo2.authToken).toBeUndefined();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Start sign in process
    const signInResponse = await client.operations.myUser.signInWithToken(
      email,
      {
        polling: { enabled: true, timeout: 240000 },
      },
    );

    expect(signInResponse).toBeDefined();
    expect(signInResponse.error).toBeUndefined();
    expect(signInResponse.object).toBeDefined();
    expect(signInResponse.object.actionProgress).toBeDefined();
    expect(signInResponse.object.run).toBeDefined();
    expect(signInResponse.object.error).toBeUndefined();

    const actionId = signInResponse.object.actionProgress.actionId;
    const actionRun = signInResponse.object.run;

    // Add listener
    return new Promise((resolve) => {
      actionRun.addListener({
        id: 'test-listener',

        onEvent: async (
          eventType: MultiStepActionEventType,
          action: SidMultiStepActionProgress,
        ) => {
          console.log('signInWithToken.spec.onEvent called.', {
            eventType,
            action,
          });

          if (
            eventType === MultiStepActionEventType.notificationSent ||
            eventType === MultiStepActionEventType.notificationFailed
          ) {
            expect(action.notificationResult).toBeDefined();

            // Verify token with an invalid token:
            console.log('signInWithToken.spec.onEvent: sending 000000.', {
              eventType,
              action,
            });
            const verifyResponse =
              await client.operations.multiStepAction.verifyMultiStepActionToken(
                actionId,
                '000000',
              );

            expect(verifyResponse.error).toBeUndefined();
            expect(verifyResponse.object).toBeDefined();
            expect(verifyResponse.object.actionId).toBe(actionId);

            return;
          }

          if (eventType === MultiStepActionEventType.tokenFailed) {
            // The token was rejected; we try again with the correct token
            console.log('signInWithToken.spec.onEvent: sending 666666.', {
              eventType,
              action,
            });
            const verifyResponse =
              await client.operations.multiStepAction.verifyMultiStepActionToken(
                actionId,
                token,
              );

            expect(verifyResponse.error).toBeUndefined();
            expect(verifyResponse.object).toBeDefined();
            expect(verifyResponse.object.actionId).toBe(actionId);

            return;
          }

          if (eventType === MultiStepActionEventType.success) {
            // The token was accepted
            expect(action.result).toBe(MultiStepActionResult.ok);
            expect(action.userId).toBe(myUserId);
            expect(action.authToken).not.toBeUndefined();
            expect(action.authToken.length).toBeGreaterThan(10);

            const clientInfo1 = await client.clientInfoStore.load();
            expect(clientInfo1.myUserId).toBe(myUserId);
            expect(clientInfo1.authToken).toBe(action.authToken);
            expect(client.operations.myUser.isSignedIn()).toBeTruthy();

            // Deleting the user again:
            const deleteMyUserResponse = await deleteMyUser(
              undefined,
              undefined,
              true,
            );

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
}, 600000);
