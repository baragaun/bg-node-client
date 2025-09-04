import { BaseModel } from './BaseModel.js';
import { Brand } from './Brand.js';
import { GiftCardProduct } from './GiftCardProduct.js';
import { WalletItem } from './WalletItem.js';
import { WalletItemTransfer } from './WalletItemTransfer.js';
export declare class WalletItemTransferAcceptInfo extends BaseModel {
    walletItem: WalletItem;
    walletItemTransfer: WalletItemTransfer;
    brand?: Brand | null;
    product?: GiftCardProduct | null;
    constructor(attributes?: Partial<WalletItemTransferAcceptInfo>);
}
