import { ModelType } from '../enums.js';
import { Channel } from '../models/Channel.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { ChannelParticipant } from '../models/ChannelParticipant.js';
import { ClientInfo } from '../models/ClientInfo.js';
import { MyUser } from '../models/MyUser.js';
import { User } from '../models/User.js';
import { UserInbox } from '../models/UserInbox.js';
const modelFactory = (attributes, modelType) => {
    if (modelType === ModelType.Channel) {
        return new Channel(attributes);
    }
    if (modelType === ModelType.ChannelInvitation) {
        return new ChannelInvitation(attributes);
    }
    if (modelType === ModelType.ChannelMessage) {
        return new ChannelMessage(attributes);
    }
    if (modelType === ModelType.ChannelParticipant) {
        return new ChannelParticipant(attributes);
    }
    if (modelType === ModelType.ClientInfo) {
        return new ClientInfo(attributes);
    }
    if (modelType === ModelType.MyUser) {
        return new MyUser(attributes);
    }
    if (modelType === ModelType.User) {
        return new User(attributes);
    }
    // if (modelType === ModelType.UserBlock) {
    //   return new UserBlock(attributes as unknown as Partial<UserBlock>) as unknown as T;
    // }
    if (modelType === ModelType.UserInbox) {
        return new UserInbox(attributes);
    }
    throw new Error(`Model type ${modelType} is not supported.`);
};
export default modelFactory;
//# sourceMappingURL=modelFactory.js.map