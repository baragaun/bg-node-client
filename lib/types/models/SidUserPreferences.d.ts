import { BaseModel } from './BaseModel.js';
import { NotificationOptions } from './NotificationOptions.js';
export declare abstract class SidUserPreferences extends BaseModel {
    shareEmail?: boolean | null;
    sharePhoneNumber?: boolean | null;
    showWelcomeMessage?: boolean | null;
    notificationOptions?: NotificationOptions[] | null;
    protected constructor(attributes?: Partial<SidUserPreferences>);
}
