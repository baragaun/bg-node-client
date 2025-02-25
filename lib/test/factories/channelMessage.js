import FactoryGirl from 'factory-girl';
import chance from '../helpers/chance.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { ChannelMessageType } from '../../types/enums.js';
const attrs = {
    channelMessageType: () => chance.pickone(Object.values(ChannelMessageType)),
    messageText: () => chance.sentence(),
    statuses: [],
};
const initChannelMessageFactory = () => {
    FactoryGirl.factory.define('ChannelMessage', ChannelMessage, attrs);
};
export default initChannelMessageFactory;
//# sourceMappingURL=channelMessage.js.map