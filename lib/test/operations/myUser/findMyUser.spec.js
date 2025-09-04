import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe('operations.myUser.findMyUser', () => {
    let client;
    let myUser;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should return the cached user from the local db', async () => {
        const findMyUserFromCacheResult = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.cache,
        });
        const myUserFromCache = findMyUserFromCacheResult.object;
        expect(findMyUserFromCacheResult.error).toBeUndefined();
        expect(findMyUserFromCacheResult.object).toBeTruthy();
        expect(myUserFromCache.id).toBe(myUser.id);
        expect(myUserFromCache.userHandle).toBe(myUser.userHandle);
        expect(myUserFromCache.email).toBe(myUser.email);
    });
    test('should return the cached user from the local db', async () => {
        const findMyUserFromNetworkResult = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.network,
        });
        const myUserFromNetwork = findMyUserFromNetworkResult.object;
        expect(findMyUserFromNetworkResult.error).toBeUndefined();
        expect(findMyUserFromNetworkResult.object).toBeTruthy();
        expect(myUserFromNetwork.id).toBe(myUser.id);
        expect(myUserFromNetwork.userHandle).toBe(myUser.userHandle);
        expect(myUserFromNetwork.email).toBe(myUser.email);
    });
});
//# sourceMappingURL=findMyUser.spec.js.map