import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../../enums.js';
import chance from '../../../helpers/chance.js';
import logger from '../../../helpers/logger.js';
import findById from '../../../operations/findById.js';
import { findGiftCardProductsSpecHelper, } from '../giftCardProduct/findGiftCardProducts.specHelper.js';
export const createShoppingCartItemSpecHelper = async (props, client) => {
    logger.debug('BgServiceApiCheck.createShoppingCartItem: calling API/createShoppingCartItem', { props });
    if (!props.shoppingCartId) {
        props.shoppingCartId = client.clientInfoStore.myUserId;
    }
    if (!props.createdBy) {
        props.createdBy = client.clientInfoStore.myUserId;
    }
    if (!props.productId) {
        const products = await findGiftCardProductsSpecHelper(undefined, { limit: 1 }, client);
        props.productId = products[0].id;
        if (!props.price) {
            const denomination = chance.pickone(products[0].denominations);
            props.price = denomination?.amount || 10000; // $100.00
        }
    }
    if (!props.quantity) {
        props.quantity = 1;
    }
    if (!props.totalPrice) {
        props.totalPrice = (props.price || 10000) * (props.quantity || 1);
    }
    const response = await client.operations.shoppingCartItem.createShoppingCartItem(props);
    const shoppingCartItem = response.object;
    expect(response.error).toBeUndefined();
    expect(shoppingCartItem).toBeDefined();
    expect(shoppingCartItem.shoppingCartId).toBe(props.shoppingCartId);
    expect(shoppingCartItem.productId).toBe(props.productId);
    expect(shoppingCartItem.quantity).toBe(props.quantity);
    expect(shoppingCartItem.price).toBe(props.price);
    expect(shoppingCartItem.totalPrice).toBe(props.totalPrice);
    if (!client.isInMockMode) {
        // Verifying remote copy:
        const { object: shoppingCartItemFromNetwork, error: errorFromNetwork } = await findById(shoppingCartItem.id, ModelType.ShoppingCartItem, { cachePolicy: CachePolicy.network });
        expect(errorFromNetwork).toBeUndefined();
        expect(shoppingCartItemFromNetwork.id).toBe(shoppingCartItem.id);
        expect(shoppingCartItemFromNetwork.shoppingCartId).toBe(props.shoppingCartId);
        expect(shoppingCartItemFromNetwork.productId).toBe(props.productId);
        expect(shoppingCartItemFromNetwork.quantity).toBe(props.quantity);
        expect(shoppingCartItemFromNetwork.price).toBe(props.price);
        expect(shoppingCartItemFromNetwork.totalPrice).toBe(props.totalPrice);
    }
    return shoppingCartItem;
};
//# sourceMappingURL=createShoppingCartItem.specHelper.js.map