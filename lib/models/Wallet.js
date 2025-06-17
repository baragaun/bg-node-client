import { BaseModel } from './BaseModel.js';
export class Wallet extends BaseModel {
    items = [];
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.items) {
                this.items = attributes.items;
            }
        }
    }
}
//# sourceMappingURL=Wallet.js.map