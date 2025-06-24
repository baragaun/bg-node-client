import { BaseModel } from './BaseModel.js';
import { ChannelInbox } from './ChannelInbox.js';
export declare class UserInbox extends BaseModel {
    userId: string;
    channels?: ChannelInbox | null;
    constructor(attributes?: Partial<UserInbox>);
}
