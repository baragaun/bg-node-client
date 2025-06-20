import { ModelType } from '../enums.js';

const isModelTypeSupported = (
  modelType: ModelType,
): boolean => [
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
