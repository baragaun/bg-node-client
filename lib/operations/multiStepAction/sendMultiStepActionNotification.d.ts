import { NotificationMethod } from '../../enums.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const sendMultiStepActionNotification: (actionId: string, email: string | undefined, phoneNumber: string | undefined, notificationMethod: NotificationMethod) => Promise<MutationResult<string>>;
export default sendMultiStepActionNotification;
