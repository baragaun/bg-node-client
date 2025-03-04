import { BaseModel } from './BaseModel.js';
import { NotificationOptions } from './NotificationOptions.js';

export abstract class SidUserPreferences extends BaseModel {
  public shareEmail?: boolean | null;
  public sharePhoneNumber?: boolean | null;
  public showWelcomeMessage?: boolean | null;
  public notificationOptions?: NotificationOptions[] | null;

  protected constructor(attributes?: Partial<SidUserPreferences>) {
    super(attributes);

    if (attributes) {
      if (attributes.shareEmail === true || attributes.shareEmail === false) {
        this.shareEmail = attributes.shareEmail;
      }
      if (attributes.sharePhoneNumber === true || attributes.sharePhoneNumber === false) {
        this.sharePhoneNumber = attributes.sharePhoneNumber;
      }
      if (attributes.showWelcomeMessage === true || attributes.showWelcomeMessage === false) {
        this.showWelcomeMessage = attributes.showWelcomeMessage;
      }
      if (attributes.notificationOptions) {
        this.notificationOptions = attributes.notificationOptions;
      }
    }
  }
}
