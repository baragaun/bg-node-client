import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { CachePolicy } from '../../../enums.js';
import clientStore from '../../helpers/clientStore.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe('operations.shoppingCart.findMyShoppingCart', () => {
    let client;
    let myUser;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        myUser = await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    // test('should return the cached shoppingCart from the local db', async () => {
    //   const localResult = await client.operations.shoppingCart.findMyShoppingCart({
    //     cachePolicy: CachePolicy.cache,
    //   });
    //   const cachedShoppingCart = localResult.object;
    //
    //   expect(localResult.error).toBeUndefined();
    //   expect(localResult.object).toBeDefined();
    //   expect(cachedShoppingCart.id).toBe(myUser.id);
    //   expect(cachedShoppingCart.items.length).toBe(0);
    // });
    test('should return the cached user from the local db', async () => {
        const networkResult = await client.operations.shoppingCart.findMyShoppingCart({
            cachePolicy: CachePolicy.network,
        });
        const shoppingCart = networkResult.object;
        expect(networkResult.error).toBeUndefined();
        expect(networkResult.object).toBeDefined();
        expect(shoppingCart.id).toBe(myUser.id);
        expect(shoppingCart.items.length).toBe(0);
    });
});
//# sourceMappingURL=findMyShoppingCart.spec.js.map