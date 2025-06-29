import { BgNodeClient } from '../../../BgNodeClient.js';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
export declare const createShoppingCartItemSpecHelper: (props: Partial<ShoppingCartItem> | undefined, client: BgNodeClient) => Promise<ShoppingCartItem | null>;
