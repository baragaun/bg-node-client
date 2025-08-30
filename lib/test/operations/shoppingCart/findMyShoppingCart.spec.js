import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { createMultipleShoppingCartItemsSpecHelper, } from '../../helpers/shoppingCartItem/createMultipleShoppingCartItems.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
// @failing-in-set
describe.runIf(isFeatureEnabled('marketplace'))('operations.shoppingCart.findMyShoppingCart', () => {
    let client;
    let myUser;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('returns the shopping cart from the network', async () => {
        const itemCount = chance.integer({ min: 2, max: 6 });
        await createMultipleShoppingCartItemsSpecHelper(itemCount, client);
        const networkResult = await client.operations.shoppingCart.findMyShoppingCart({
            cachePolicy: CachePolicy.network,
        });
        const shoppingCart = networkResult.object;
        expect(networkResult.error).toBeUndefined();
        expect(networkResult.object).toBeDefined();
        expect(shoppingCart.id).toBe(myUser.id);
        expect(shoppingCart.items.length).toBe(itemCount);
    });
}, { timeout: 60000 });
//# sourceMappingURL=findMyShoppingCart.spec.js.map