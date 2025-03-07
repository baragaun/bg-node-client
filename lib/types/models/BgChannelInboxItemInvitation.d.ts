import { ChannelInvitationStatus } from '../../enums.js';
export declare class BgChannelInboxItemInvitation {
    id: string;
    channelId?: string | null;
    messageText?: string | null;
    readByRecipientAt?: string | null;
    status: ChannelInvitationStatus;
    createdAt: Date;
    createdBy?: string | null;
    recipientId?: string | null;
    constructor(attributes?: Partial<BgChannelInboxItemInvitation>);
}
