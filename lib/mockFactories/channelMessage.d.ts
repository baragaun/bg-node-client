import { ChannelMessage } from '../models/ChannelMessage.js';
import { User } from '../models/User.js';
declare const createMessage: (attributes: Partial<ChannelMessage>, sender?: User) => ChannelMessage;
export default createMessage;
