import { ModelType } from '../enums.js';
import { Channel } from '../types/models/Channel.js';
import { ChannelInvitation } from '../types/models/ChannelInvitation.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ChannelParticipant } from '../types/models/ChannelParticipant.js';
import { User } from '../types/models/User.js';
import { MyUser } from '../types/models/MyUser.js';
import { UserInbox } from '../types/models/UserInbox.js';
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