import { NotificationMethod as NotificationMethodFromClient } from '../../../enums.js';
declare const sendMultiStepActionNotification: (actionId: string, notificationMethod: NotificationMethodFromClient) => Promise<string>;
export default sendMultiStepActionNotification;
