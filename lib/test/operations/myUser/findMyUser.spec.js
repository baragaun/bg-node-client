import { describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import { uniqueEmail, uniqueUserHandle } from '../../../helpers/chance.js';
import deleteMyUser from '../../helpers/deleteMyUser.specHelper.js';
import getTestClient from '../../helpers/getTestClient.js';
describe('operations.myUser.findMyUser', () => {
    test('should return the cached user from the local db', async () => {
        const client = await getTestClient();
        const userHandle = uniqueUserHandle();
        const email = uniqueEmail();
        const { object: signUpUserAuthResponse } = await client.operations.myUser.signUpUser({
            userHandle,
            email,
            isTestUser: true,
        });
        const myUserId = signUpUserAuthResponse.userAuthResponse.userId;
        const myUserFromCache = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.cache,
        });
        expect(myUserFromCache.id).toBe(myUserId);
        expect(myUserFromCache.userHandle).toBe(userHandle);
        expect(myUserFromCache.email).toBe(email);
        const myUserFromNetwork = await client.operations.myUser.findMyUser({
            cachePolicy: CachePolicy.network,
        });
        expect(myUserFromNetwork.id).toBe(client.myUserId);
        expect(myUserFromNetwork.userHandle).toBe(userHandle);
        expect(myUserFromNetwork.email).toBe(email);
        await deleteMyUser(client);
    });
});
//# sourceMappingURL=findMyUser.spec.js.map