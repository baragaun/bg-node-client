import { Channel } from '../models/Channel.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { User } from '../models/User.js';

export interface MockFactories {
  channel: (
    attributes: Partial<Channel>,
    userCount: number,
    messageCount: number,
    users?: User[],
    messages?: ChannelMessage[],
  ) => { channel: Channel; messages: ChannelMessage[]; users: User[] };

  channelMessage: (
    attributes: Partial<ChannelMessage>,
    sender?: User,
  ) => ChannelMessage;

  user: (attributes: Partial<User>) => User;
}
