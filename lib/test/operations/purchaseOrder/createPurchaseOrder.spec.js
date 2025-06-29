import { afterAll, beforeAll, describe, expect, test } from 'vitest';
// import { CachePolicy } from '../../../enums.js';
// import { MyUser } from '../../../models/MyUser.js';
import chance from '../../../helpers/chance.js';
import clientStore from '../../helpers/clientStore.js';
import { findGiftCardProductsSpecHelper, } from '../../helpers/giftCardProduct/findGiftCardProducts.specHelper.js';
import { createShoppingCartItemSpecHelper, } from '../../helpers/shoppingCartItem/createShoppingCartItem.specHelper.js';
import { deleteMyUserSpecHelper } from '../../helpers/user/deleteMyUser.specHelper.js';
import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
// import { signMeUpSpecHelper } from '../../helpers/user/signMeUp.specHelper.js';
describe('operations.purchaseOrder.createPurchaseOrder', () => {
    let client;
    // let myUser: MyUser;
    beforeAll(async () => {
        client = await clientStore.getTestClient();
        await signMeUpSpecHelper(undefined, false, client);
    });
    afterAll(async () => {
        await deleteMyUserSpecHelper(client);
    });
    test('should return the cached user from the local db', async () => {
        const shoppingCartItems = [];
        const products = await findGiftCardProductsSpecHelper(undefined, { limit: 20 }, client);
        const productsWithDenominations = products.filter(p => p.denominations?.length > 0);
        for (const product of productsWithDenominations) {
            const props = {
                shoppingCartId: client.clientInfoStore.myUserId,
                createdBy: client.clientInfoStore.myUserId,
                productId: product.id,
                quantity: chance.integer({ min: 1, max: Math.min(3, productsWithDenominations.length) }),
            };
            const denomination = chance.pickone(product.denominations);
            props.price = denomination?.amount || 10000; // $100.00
            props.totalPrice = props.price * (props.quantity || 1);
            const item = await createShoppingCartItemSpecHelper(props, client);
            shoppingCartItems.push(item);
        }
        const networkResult = await client.operations.purchaseOrder.createPurchaseOrder({
            shoppingCartId: client.clientInfoStore.myUserId,
        });
        expect(networkResult.error).toBeUndefined();
        expect(networkResult.object).toBeDefined();
        expect(networkResult.object.items).toBeDefined();
        expect(networkResult.object.items.length).toEqual(shoppingCartItems.length);
    });
});
//# sourceMappingURL=createPurchaseOrder.spec.js.map