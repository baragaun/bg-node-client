/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
import { BgChannelMetadata } from './BgChannelMetadata.js';
export declare class ChannelMetadata extends BgChannelMetadata {
    channelInvitationAccepted: boolean;
    messagesSentByCreatorCount: number;
    messagesSentByFirstParticipantCount: number;
    constructor(attributes?: Partial<ChannelMetadata>);
}
