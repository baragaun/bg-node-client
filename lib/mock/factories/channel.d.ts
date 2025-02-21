import { Channel } from '../../types/models/Channel.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { User } from '../../types/models/User.js';
declare const createChannel: (attributes: Partial<Channel>, userCount: number, messageCount: number, users?: User[], messages?: ChannelMessage[]) => Channel;
export default createChannel;
