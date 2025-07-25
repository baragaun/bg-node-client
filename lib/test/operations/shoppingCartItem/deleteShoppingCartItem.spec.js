import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { createShoppingCartItemSpecHelper } from '../../helpers/shoppingCartItem/createShoppingCartItem.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe.runIf(isFeatureEnabled('marketplace'))('operations.shoppingCartItem.deleteShoppingCartItem', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('deletes a shopping cart item', async () => {
        const item = await createShoppingCartItemSpecHelper({}, client);
        const response = await client.operations.shoppingCartItem.deleteShoppingCartItem(item.id, true);
        expect(response.error).toBeUndefined();
    });
});
//# sourceMappingURL=deleteShoppingCartItem.spec.js.map