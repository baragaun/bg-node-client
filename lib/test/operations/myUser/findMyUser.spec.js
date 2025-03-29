import { describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import { uniqueEmail, uniqueUserHandle } from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/deleteMyUser.specHelper.js';
describe('operations.myUser.findMyUser', () => {
    test('should return the cached user from the local db', async () => {
        const client = await clientStore.getTestClient();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        const { object: signUpUserAuthResponse } = await client.operations.myUser.signUpUser({
            userHandle,
            email,
            isTestUser: true,
        });
        const myUserId = signUpUserAuthResponse.userAuthResponse.userId;
        const findMyUserFromCacheResult = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.cache,
        });
        const myUserFromCache = findMyUserFromCacheResult.object;
        expect(findMyUserFromCacheResult.error).toBeUndefined();
        expect(findMyUserFromCacheResult.object).toBeDefined();
        expect(myUserFromCache.id).toBe(myUserId);
        expect(myUserFromCache.userHandle).toBe(userHandle);
        expect(myUserFromCache.email).toBe(email);
        const findMyUserFromNetworkResult = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.network,
        });
        const myUserFromNetwork = findMyUserFromNetworkResult.object;
        expect(findMyUserFromNetworkResult.error).toBeUndefined();
        expect(findMyUserFromNetworkResult.object).toBeDefined();
        expect(myUserFromNetwork.id).toBe(client.myUserId);
        expect(myUserFromNetwork.userHandle).toBe(userHandle);
        expect(myUserFromNetwork.email).toBe(email);
        await deleteMyUserSpecHelper(client);
    });
});
//# sourceMappingURL=findMyUser.spec.js.map