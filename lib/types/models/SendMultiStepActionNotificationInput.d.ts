import { NotificationMethod } from '../../fsdata/gql/graphql.js';
export declare class SendMultiStepActionNotificationInput {
    actionId: string;
    notificationMethod?: NotificationMethod | null;
    constructor(attributes?: Partial<SendMultiStepActionNotificationInput>);
}
