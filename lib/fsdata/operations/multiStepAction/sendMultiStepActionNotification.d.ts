import { NotificationMethod as NotificationMethodFromClient } from '../../../enums.js';
declare const sendMultiStepActionNotification: (actionId: string, email: string | undefined, phoneNumber: string | undefined, notificationMethod: NotificationMethodFromClient) => Promise<string>;
export default sendMultiStepActionNotification;
