import { BgBaseListener } from './BgBaseListener.js';
import { UserEventReason } from '../enums.js';
import { ChannelListItem } from './ChannelListItem.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { MyUser } from '../models/MyUser.js';
import { UserInbox } from '../models/UserInbox.js';
/**
 * Interface representing a listener for myUser events.
 */
export interface MyUserEventListener extends BgBaseListener {
    onEvent: (reason: UserEventReason, data?: {
        myUser?: MyUser;
        channel?: ChannelListItem;
        channelInvitation?: ChannelInvitation;
        inbox?: UserInbox;
    }) => void | Promise<void>;
}
