import { describe, expect, test } from 'vitest';
import { DbType, ModelType } from '../../types/enums.js';
import { init } from '../../index.js';
import findById from '../../operations/findById.js';
import chance from '../../helpers/chance.js';
const config = {
    dbType: DbType.rxdb,
    inBrowser: false,
    debugMode: true,
};
describe('signUpUser', () => {
    test('should sign up a user with valid input', async () => {
        const client = await init(null, config);
        const userHandle = chance.word();
        const password = chance.word();
        const email = chance.email();
        const { object: user } = await client.signUpUser(userHandle, email, password);
        const { object: reloadedUser, error, } = await findById(user.id, ModelType.MyUser);
        expect(error).toBeUndefined();
        expect(reloadedUser.id).toBe(user.id);
        expect(reloadedUser.userHandle).toBe(userHandle);
        expect(reloadedUser.email).toBe(email);
    });
});
//# sourceMappingURL=signUpUser.spec.js.map