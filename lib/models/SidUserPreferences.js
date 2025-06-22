import { BaseModel } from './BaseModel.js';
export class SidUserPreferences extends BaseModel {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    shareEmail;
    sharePhoneNumber;
    showWelcomeMessage;
    notificationOptions;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.shareEmail !== undefined) {
                this.shareEmail = attributes.shareEmail;
            }
            if (attributes.sharePhoneNumber !== undefined) {
                this.sharePhoneNumber = attributes.sharePhoneNumber;
            }
            if (attributes.showWelcomeMessage !== undefined) {
                this.showWelcomeMessage = attributes.showWelcomeMessage;
            }
            if (attributes.notificationOptions !== undefined) {
                this.notificationOptions = attributes.notificationOptions;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=SidUserPreferences.js.map