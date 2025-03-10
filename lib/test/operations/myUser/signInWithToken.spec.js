import { describe, expect, test } from 'vitest';
import { BgNodeClient } from '../../../BgNodeClient.js';
import { MultiStepActionType } from '../../../fsdata/gql/graphql.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import { testConfig } from '../../testConfig.js';
describe('operations.myUser.signInWithToken', () => {
    test('should verify a correct token', async () => {
        const client = await new BgNodeClient().init(testConfig);
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
        const config1 = data.config();
        expect(config1.myUserId).toBe(signUpUserAuthResponse.userAuthResponse.userId);
        expect(config1.authToken).toBe(signUpUserAuthResponse.userAuthResponse.authToken);
        await client.operations.myUser.signMeOut();
        const config2 = data.config();
        expect(config2.myUserId).toBeNull();
        expect(config2.authToken).toBeNull();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const startResponse = await client.operations.myUser.signInWithToken(email);
        expect(startResponse.error).toBeUndefined();
        expect(startResponse.object).toBeDefined();
        expect(startResponse.object.actionId).toBeDefined();
        expect(startResponse.object.actionType).toBe(MultiStepActionType.TokenSignIn);
        const actionId = startResponse.object.actionId;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const input = { actionId, token };
        const verifyResponse = await client.operations.multiStepAction.verifyMultiStepActionToken(input);
        expect(verifyResponse.error).toBeUndefined();
        expect(verifyResponse.object).toBeDefined();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const progressResponse = await client.operations.multiStepAction.getMultiStepActionProgress(actionId, token);
        expect(progressResponse.actionId).toBe(actionId);
        expect(progressResponse.result).toBe('ok');
        expect(progressResponse.userId).toBe(myUserId);
        expect(progressResponse.authToken).toBeDefined();
        expect(progressResponse.authToken.length).toBeGreaterThan(10);
    });
}, 60000);
//# sourceMappingURL=signInWithToken.spec.js.map