import { BaseModel } from './BaseModel.js';
export class Wallet extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    items = [];
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
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
//# sourceMappingURL=Wallet.js.map