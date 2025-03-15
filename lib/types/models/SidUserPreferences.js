import { BaseModel } from './BaseModel.js';
export class SidUserPreferences extends BaseModel {
    shareEmail;
    sharePhoneNumber;
    showWelcomeMessage;
    notificationOptions;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.shareEmail === true || attributes.shareEmail === false) {
                this.shareEmail = attributes.shareEmail;
            }
            if (attributes.sharePhoneNumber === true ||
                attributes.sharePhoneNumber === false) {
                this.sharePhoneNumber = attributes.sharePhoneNumber;
            }
            if (attributes.showWelcomeMessage === true ||
                attributes.showWelcomeMessage === false) {
                this.showWelcomeMessage = attributes.showWelcomeMessage;
            }
            if (attributes.notificationOptions) {
                this.notificationOptions = attributes.notificationOptions;
            }
        }
    }
}
//# sourceMappingURL=SidUserPreferences.js.map