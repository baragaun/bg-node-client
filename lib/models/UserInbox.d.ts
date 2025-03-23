import { BaseModel } from './BaseModel.js';
import { BgChannelInbox } from './BgChannelInbox.js';
export declare class UserInbox extends BaseModel {
    userId: string;
    channels?: BgChannelInbox | null;
    constructor(attributes?: Partial<UserInbox>);
}
