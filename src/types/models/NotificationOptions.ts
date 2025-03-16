import { NotificationType } from '../../enums.js';

export abstract class NotificationOptions {
  public notificationType: NotificationType = NotificationType.unset;
  public enableEmail?: boolean | null;
  public enableInAppMessage?: boolean | null;
  public enablePushNotification?: boolean | null;
  public enableSms?: boolean | null;
  public frequency?: string | null;

  protected constructor(attributes?: Partial<NotificationOptions>) {
    if (attributes) {
      if (attributes.notificationType) {
        this.notificationType = attributes.notificationType;
      }
      if (attributes.enableEmail === true || attributes.enableEmail === false) {
        this.enableEmail = attributes.enableEmail;
      }
      if (
        attributes.enableInAppMessage === true ||
        attributes.enableInAppMessage === false
      ) {
        this.enableInAppMessage = attributes.enableInAppMessage;
      }
      if (
        attributes.enablePushNotification === true ||
        attributes.enablePushNotification === false
      ) {
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
