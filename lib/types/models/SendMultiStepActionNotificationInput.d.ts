import { NotificationMethod } from '../../enums.js';
export declare class SendMultiStepActionNotificationInput {
    actionId: string;
    notificationMethod?: NotificationMethod | null;
    constructor(attributes?: Partial<SendMultiStepActionNotificationInput>);
}
