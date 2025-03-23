import { describe, expect, test } from 'vitest';

import {
  CachePolicy,
  MultiStepActionEventType,
  MultiStepActionResult,
  UserIdentType,
} from '../../../enums.js';
import chance, {
  uniqueEmail,
  uniqueUserHandle,
} from '../../../helpers/chance.js';
import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
import clientStore from '../../helpers/clientStore.js';
import deleteMyUser from '../../helpers/deleteMyUser.specHelper.js';

describe('operations.myUser.resetMyPassword', () => {
  test('should verify a correct token', async () => {
    const client = await clientStore.getTestClient();

    // Set up test user
    const firstName = chance.first();
    const lastName = chance.last();
    const userHandle = uniqueUserHandle();
    const email = uniqueEmail();
    const password = chance.word();
    const newPassword = chance.word();
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

    // Verify we are signed in:
    const clientInfo1 = await client.clientInfoStore.load();
    expect(clientInfo1.myUserId).toBe(
      signUpUserAuthResponse.userAuthResponse.userId,
    );
    expect(clientInfo1.authToken).toBe(
      signUpUserAuthResponse.userAuthResponse.authToken,
    );

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

        onEvent: async (
          eventType: MultiStepActionEventType,
          action: SidMultiStepActionProgress,
        ) => {
          expect(action.notificationResult).toBeDefined();

          // Verify token
          if (
            eventType === MultiStepActionEventType.notificationSent ||
            eventType === MultiStepActionEventType.notificationFailed
          ) {
            expect(action.notificationResult).toBeDefined();

            // Verify token with an invalid token:
            const verifyResponse =
              await client.operations.multiStepAction.verifyMultiStepActionToken(
                actionId,
                token,
                newPassword,
              );

            expect(verifyResponse.error).toBeUndefined();
            expect(verifyResponse.object).toBeDefined();
            expect(verifyResponse.object.actionId).toBe(actionId);

            return;
          }

          if (eventType === MultiStepActionEventType.tokenFailed) {
            // The token was rejected; we try again with the correct token
            const verifyResponse =
              await client.operations.multiStepAction.verifyMultiStepActionToken(
                actionId,
                token,
                newPassword,
              );

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
            expect(myUser.id).toBe(client.myUserId);
            expect(myUser.userHandle).toBe(userHandle);
            expect(myUser.firstName).toBe(firstName);
            expect(myUser.lastName).toBe(lastName);
            expect(myUser.email).toBe(email);
            expect(
              Date.now() - new Date(myUser.passwordUpdatedAt).getTime(),
            ).toBeLessThan(10000);

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
            expect(
              Date.now() - new Date(myUser.passwordUpdatedAt).getTime(),
            ).toBeLessThan(10000);

            // Signing out the user, so we can test to sign in again with the new password:
            await client.operations.myUser.signMeOut();

            const clientInfo1 = await client.clientInfoStore.load();
            expect(clientInfo1.myUserId).toBeUndefined();
            expect(clientInfo1.authToken).toBeUndefined();

            // Signing in with the new password:
            const signInUserResponse =
              await client.operations.myUser.signInUser({
                ident: email,
                identType: UserIdentType.email,
                password: newPassword,
              });

            expect(signInUserResponse.error).toBeUndefined();
            expect(signInUserResponse.object.userAuthResponse).toBeDefined();
            expect(signInUserResponse.object.userAuthResponse.userId).toBe(
              myUserId,
            );
            expect(
              signInUserResponse.object.userAuthResponse.authToken.length,
            ).toBeGreaterThan(10);
            expect(signInUserResponse.object.myUser).toBeDefined();
            expect(signInUserResponse.object.myUser.id).toBe(myUserId);
            expect(signInUserResponse.object.myUser.userHandle).toBe(
              userHandle,
            );
            expect(signInUserResponse.object.myUser.firstName).toBe(firstName);
            expect(signInUserResponse.object.myUser.lastName).toBe(lastName);
            expect(signInUserResponse.object.myUser.email).toBe(email);

            await deleteMyUser(client);

            resolve(true);
          }
        },
      });
    });
  });
}, 60000);
