import { NotificationType } from '../enums.js';
export declare abstract class NotificationOptions {
    notificationType: NotificationType;
    enableEmail?: boolean | null;
    enableInAppMessage?: boolean | null;
    enablePushNotification?: boolean | null;
    enableSms?: boolean | null;
    frequency?: string | null;
    protected constructor(attributes?: Partial<NotificationOptions>);
}
