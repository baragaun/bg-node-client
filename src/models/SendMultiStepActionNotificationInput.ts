import { NotificationMethod } from '../enums.js';

export class SendMultiStepActionNotificationInput {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public actionId = '';
  public notificationMethod?: NotificationMethod | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  constructor(attributes?: Partial<SendMultiStepActionNotificationInput>) {
    if (attributes) {
      // @bg-codegen:class.const.attr >>Note: Code is generated between these markers<<
      if (attributes.actionId) {
        this.actionId = attributes.actionId;
      }
      if (attributes.notificationMethod) {
        this.notificationMethod = attributes.notificationMethod;
      }
      // @bg-codegen:/class.const.attr >>Note: Code is generated between these markers<<
    }
  }
}
