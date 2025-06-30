import { expect } from 'vitest';
import chance from '../../../helpers/chance.js';
import logger from '../../../helpers/logger.js';
import { findGiftCardProductsSpecHelper, } from '../giftCardProduct/findGiftCardProducts.specHelper.js';
import { createShoppingCartItemSpecHelper, } from '../shoppingCartItem/createShoppingCartItem.specHelper.js';
export const createPurchaseOrderSpecHelper = async (props, itemCount, shoppingCartItems, client) => {
    logger.debug('BgServiceApiCheck.createPurchaseOrder: calling API/createPurchaseOrder', { props });
    if (!props.shoppingCartId) {
        props.shoppingCartId = client.clientInfoStore.myUserId;
    }
    if (!props.userId) {
        props.userId = client.clientInfoStore.myUserId;
    }
    if (!props.createdBy) {
        props.createdBy = client.clientInfoStore.myUserId;
    }
    if (shoppingCartItems.length < 1) {
        const products = await findGiftCardProductsSpecHelper(undefined, { limit: 20 }, client);
        const productsWithDenominations = products.filter(p => p.denominations?.length > 0);
        const selectedProducts = chance.pickset(productsWithDenominations, itemCount);
        for (const product of selectedProducts) {
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
    }
    const response = await client.operations.purchaseOrder.createPurchaseOrder(props);
    const purchaseOrder = response.object;
    expect(response.error).toBeUndefined();
    expect(purchaseOrder).toBeDefined();
    expect(response.object.items).toBeDefined();
    expect(response.object.items.length).toEqual(shoppingCartItems.length);
    return { purchaseOrder, shoppingCartItems };
};
//# sourceMappingURL=createPurchaseOrder.specHelper.js.map