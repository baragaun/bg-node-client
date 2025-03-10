import { describe, expect, test } from 'vitest';
import { BgNodeClient } from '../../../BgNodeClient.js';
import db from '../../../db/db.js';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import data from '../../../helpers/data.js';
import { MyUser } from '../../../types/models/MyUser.js';
import userFactory from '../../factories/user.js';
import { testConfig } from '../../helpers/testConfig.js';
describe('operations.myUser.findMyUser', () => {
    test('should return the cached user from the local db', async () => {
        const client = await new BgNodeClient().init(testConfig);
        const userHandle = chance.word();
        const email = chance.email();
        let user = await userFactory.build({
            userHandle,
            email,
        });
        const saveResult = await db.insert(new MyUser(user));
        user = saveResult.object;
        data.config().myUserId = user.id;
        const myUser = await client.operations.myUser.findMyUser({ cachePolicy: CachePolicy.cache });
        expect(myUser.id).toBe(user.id);
        expect(myUser.userHandle).toBe(userHandle);
        expect(myUser.email).toBe(email);
    });
    test('should return the user from the remote API', async () => {
        testConfig.myUserId = '67ce0a28b67bdfe03ba8fdf4';
        testConfig.authToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2NlMGEyOGI2N2JkZmUwM2JhOGZkZjQiLCJkZXZpY2VVdWlkIjoiYWIyOWZiN2YzNjhhNGIyNmJmYzNhZGQxNmJlZjBlMjMiLCJpYXQiOjE3NDE1NTYyNjR9.jNYoDtxaxlscepaS7yWKMnNwWPGr7KIl1pTzk7KiVNQ';
        testConfig.myUserDeviceUuid = 'ab29fb7f368a4b26bfc3add16bef0e23';
        const client = await new BgNodeClient().init(testConfig);
        const myUser = await client.operations.myUser.findMyUser({ cachePolicy: CachePolicy.network });
        expect(myUser.id).toBe(testConfig.myUserId);
        expect(myUser.userHandle).toBe('rehza');
        expect(myUser.email).toBe('pametez@vabgijwap.mx');
    });
});
//# sourceMappingURL=findMyUser.spec.js.map