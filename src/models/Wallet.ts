import { BaseModel } from './BaseModel.js';
import { WalletItem } from './WalletItem.js';

export class Wallet extends BaseModel {
  public items: WalletItem[] = [];

  constructor(attributes?: Partial<Wallet>) {
    super(attributes);

    if (attributes) {
      if (attributes.items) {
        this.items = attributes.items;
      }
    }
  }
}
