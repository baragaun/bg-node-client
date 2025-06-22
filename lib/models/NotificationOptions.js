import { NotificationType } from '../enums.js';
export class NotificationOptions {
    // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
    notificationType = NotificationType.unset;
    enableEmail;
    enableInAppMessage;
    enablePushNotification;
    enableSms;
    frequency;
    // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<
    constructor(attributes) {
        if (attributes) {
            // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
            if (attributes.notificationType) {
                this.notificationType = attributes.notificationType;
            }
            if (attributes.enableEmail === true || attributes.enableEmail === false) {
                this.enableEmail = attributes.enableEmail;
            }
            if (attributes.enableInAppMessage === true ||
                attributes.enableInAppMessage === false) {
                this.enableInAppMessage = attributes.enableInAppMessage;
            }
            if (attributes.enablePushNotification === true ||
                attributes.enablePushNotification === false) {
                this.enablePushNotification = attributes.enablePushNotification;
            }
            if (attributes.enableSms === true || attributes.enableSms === false) {
                this.enableSms = attributes.enableSms;
            }
            if (attributes.frequency) {
                this.frequency = attributes.frequency;
            }
            // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
        }
    }
}
//# sourceMappingURL=NotificationOptions.js.map