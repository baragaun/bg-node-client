import { expect } from 'vitest';
import { CachePolicy, ModelType } from '../../enums.js';
import logger from '../../helpers/logger.js';
import findById from '../../operations/findById.js';
// import factories from '../factories/factories.js';
export const createShoppingCartItemSpecHelper = async (props, client) => {
    logger.debug('BgServiceApiCheck.createShoppingCartItem: calling API/createShoppingCartItem', { props });
    // props = factories.shoppingCartItem.build(props);
    if (!props.shoppingCartId) {
        props.shoppingCartId = client.clientInfoStore.myUserId;
    }
    if (!props.createdBy) {
        props.createdBy = client.clientInfoStore.myUserId;
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