import { BaseModel } from './BaseModel.js';
export class WalletItemTransferAcceptInfo extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    brand;
    walletItem;
    walletItemTransfer;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.brand !== undefined) {
                this.brand = attributes.brand;
            }
            if (attributes.walletItem !== undefined) {
                this.walletItem = attributes.walletItem;
            }
            if (attributes.walletItemTransfer !== undefined) {
                this.walletItemTransfer = attributes.walletItemTransfer;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=WalletItemTransferAcceptInfo.js.map