import { BgBaseListener } from './BgBaseListener.js';
import { ChannelListItem } from './ChannelListItem.js';
import { QueryResult } from './QueryResult.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { ChannelMessage } from '../models/ChannelMessage.js';

/**
 * Interface representing a listener for channel events.
 */
export interface BgChannelDataListener extends BgBaseListener {
  channelId?: string;
  channelMessageId?: string;

  onChannelCreated?: (result: QueryResult<ChannelListItem>) => void;
  onChannelUpdated?: (result: QueryResult<ChannelListItem>) => void;
  onChannelDeleted?: (result: QueryResult<ChannelListItem>) => void;

  onChannelInvitationCreated?: (result: QueryResult<ChannelInvitation>) => void;
  onChannelInvitationUpdated?: (result: QueryResult<ChannelInvitation>) => void;
  onChannelInvitationDeleted?: (result: QueryResult<ChannelInvitation>) => void;

  onChannelMessageCreated?: (result: QueryResult<ChannelMessage>) => void;
  onChannelMessageUpdated?: (result: QueryResult<ChannelMessage>) => void;
  onChannelMessageDeleted?: (result: QueryResult<ChannelMessage>) => void;

  onChannelParticipantCreated?: (result: QueryResult<ChannelMessage>) => void;
  onChannelParticipantUpdated?: (result: QueryResult<ChannelMessage>) => void;
  onChannelParticipantDeleted?: (result: QueryResult<ChannelMessage>) => void;
}
