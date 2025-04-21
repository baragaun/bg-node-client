import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import {
  CachePolicy,
  MultiStepActionEventType,
  MultiStepActionResult,
} from '../../../enums.js';
import { SidMultiStepActionProgress } from '../../../models/SidMultiStepActionProgress.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

describe('operations.myUser.verifyMyEmail', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });

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
    expect(signInResponse.object).toBeTruthy();
    expect(signInResponse.object.actionProgress).toBeTruthy();
    expect(signInResponse.object.run).toBeTruthy();
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
          expect(action.notificationResult).toBeTruthy();

          // Verify token
          if (
            eventType === MultiStepActionEventType.notificationSent ||
            eventType === MultiStepActionEventType.notificationFailed
          ) {
            expect(action.notificationResult).toBeTruthy();

            // Verify token with an invalid token:
            const verifyResponse =
              await client.operations.multiStepAction.verifyMultiStepActionToken(
                actionId,
                msaToken + 'invalid',
              );

            expect(verifyResponse.error).toBeUndefined();
            expect(verifyResponse.object).toBeTruthy();
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
            expect(verifyResponse.object).toBeTruthy();
            expect(verifyResponse.object.actionId).toBe(actionId);

            return;
          }

          if (eventType === MultiStepActionEventType.success) {
            // The token was accepted
            // Verify final state
            expect(action).toBeTruthy();
            expect(action.actionId).toBe(actionId);
            expect(action.result).toBe(MultiStepActionResult.ok);
            expect(action.userId).toBe(myUserId);

            // await new Promise((resolve) => setTimeout(resolve, 1000));

            // Verify the email has been marked as confirmed on the remote user object:
            const findMyUserResult = await client.operations.myUser.findMyUser({
              cachePolicy: CachePolicy.network,
            });
            const myUser = findMyUserResult.object;

            expect(findMyUserResult.error).toBeUndefined();
            expect(findMyUserResult.object).toBeTruthy();
            expect(myUser.id).toBe(myUserId);
            expect(myUser.id).toBe(client.myUserId);
            expect(myUser.userHandle).toBe(myUser.userHandle);
            expect(myUser.firstName).toBe(myUser.firstName);
            expect(myUser.lastName).toBe(myUser.lastName);
            expect(myUser.email).toBe(myUser.email);
            expect(myUser.isEmailVerified).toBeTruthy();

            // Verify the email has been marked as confirmed on the cached user object:
            const findMyUserFromCacheResult = await client.operations.myUser.findMyUser({
              cachePolicy: CachePolicy.network,
            });
            const myUserFromCache = findMyUserFromCacheResult.object;

            expect(findMyUserFromCacheResult.error).toBeUndefined();
            expect(findMyUserFromCacheResult.object).toBeTruthy();
            expect(myUserFromCache.id).toBe(myUserId);
            expect(myUserFromCache.id).toBe(client.myUserId);
            expect(myUserFromCache.userHandle).toBe(myUser.userHandle);
            expect(myUserFromCache.firstName).toBe(myUser.firstName);
            expect(myUserFromCache.lastName).toBe(myUser.lastName);
            expect(myUserFromCache.email).toBe(myUser.email);
            expect(myUserFromCache.isEmailVerified).toBeTruthy();

            resolve(true);
          }
        },
      });
    });
  });
}, 60000);
