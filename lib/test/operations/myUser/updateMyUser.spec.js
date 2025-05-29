import { afterEach, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import chance, { uniqueEmail, uniqueUserHandle, } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
describe('operations.myUser.updateMyUser', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should update the user', async () => {
        const firstName = chance.first();
        const lastName = chance.last();
        const newLastName = chance.last();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        await client.operations.myUser.signUpUser({
            userHandle,
            firstName,
            lastName,
            email,
            isTestUser: true,
        });
        // With the polling settings not specified, the client will poll until the object is updated.
        const updateResult = await client.operations.myUser.updateMyUser({
            id: client.myUserId,
            lastName: newLastName,
        }, { cachePolicy: CachePolicy.network });
        // Even though the backend updates the object asynchronously, the client will poll until the
        // object is updated. The updated object is then returned.
        expect(updateResult).toBeDefined();
        expect(updateResult.error).toBeUndefined();
        expect(updateResult.object.id).toBe(client.myUserId);
        expect(updateResult.object.lastName).toBe(newLastName);
        // It should have also updated the cached object:
        const findMyUserFromCacheResult1 = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.cache,
        });
        const myUserFromCache = findMyUserFromCacheResult1.object;
        expect(findMyUserFromCacheResult1.error).toBeUndefined();
        expect(findMyUserFromCacheResult1.object).toBeDefined();
        expect(myUserFromCache).toBeDefined();
        expect(myUserFromCache.id).toBe(client.myUserId);
        expect(myUserFromCache.userHandle).toBe(userHandle);
        expect(myUserFromCache.firstName).toBe(firstName);
        expect(myUserFromCache.lastName).toBe(newLastName);
        expect(myUserFromCache.email).toBe(email);
        // Let's verify the object again, by pulling a fresh copy of it from the backend:
        const myUserFromNetworkResult = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.network,
        });
        const myUserFromNetwork = myUserFromNetworkResult.object;
        expect(myUserFromNetworkResult.error).toBeUndefined();
        expect(myUserFromNetworkResult.object).toBeDefined();
        expect(myUserFromNetwork.id).toBe(client.myUserId);
        expect(myUserFromNetwork.userHandle).toBe(userHandle);
        expect(myUserFromNetwork.firstName).toBe(firstName);
        expect(myUserFromNetwork.lastName).toBe(newLastName);
        expect(myUserFromNetwork.email).toBe(email);
        const findMyUserFromCacheResult2 = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.cache,
        });
        const myUserFromCache2 = findMyUserFromCacheResult2.object;
        expect(findMyUserFromCacheResult2.error).toBeUndefined();
        expect(findMyUserFromCacheResult2.object).toBeDefined();
        expect(myUserFromCache2.id).toBe(client.myUserId);
        expect(myUserFromCache2.userHandle).toBe(userHandle);
        expect(myUserFromCache2.firstName).toBe(firstName);
        expect(myUserFromCache2.lastName).toBe(newLastName);
        expect(myUserFromCache2.email).toBe(email);
    });
}, 60000);
//# sourceMappingURL=updateMyUser.spec.js.map