import { NotificationType } from '../enums.js';

export abstract class NotificationOptions {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public notificationType: NotificationType = NotificationType.unset;
  public enableEmail?: boolean | null;
  public enableInAppMessage?: boolean | null;
  public enablePushNotification?: boolean | null;
  public enableSms?: boolean | null;
  public frequency?: string | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  protected constructor(attributes?: Partial<NotificationOptions>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
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
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
