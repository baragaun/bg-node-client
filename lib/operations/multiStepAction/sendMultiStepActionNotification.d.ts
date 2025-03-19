import { NotificationMethod } from '../../enums.js';
import { MutationResult } from '../../types/MutationResult.js';
declare const sendMultiStepActionNotification: (actionId: string, notificationMethod: NotificationMethod) => Promise<MutationResult<string>>;
export default sendMultiStepActionNotification;
