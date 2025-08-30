import { BaseModel } from './BaseModel.js';
import { Brand } from './Brand.js';
import { WalletItem } from './WalletItem.js';
import { WalletItemTransfer } from './WalletItemTransfer.js';

export class WalletItemTransferAcceptInfo extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public brand: Brand;
  public walletItem: WalletItem;
  public walletItemTransfer: WalletItemTransfer;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<WalletItemTransferAcceptInfo>) {
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
