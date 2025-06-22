import { BaseModel } from './BaseModel.js';
export class ContentStatus extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    optionsUpdatedAt;
    myUserUpdatedAt;
    myUserInboxUpdatedAt;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.optionsUpdatedAt) {
                this.optionsUpdatedAt = attributes.optionsUpdatedAt;
            }
            if (attributes.myUserUpdatedAt) {
                this.myUserUpdatedAt = attributes.myUserUpdatedAt;
            }
            if (attributes.myUserInboxUpdatedAt) {
                this.myUserInboxUpdatedAt = attributes.myUserInboxUpdatedAt;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=ContentStatus.js.map