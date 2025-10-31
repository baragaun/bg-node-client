import { BgBaseListener } from './BgBaseListener.js';
import { ChannelEventReason } from '../enums.js';
import { Channel } from '../models/Channel.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { ChannelParticipant } from '../models/ChannelParticipant.js';

/**
 * Interface representing a listener for channel events.
 */
export interface ChannelEventListener extends BgBaseListener {
  channelId?: string;
  onEvent: (
    reason: ChannelEventReason,
    channelId: string,
    data?: {
      channel?: Channel,
      channelInvitation?: ChannelInvitation;
      channelMessage?: ChannelMessage;
      channelParticipant?: ChannelParticipant;
    },
  ) => void | Promise<void>;
}
