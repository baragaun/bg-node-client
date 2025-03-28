import { describe, expect, test } from 'vitest';

import {
  CachePolicy,
  MultiStepActionEventType,
  MultiStepActionResult,
} from '../../../enums.js';
import { SidMultiStepActionProgress } from '../../../models/SidMultiStepActionProgress.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/getTestUserProps.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/signMeUp.specHelper.js';

describe('operations.myUser.verifyMyEmail', () => {
  test('should verify a correct token', async () => {
    const client = await clientStore.getTestClient();

    const myUser = await signMeUpSpecHelper(undefined, false, client);
    const myUserId = myUser.id;
    const { msaToken } = getTestUserPropsSpecHelper(myUser);

    // Step 1: Start sign in process
    const signInResponse = await client.operations.myUser.verifyMyEmail(
      myUser.email,
      {
        polling: { enabled: true },
      },
    );

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
                msaToken + 'invalid',
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
                msaToken,
              );

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

            // await new Promise((resolve) => setTimeout(resolve, 1000));

            // Verify the email has been marked as confirmed on the remote user object:
            const myUser = await client.operations.myUser.findMyUser({
              cachePolicy: CachePolicy.network,
            });

            expect(myUser.id).toBe(myUserId);
            expect(myUser.id).toBe(client.myUserId);
            expect(myUser.userHandle).toBe(myUser.userHandle);
            expect(myUser.firstName).toBe(myUser.firstName);
            expect(myUser.lastName).toBe(myUser.lastName);
            expect(myUser.email).toBe(myUser.email);
            expect(myUser.isEmailVerified).toBeTruthy();

            // Verify the email has been marked as confirmed on the cached user object:
            const myUserFromCache = await client.operations.myUser.findMyUser({
              cachePolicy: CachePolicy.network,
            });

            expect(myUserFromCache.id).toBe(myUserId);
            expect(myUserFromCache.id).toBe(client.myUserId);
            expect(myUserFromCache.userHandle).toBe(myUser.userHandle);
            expect(myUserFromCache.firstName).toBe(myUser.firstName);
            expect(myUserFromCache.lastName).toBe(myUser.lastName);
            expect(myUserFromCache.email).toBe(myUser.email);
            expect(myUserFromCache.isEmailVerified).toBeTruthy();

            // Deleting the user again:
            await deleteMyUserSpecHelper(client);

            resolve(true);
          }
        },
      });
    });
  });
}, 60000);
