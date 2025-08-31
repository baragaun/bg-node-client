import { BaseModel } from './BaseModel.js';
import { Brand } from './Brand.js';
import { WalletItem } from './WalletItem.js';
import { WalletItemTransfer } from './WalletItemTransfer.js';
export declare class WalletItemTransferAcceptInfo extends BaseModel {
    brand: Brand;
    walletItem: WalletItem;
    walletItemTransfer: WalletItemTransfer;
    constructor(attributes?: Partial<WalletItemTransferAcceptInfo>);
}
