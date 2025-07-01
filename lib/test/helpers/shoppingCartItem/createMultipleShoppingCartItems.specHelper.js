import { createShoppingCartItemSpecHelper } from './createShoppingCartItem.specHelper.js';
import chance from '../../../helpers/chance.js';
import logger from '../../../helpers/logger.js';
import { findGiftCardProductsSpecHelper, } from '../giftCardProduct/findGiftCardProducts.specHelper.js';
export const createMultipleShoppingCartItemsSpecHelper = async (itemCount, client) => {
    logger.debug('createMultipleShoppingCartItems: called.', { itemCount });
    const items = [];
    const products = await findGiftCardProductsSpecHelper(undefined, { limit: itemCount * 3 }, // not all products will have denominations
    client);
    const productsWithDenominations = products.filter(p => p.denominations?.length > 0);
    const selectedProducts = chance.pickset(productsWithDenominations, itemCount);
    for (const product of selectedProducts) {
        const itemProps = {
            shoppingCartId: client.clientInfoStore.myUserId,
            createdBy: client.clientInfoStore.myUserId,
            productId: product.id,
            quantity: chance.integer({ min: 1, max: Math.min(3, productsWithDenominations.length) }),
        };
        const denomination = chance.pickone(product.denominations);
        itemProps.price = denomination?.amount || 10000; // $100.00
        itemProps.totalPrice = itemProps.price * (itemProps.quantity || 1);
        const item = await createShoppingCartItemSpecHelper(itemProps, client);
        if (!item) {
            throw new Error('Failed to create shopping cart item');
        }
        items.push(item);
    }
    return items;
};
//# sourceMappingURL=createMultipleShoppingCartItems.specHelper.js.map