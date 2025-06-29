import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe('operations.myUser.findMyInbox', () => {
    let client;
    let myUser;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
    });
    afterEach(async () => {
        await deleteMyUserSpecHelper(client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should return the remote user inbox', async () => {
        const response = await client.operations.myUser.findMyInbox({
            cachePolicy: CachePolicy.network,
        });
        const userInbox = response.object;
        expect(response.error).toBeUndefined();
        expect(response.object).toBeDefined();
        // expect(userInbox.userId).toBe(myUser.id); // <-- todo: fix; why is userInbox.userId an empty string?
        expect(userInbox.channels.userId).toBe(myUser.id);
    });
});
//# sourceMappingURL=findMyInbox.spec.js.map