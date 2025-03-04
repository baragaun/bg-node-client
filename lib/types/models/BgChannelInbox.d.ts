import { BgChannelInboxItemInvitation } from './BgChannelInboxItemInvitation.js';
import { BgChannelInboxItemMessage } from './BgChannelInboxItemMessage.js';
export declare class BgChannelInbox {
    userId: string;
    unseenMessages?: BgChannelInboxItemMessage[] | null;
    unseenArchivedMessages?: BgChannelInboxItemMessage[] | null;
    latestMessages?: BgChannelInboxItemMessage[] | null;
    latestArchivedMessages?: BgChannelInboxItemMessage[] | null;
    pendingInvitations?: BgChannelInboxItemInvitation[] | null;
    invitations?: BgChannelInboxItemInvitation[] | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
    constructor(attributes?: Partial<BgChannelInbox>);
}
