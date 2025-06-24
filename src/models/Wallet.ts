import { BaseModel } from './BaseModel.js';
import { WalletItem } from './WalletItem.js';

export class Wallet extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public items: WalletItem[] = [];
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<Wallet>) {
    super(attributes);

    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.items !== undefined) {
        this.items = attributes.items;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
