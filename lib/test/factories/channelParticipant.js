import FactoryGirl from 'factory-girl';
// import chance from '../helpers/chance.js';
import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
const attrs = {};
const initChannelParticipantFactory = () => {
    FactoryGirl.factory.define('ChannelParticipant', ChannelParticipant, attrs);
};
export default initChannelParticipantFactory;
//# sourceMappingURL=channelParticipant.js.map