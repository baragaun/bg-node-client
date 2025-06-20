import { ModelType } from '../enums.js';
const isModelTypeSupported = (modelType) => [
    ModelType.Channel,
    ModelType.ChannelInvitation,
    ModelType.ChannelMessage,
    ModelType.ChannelParticipant,
    ModelType.MyUser,
    ModelType.User,
    ModelType.UserInbox,
    ModelType.Wallet,
].includes(modelType);
export default isModelTypeSupported;
//# sourceMappingURL=isModelTypeSupported.js.map