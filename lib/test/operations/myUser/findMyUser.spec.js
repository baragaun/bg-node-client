import { describe, expect, test } from 'vitest';
import { MyUser } from '../../../types/models/MyUser.js';
import { testConfig } from '../../testConfig.js';
import chance from '../../../helpers/chance.js';
import createClient from '../../../createClient.js';
import userFactory from '../../factories/user.js';
import db from '../../../db/db.js';
import data from '../../../helpers/data.js';
describe('findMyUser', () => {
    test('should return the cached user from the local db', async () => {
        const client = await createClient(testConfig);
        const userHandle = chance.word();
        const email = chance.email();
        let user = await userFactory.build({
            userHandle,
            email,
        });
        const saveResult = await db.insert(new MyUser(user));
        user = saveResult.object;
        data.config().myUserId = user.id;
        const myUser = await client.operations.myUser.findMyUser({ useCache: true });
        expect(myUser.id).toBe(user.id);
        expect(myUser.userHandle).toBe(userHandle);
        expect(myUser.email).toBe(email);
    });
});
//# sourceMappingURL=findMyUser.spec.js.map