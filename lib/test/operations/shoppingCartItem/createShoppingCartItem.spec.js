import { afterAll, beforeAll, describe, test } from 'vitest';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { createShoppingCartItemSpecHelper } from '../../helpers/shoppingCartItem/createShoppingCartItem.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe.runIf(isFeatureEnabled('marketplace'))('operations.shoppingCartItem.createShoppingCartItem', () => {
    let client;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('creates a shopping cart item', async () => {
        await createShoppingCartItemSpecHelper({}, client);
    });
});
//# sourceMappingURL=createShoppingCartItem.spec.js.map