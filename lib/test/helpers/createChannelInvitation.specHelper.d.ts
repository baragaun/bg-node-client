import { BgNodeClient } from '../../BgNodeClient.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
export declare const createChannelInvitationSpecHelper: (props: Partial<ChannelInvitation>, client: BgNodeClient) => Promise<ChannelInvitation | null>;
