import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { User } from '../../types/models/User.js';
declare const createMessage: (attributes: Partial<ChannelMessage>, sender?: User) => ChannelMessage;
export default createMessage;
