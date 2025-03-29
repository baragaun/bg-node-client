import { NotificationMethod as NotificationMethodFromClient } from '../../../enums.js';
import { QueryResult } from '../../../types/QueryResult.js';
declare const sendMultiStepActionNotification: (actionId: string, email: string | undefined, phoneNumber: string | undefined, notificationMethod: NotificationMethodFromClient) => Promise<QueryResult<string>>;
export default sendMultiStepActionNotification;
