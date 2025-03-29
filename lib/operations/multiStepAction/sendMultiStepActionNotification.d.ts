import { NotificationMethod } from '../../enums.js';
import { QueryResult } from '../../types/QueryResult.js';
declare const sendMultiStepActionNotification: (actionId: string, email: string | undefined, phoneNumber: string | undefined, notificationMethod: NotificationMethod) => Promise<QueryResult<string>>;
export default sendMultiStepActionNotification;
