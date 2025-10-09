import { BaseModel } from './BaseModel.js';
import { ChannelInvitationStatus } from '../enums.js';
export declare class BgChannelInvitation extends BaseModel {
    channelId?: string | null;
    recipientId: string;
    channelName?: string | null;
    channelTopic?: string | null;
    messageText?: string | null;
    autoAccept?: boolean | null;
    declineReasonTextId?: string | null;
    dismissedFromInboxBySenderAt?: string | null;
    dismissedFromInboxByRecipientAt?: string | null;
    readByRecipientAt?: string | null;
    status: ChannelInvitationStatus;
    suspendedAt?: string | null;
    suspendedBy?: string | null;
    userSearchId?: string | null;
    searchRank?: number | null;
    constructor(attributes?: Partial<BgChannelInvitation>);
    static get searchFields(): string[];
}
