import { BaseModel } from './BaseModel.js';
export class SidContactListFilter extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    userIdIn;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.userIdIn !== undefined) {
                this.userIdIn = attributes.userIdIn;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SidContactListFilter.js.map