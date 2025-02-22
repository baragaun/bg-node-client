import { Channel } from './models/Channel.js';
import { ChannelMessage } from './models/ChannelMessage.js';
import { MutateResult } from './MutateResult.js';

/**
 * Interface representing a listener for channel events.
 */
export interface ChannelsListener {
  id: string;

  channelId?: string;
  channelMessageId?: string;

  onChannelCreated?: (result: MutateResult<Channel>) => void;
  onChannelUpdated?: (result: MutateResult<Channel>) => void;
  onChannelDeleted?: (result: MutateResult<Channel>) => void;

  // onChannelInvitationCreated?: (result: MutateChannelResult<ChannelInvitation>) => void;
  // onChannelInvitationUpdated?: (result: MutateChannelResult<ChannelInvitation>) => void;
  // onChannelInvitationDeleted?: (result: MutateChannelResult<ChannelInvitation>) => void;

  onChannelMessageCreated?: (result: MutateResult<ChannelMessage>) => void;
  onChannelMessageUpdated?: (result: MutateResult<ChannelMessage>) => void;
  onChannelMessageDeleted?: (result: MutateResult<ChannelMessage>) => void;
}
