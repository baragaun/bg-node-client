import { BgBaseListener } from './BgBaseListener.js';
import { MyUserEventReason } from '../enums.js';
import { Channel } from '../models/Channel.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { MyUser } from '../models/MyUser.js';
import { UserInbox } from '../models/UserInbox.js';

/**
 * Interface representing a listener for myUser events.
 */
export interface MyUserEventListener extends BgBaseListener {
  onEvent: (
    reason: MyUserEventReason,
    data?: {
      myUser?: MyUser,
      channel?: Channel,
      channelInvitation?: ChannelInvitation;
      inbox?: UserInbox,
    },
  ) => void | Promise<void>;
}
