import { BaseModel } from './BaseModel.js';
import { WalletItem } from './WalletItem.js';
import { WalletItemTransfer } from './WalletItemTransfer.js';
export class WalletItemTransferRecipientInfo extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    walletItem = new WalletItem();
    walletItemTransfer = new WalletItemTransfer();
    brand;
    product;
    secretCheck;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.walletItem !== undefined) {
                this.walletItem = attributes.walletItem;
            }
            if (attributes.walletItemTransfer !== undefined) {
                this.walletItemTransfer = attributes.walletItemTransfer;
            }
            if (attributes.brand !== undefined) {
                this.brand = attributes.brand;
            }
            if (attributes.product !== undefined) {
                this.product = attributes.product;
            }
            if (attributes.secretCheck !== undefined) {
                this.secretCheck = attributes.secretCheck;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=WalletItemTransferRecipientInfo.js.map