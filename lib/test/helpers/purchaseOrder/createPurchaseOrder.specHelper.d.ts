import { BgNodeClient } from '../../../BgNodeClient.js';
import { PurchaseOrder } from '../../../models/PurchaseOrder.js';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
export declare const createPurchaseOrderSpecHelper: (props: Partial<PurchaseOrder> | undefined, itemCount: number | undefined, shoppingCartItems: ShoppingCartItem[], client: BgNodeClient) => Promise<{
    purchaseOrder: PurchaseOrder;
    shoppingCartItems: ShoppingCartItem[];
} | null>;
