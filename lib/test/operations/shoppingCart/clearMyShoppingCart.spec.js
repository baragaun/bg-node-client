import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { isFeatureEnabled } from '../../helpers/isFeatureEnabled.js';
import { createMultipleShoppingCartItemsSpecHelper, } from '../../helpers/shoppingCartItem/createMultipleShoppingCartItems.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
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
        const networkResult1 = await client.operations.shoppingCart.clearMyShoppingCart({
            cachePolicy: CachePolicy.network,
        });
        expect(networkResult1.error).toBeUndefined();
        expect(networkResult1.object).toBeDefined();
        const networkResult2 = await client.operations.shoppingCart.findMyShoppingCart({
            cachePolicy: CachePolicy.network,
        });
        const shoppingCart = networkResult2.object;
        expect(networkResult2.error).toBeUndefined();
        expect(networkResult2.object).toBeDefined();
        expect(shoppingCart.id).toBe(myUser.id);
        expect(shoppingCart.items.length).toBe(0);
    });
});
//# sourceMappingURL=clearMyShoppingCart.spec.js.map