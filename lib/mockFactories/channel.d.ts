import { Channel } from '../types/models/Channel.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { User } from '../types/models/User.js';
declare const createChannel: (attributes: Partial<Channel>, userCount: number, messageCount: number, users?: User[], messages?: ChannelMessage[]) => {
    channel: Channel;
    messages: ChannelMessage[];
    users: User[];
};
export default createChannel;
