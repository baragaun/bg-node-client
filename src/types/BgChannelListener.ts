import { BgBaseListener } from './BgBaseListener.js';
import { QueryResult } from './QueryResult.js';
import { Channel } from '../models/Channel.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { ChannelMessage } from '../models/ChannelMessage.js';

/**
 * Interface representing a listener for channel events.
 */
export interface BgChannelDataListener extends BgBaseListener {
  channelId?: string;
  channelMessageId?: string;

  onChannelCreated?: (result: QueryResult<Channel>) => void;
  onChannelUpdated?: (result: QueryResult<Channel>) => void;
  onChannelDeleted?: (result: QueryResult<Channel>) => void;

  onChannelInvitationCreated?: (result: QueryResult<ChannelInvitation>) => void;
  onChannelInvitationUpdated?: (result: QueryResult<ChannelInvitation>) => void;
  onChannelInvitationDeleted?: (result: QueryResult<ChannelInvitation>) => void;

  onChannelMessageCreated?: (result: QueryResult<ChannelMessage>) => void | Promise<void>;
  onChannelMessageUpdated?: (result: QueryResult<ChannelMessage>) => void | Promise<void>;
  onChannelMessageDeleted?: (result: QueryResult<ChannelMessage>) => void | Promise<void>;

  onChannelParticipantCreated?: (result: QueryResult<ChannelMessage>) => void;
  onChannelParticipantUpdated?: (result: QueryResult<ChannelMessage>) => void;
  onChannelParticipantDeleted?: (result: QueryResult<ChannelMessage>) => void;
}
