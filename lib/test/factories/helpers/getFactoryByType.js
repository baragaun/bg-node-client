import { ModelType } from '../../../types/enums.js';
import channelFactory from '../channel.js';
import channelInvitationFactory from '../channelInvitation.js';
import channelMessageFactory from '../channelMessage.js';
import channelParticipantFactory from '../channelParticipant.js';
import userFactory from '../user.js';
import userInboxFactory from '../userInbox.js';
const getFactoryByType = (modelType) => {
    switch (modelType) {
        case ModelType.Channel:
            return channelFactory;
        case ModelType.ChannelInvitation:
            return channelInvitationFactory;
        case ModelType.ChannelMessage:
            return channelMessageFactory;
        case ModelType.ChannelParticipant:
            return channelParticipantFactory;
        case ModelType.User:
            return userFactory;
        case ModelType.UserInbox:
            return userInboxFactory;
        default:
            throw new Error(`Unknown model type: ${modelType}`);
    }
};
export default getFactoryByType;
//# sourceMappingURL=getFactoryByType.js.map