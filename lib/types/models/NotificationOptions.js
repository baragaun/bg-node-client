import { NotificationType } from '../../enums.js';
export class NotificationOptions {
    notificationType = NotificationType.unset;
    enableEmail;
    enableInAppMessage;
    enablePushNotification;
    enableSms;
    frequency;
    constructor(attributes) {
        if (attributes) {
            if (attributes.notificationType) {
                this.notificationType = attributes.notificationType;
            }
            if (attributes.enableEmail === true || attributes.enableEmail === false) {
                this.enableEmail = attributes.enableEmail;
            }
            if (attributes.enableInAppMessage === true || attributes.enableInAppMessage === false) {
                this.enableInAppMessage = attributes.enableInAppMessage;
            }
            if (attributes.enablePushNotification === true || attributes.enablePushNotification === false) {
                this.enablePushNotification = attributes.enablePushNotification;
            }
            if (attributes.enableSms === true || attributes.enableSms === false) {
                this.enableSms = attributes.enableSms;
            }
            if (attributes.frequency) {
                this.frequency = attributes.frequency;
            }
        }
    }
}
//# sourceMappingURL=NotificationOptions.js.map