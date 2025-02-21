import { Channel } from '../types/models/Channel.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
declare const data: {
    addChannel: (channel: Channel) => void;
    addChannelMessage: (message: ChannelMessage) => void;
    deleteChannel: (id: string) => void;
    deleteChannelMessage: (id: string) => void;
    findChannel: (id: string) => Channel | null;
    findMessage: (id: string) => ChannelMessage | null;
};
export default data;
