import { Channel } from './models/Channel.js';
import { ChannelInvitation } from './models/ChannelInvitation.js';
import { ChannelMessage } from './models/ChannelMessage.js';
import { ChannelParticipant } from './models/ChannelParticipant.js';
import { User } from './models/User.js';
import { UserInbox } from './models/UserInbox.js';
export type Model = Channel | ChannelInvitation | ChannelMessage | ChannelParticipant | UserInbox | User;
