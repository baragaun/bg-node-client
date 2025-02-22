import { Channel } from './models/Channel.js';
import { ChannelMessage } from './models/ChannelMessage.js';
import { MutationResult } from './MutationResult.js';

/**
 * Interface representing a listener for channel events.
 */
export interface ChannelsListener {
  id: string;

  channelId?: string;
  channelMessageId?: string;

  onChannelCreated?: (result: MutationResult<Channel>) => void;
  onChannelUpdated?: (result: MutationResult<Channel>) => void;
  onChannelDeleted?: (result: MutationResult<Channel>) => void;

  // onChannelInvitationCreated?: (result: MutateChannelResult<ChannelInvitation>) => void;
  // onChannelInvitationUpdated?: (result: MutateChannelResult<ChannelInvitation>) => void;
  // onChannelInvitationDeleted?: (result: MutateChannelResult<ChannelInvitation>) => void;

  onChannelMessageCreated?: (result: MutationResult<ChannelMessage>) => void;
  onChannelMessageUpdated?: (result: MutationResult<ChannelMessage>) => void;
  onChannelMessageDeleted?: (result: MutationResult<ChannelMessage>) => void;
}
