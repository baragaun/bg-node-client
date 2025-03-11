import { describe, expect, test } from 'vitest';

import { BgNodeClient } from '../../../BgNodeClient.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import { SidMultiStepActionProgress } from '../../../types/models/SidMultiStepActionProgress.js';
import { testConfig } from '../../helpers/testConfig.js';

describe('operations.myUser.verifyMyEmail', () => {
  test('should verify a correct token', async () => {
    const client = await new BgNodeClient().init(testConfig);

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
    const config1 = data.config();
    expect(config1.myUserId).toBe(signUpUserAuthResponse.userAuthResponse.userId);
    expect(config1.authToken).toBe(signUpUserAuthResponse.userAuthResponse.authToken);

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
    return new Promise((resolve, reject) => {
      actionRun.addListener({
        id: 'test-listener',

        // Step 3: Handle notification sent
        onNotificationSentOrFailed: (action: SidMultiStepActionProgress) => {
          expect(action.notificationResult).toBeDefined();

          // Step 4: Verify token
          client.operations.multiStepAction
            .verifyMultiStepActionToken(actionId, token)
            .then((verifyResponse) => {
              expect(verifyResponse.error).toBeUndefined();
              expect(verifyResponse.object).toBeDefined();
              expect(verifyResponse.object.actionId).toBe(actionId);
            })
            .catch(reject);
        },

        // Step 5: Handle completion
        onFinished: async (action: SidMultiStepActionProgress) => {
          try {
            // Verify final state
            expect(action).toBeDefined();
            expect(action.actionId).toBe(actionId);
            expect(action.result).toBe('ok');
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
            expect(myUser.isEmailVerified).toBeTruthy();

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
            expect(myUserFromCache.isEmailVerified).toBeTruthy();

            resolve(true);
          } catch (error) {
            reject(error);
          }
        },
      });
    });
  });
}, 60000);
