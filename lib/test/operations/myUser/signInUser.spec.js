import { afterEach, describe, expect, test } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import chance, { uniqueEmail, uniqueUserHandle } from '../../../helpers/chance.js';
import findById from '../../../operations/findById.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeInSpecHelper } from '../../helpers/user/signMeIn.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
import { verifyUserPropsSpecHelper } from '../../helpers/user/verifyUserProps.specHelper.js';
describe('operations.myUser.signInUser', () => {
    let client;
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should sign in a user with valid input', async () => {
        client = await clientStore.getTestClient();
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        const password = chance.word();
        const myUser = await signMeUpSpecHelper({
            firstName,
            lastName,
            userHandle,
            email,
            newPassword: password,
        }, true, // sign out again
        client);
        await signMeInSpecHelper(email, password, client);
        // Verifying the myUser object in the local cache/db:
        const findMyUserResult = await findById(myUser.id, ModelType.MyUser, { cachePolicy: CachePolicy.cache });
        expect(findMyUserResult.error).toBeUndefined();
        expect(findMyUserResult.object).toBeDefined();
        verifyUserPropsSpecHelper(findMyUserResult.object, {
            id: myUser.id,
            firstName,
            lastName,
            userHandle,
            email,
        });
        const clientInfo = await client.clientInfoStore.load();
        expect(clientInfo.myUserId).toBe(myUser.id);
        expect(clientInfo.authToken.length).toBeGreaterThan(5);
    });
    test('should sign in a user with valid input (mock mode)', async () => {
        client = await clientStore.getTestClient();
        client.enableMockMode = true;
        const firstName = chance.first();
        const lastName = chance.last();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        const password = chance.word();
        const myUser = await signMeUpSpecHelper({
            firstName,
            lastName,
            userHandle,
            email,
            newPassword: password,
        }, true, // sign out again
        client);
        await signMeInSpecHelper(email, password, client);
        // Verifying the myUser object in the local cache/db:
        const findMyUserResult = await findById(myUser.id, ModelType.MyUser, { cachePolicy: CachePolicy.cache });
        expect(findMyUserResult.error).toBeUndefined();
        expect(findMyUserResult.object).toBeDefined();
        verifyUserPropsSpecHelper(findMyUserResult.object, {
            id: myUser.id,
            firstName,
            lastName,
            userHandle,
            email,
        });
        const clientInfo = await client.clientInfoStore.load();
        expect(clientInfo.myUserId).toBe(myUser.id);
        expect(clientInfo.authToken.length).toBeGreaterThan(5);
    });
}, 100000);
//# sourceMappingURL=signInUser.spec.js.map