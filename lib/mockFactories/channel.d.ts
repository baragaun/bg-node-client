import { Channel } from '../models/Channel.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { User } from '../models/User.js';
declare const createMockChannel: (attributes: Partial<Channel>, userCount: number, messageCount: number, users?: User[], messages?: ChannelMessage[]) => {
    channel: Channel;
    messages: ChannelMessage[];
    users: User[];
};
export default createMockChannel;
