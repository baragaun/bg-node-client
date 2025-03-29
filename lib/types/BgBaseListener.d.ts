import { MutationResult } from './MutationResult.js';
import { BgListenerTopic } from '../enums.js';
import { Channel } from '../models/Channel.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
/**
 * Interface representing a listener for channel events.
 */
export interface BgBaseListener {
    id: string;
    topic: BgListenerTopic;
    channelId?: string;
    channelMessageId?: string;
    onChannelCreated?: (result: MutationResult<Channel>) => void;
    onChannelUpdated?: (result: MutationResult<Channel>) => void;
    onChannelDeleted?: (result: MutationResult<Channel>) => void;
    onChannelInvitationCreated?: (result: MutationResult<ChannelInvitation>) => void;
    onChannelInvitationUpdated?: (result: MutationResult<ChannelInvitation>) => void;
    onChannelInvitationDeleted?: (result: MutationResult<ChannelInvitation>) => void;
    onChannelMessageCreated?: (result: MutationResult<ChannelMessage>) => void;
    onChannelMessageUpdated?: (result: MutationResult<ChannelMessage>) => void;
    onChannelMessageDeleted?: (result: MutationResult<ChannelMessage>) => void;
    onChannelParticipantCreated?: (result: MutationResult<ChannelMessage>) => void;
    onChannelParticipantUpdated?: (result: MutationResult<ChannelMessage>) => void;
    onChannelParticipantDeleted?: (result: MutationResult<ChannelMessage>) => void;
}
