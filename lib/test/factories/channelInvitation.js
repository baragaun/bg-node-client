import FactoryGirl from 'factory-girl';
import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
import chance from '../helpers/chance.js';
const attrs = {
    channelName: () => chance.word(),
    channelTopic: () => chance.sentence(),
    messageText: () => chance.sentence(),
};
const initChannelInvitationFactory = () => {
    FactoryGirl.factory.define('ChannelInvitation', ChannelInvitation, attrs);
};
export default initChannelInvitationFactory;
//# sourceMappingURL=channelInvitation.js.map