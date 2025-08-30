import { afterEach, beforeAll, describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import {
  CachePolicy,
  MultiStepActionEventType,
  MultiStepActionResult,
  MultiStepActionType,
} from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import { SidMultiStepActionProgress } from '../../../models/SidMultiStepActionProgress.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { getTestUserPropsSpecHelper } from '../../helpers/user/getTestUserProps.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';

// @failing-in-set
describe('operations.myUser.resetMyPassword', () => {
  let client: BgNodeClient;

  beforeAll(async () => {
    client = await clientStore.getTestClient();
  });

  afterEach(async () => {
    await deleteMyUserSpecHelper(client);
  });
  test('should verify a correct token', async () => {
    const myUser = await signMeUpSpecHelper(undefined, true, client);
    const myUserId = myUser.id;
    const { msaToken } = getTestUserPropsSpecHelper(myUser);
    const newPassword = chance.string({ length: 8 });

    // Start reset password process
    const response1 = await client.operations.myUser.resetMyPassword(
      myUser.email,
      {
        polling: { enabled: true },
      },
    );

    expect(response1.error).toBeUndefined();
    expect(response1.object).toBeTruthy();
    expect(response1.object.actionProgress).toBeTruthy();
    expect(response1.object.run).toBeTruthy();
    expect(response1.object.run.actionId).toBeTruthy();
    expect(response1.object.actionProgress.userId).toBe(myUserId);
    expect(response1.object.actionProgress.actionType).toBe(MultiStepActionType.resetPassword);
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
                msaToken,
                newPassword,
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
                newPassword,
              );

            expect(verifyResponse.error).toBeUndefined();
            expect(verifyResponse.object).toBeTruthy();
            expect(verifyResponse.object.actionId).toBe(actionId);

            return;
          }

          if (eventType === MultiStepActionEventType.success) {
            // The token was accepted
            expect(action).toBeTruthy();
            expect(action.actionId).toBe(actionId);
            expect(action.result).toBe(MultiStepActionResult.ok);
            expect(action.userId).toBe(myUserId);

            // await new Promise((resolve) => setTimeout(resolve, 1000));

            // Verify the email has been marked as confirmed on the remote user object:
            const findMyUserResult1 = await client.operations.myUser.findMyUser({
              cachePolicy: CachePolicy.network,
            });
            const reloadedMyUser = findMyUserResult1.object;

            expect(findMyUserResult1.error).toBeUndefined();
            expect(findMyUserResult1.object).toBeTruthy();
            expect(reloadedMyUser.id).toBe(myUserId);
            expect(reloadedMyUser.id).toBe(client.myUserId);
            expect(reloadedMyUser.userHandle).toBe(myUser.userHandle);
            expect(reloadedMyUser.firstName).toBe(myUser.firstName);
            expect(reloadedMyUser.lastName).toBe(myUser.lastName);
            expect(reloadedMyUser.email).toBe(myUser.email);
            // expect(Date.now() - new Date(reloadedMyUser.passwordUpdatedAt).getTime()).toBeLessThan(10000);

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
            // expect(Date.now() - new Date(myUserFromCache.passwordUpdatedAt).getTime()).toBeLessThan(10000);

            // Signing out the user, so we can test to sign in again with the new password:
            await client.operations.myUser.signMeOut();

            const clientInfo1 = await client.clientInfoStore.load();
            expect(clientInfo1.myUserId).toBeUndefined();
            expect(clientInfo1.authToken).toBeUndefined();

            // Signing in with the new password:
            await signMeInSpecHelper(myUser.email, newPassword, client);

            resolve(true);
          }
        },
      });
    });
  });
}, 10000);
