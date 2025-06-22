import { BaseModel } from './BaseModel.js';
import { NotificationOptions } from './NotificationOptions.js';

export abstract class SidUserPreferences extends BaseModel {
  // @bg-codegen:class.attr >>Note: Code is generated between these markers<<
  public shareEmail?: boolean | null;
  public sharePhoneNumber?: boolean | null;
  public showWelcomeMessage?: boolean | null;
  public notificationOptions?: NotificationOptions[] | null;
  // @bg-codegen:/class.attr >>Note: Code is generated between these markers<<

  protected constructor(attributes?: Partial<SidUserPreferences>) {
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
