import { NotificationMethod } from '../../fsdata/gql/graphql.js';

export class SendMultiStepActionNotificationInput {
  public actionId = '';
  public notificationMethod?: NotificationMethod | null;

  constructor(attributes?: Partial<SendMultiStepActionNotificationInput>) {
    if (attributes) {
      if (attributes.actionId) {
        this.actionId = attributes.actionId;
      }
      if (attributes.notificationMethod) {
        this.notificationMethod = attributes.notificationMethod;
      }
    }
  }
}
