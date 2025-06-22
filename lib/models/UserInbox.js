import { BaseModel } from './BaseModel.js';
export class UserInbox extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    userId = '';
    channels;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.userId !== undefined) {
                this.userId = attributes.userId;
            }
            if (attributes.channels !== undefined) {
                this.channels = attributes.channels;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=UserInbox.js.map