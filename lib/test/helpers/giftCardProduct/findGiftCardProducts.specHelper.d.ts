import { BgNodeClient } from '../../../BgNodeClient.js';
import { GiftCardProduct } from '../../../models/GiftCardProduct.js';
import { ShoppingCartItem } from '../../../models/ShoppingCartItem.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
export declare const findGiftCardProductsSpecHelper: (props: Partial<ShoppingCartItem> | undefined, options: FindObjectsOptions, client: BgNodeClient) => Promise<GiftCardProduct[]>;
