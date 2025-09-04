import { expect } from 'vitest';
import logger from '../../../helpers/logger.js';
import { createMultipleShoppingCartItemsSpecHelper, } from '../shoppingCartItem/createMultipleShoppingCartItems.specHelper.js';
export const createPurchaseOrderSpecHelper = async (props, itemCount, shoppingCartItems, client) => {
    logger.debug('createPurchaseOrderSpecHelper called.', { props, itemCount });
    if (shoppingCartItems.length < 1) {
        shoppingCartItems = await createMultipleShoppingCartItemsSpecHelper(itemCount, client);
    }
    if (!props) {
        props = {};
    }
    if (!props.shoppingCartId) {
        props.shoppingCartId = client.clientInfoStore.myUserId;
    }
    if (!props.userId) {
        props.userId = client.clientInfoStore.myUserId;
    }
    if (!props.createdBy) {
        props.createdBy = client.clientInfoStore.myUserId;
    }
    const response = await client.operations.purchaseOrder.createPurchaseOrder(props);
    const purchaseOrder = response.object;
    expect(response.error).toBeUndefined();
    expect(purchaseOrder).toBeTruthy();
    expect(response.object.items).toBeTruthy();
    expect(response.object.items.length).toEqual(shoppingCartItems.length);
    return { purchaseOrder, shoppingCartItems };
};
//# sourceMappingURL=createPurchaseOrder.specHelper.js.map