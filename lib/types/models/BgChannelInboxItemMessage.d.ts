import { ChannelMessageType } from '../../enums.js';
export declare class BgChannelInboxItemMessage {
    id: string;
    channelId: string;
    replyToMessageId?: string | null;
    channelMessageType?: ChannelMessageType | null;
    messageText?: string | null;
    senderUserHandle?: string | null;
    senderFirstName?: string | null;
    senderLastName?: string | null;
    senderAvatarUrl?: string | null;
    seenAt?: string | null;
    isArchived?: boolean | null;
    createdAt: Date;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
    userIds?: string[] | null;
    constructor(attributes?: Partial<BgChannelInboxItemMessage>);
}
