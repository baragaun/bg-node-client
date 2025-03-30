import { ModelType } from '../enums.js';
import { Channel } from './Channel.js';
import { ChannelInvitation } from './ChannelInvitation.js';
import { ChannelMessage } from './ChannelMessage.js';
import { ChannelParticipant } from './ChannelParticipant.js';
import { ClientInfo } from './ClientInfo.js';
import { MyUser } from './MyUser.js';
import { SidMultiStepAction } from './SidMultiStepAction.js';
import { User } from './User.js';
import { UserInbox } from './UserInbox.js';
const modelFactory = (props, modelType) => {
    if (modelType === ModelType.Channel) {
        return new Channel(props);
    }
    if (modelType === ModelType.ChannelInvitation) {
        return new ChannelInvitation(props);
    }
    if (modelType === ModelType.ChannelMessage) {
        return new ChannelMessage(props);
    }
    if (modelType === ModelType.ChannelParticipant) {
        return new ChannelParticipant(props);
    }
    if (modelType === ModelType.ClientInfo) {
        return new ClientInfo(props);
    }
    if (modelType === ModelType.MyUser) {
        return new MyUser(props);
    }
    if (modelType === ModelType.SidMultiStepAction) {
        return new SidMultiStepAction(props);
    }
    if (modelType === ModelType.User) {
        return new User(props);
    }
    // if (modelType === ModelType.UserBlock) {
    //   return new UserBlock(props as unknown as Partial<UserBlock>) as unknown as T;
    // }
    if (modelType === ModelType.UserInbox) {
        return new UserInbox(props);
    }
    throw new Error(`Model type ${modelType} is not supported.`);
};
export default modelFactory;
//# sourceMappingURL=modelFactory.js.map