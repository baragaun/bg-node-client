import { Channel } from './models/Channel.js';
import { User } from './models/User.js';
import { ChannelMessage } from './models/ChannelMessage.js';

export interface Factories {
  channel: (
    attributes: Partial<Channel>,
    userCount: number,
    messageCount: number,
    users?: User[],
    messages?: ChannelMessage[],
  ) => Channel;

  channelMessage: (
    attributes: Partial<ChannelMessage>,
    sender?: User,
  ) => ChannelMessage;

  user: (
    attributes: Partial<User>,
  ) => User;
}
