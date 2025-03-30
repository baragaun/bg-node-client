import { ModelType } from '../enums.js';
import { Channel } from './Channel.js';
import { ChannelInvitation } from './ChannelInvitation.js';
import { ChannelMessage } from './ChannelMessage.js';
import { ChannelParticipant } from './ChannelParticipant.js';
import { ClientInfo } from './ClientInfo.js';
import { Model } from './Model.js';
import { MyUser } from './MyUser.js';
import { SidMultiStepAction } from './SidMultiStepAction.js';
import { User } from './User.js';
import { UserInbox } from './UserInbox.js';

const modelFactory = <T extends Model = Model>(
  props: Partial<T>,
  modelType: ModelType,
): T => {
  if (modelType === ModelType.Channel) {
    return new Channel(props as unknown as Partial<Channel>) as unknown as T;
  }
  if (modelType === ModelType.ChannelInvitation) {
    return new ChannelInvitation(props as unknown as Partial<ChannelInvitation>) as unknown as T;
  }
  if (modelType === ModelType.ChannelMessage) {
    return new ChannelMessage(props as unknown as Partial<ChannelMessage>) as unknown as T;
  }
  if (modelType === ModelType.ChannelParticipant) {
    return new ChannelParticipant(props as unknown as Partial<ChannelParticipant>) as unknown as T;
  }
  if (modelType === ModelType.ClientInfo) {
    return new ClientInfo(props as unknown as Partial<ClientInfo>) as unknown as T;
  }
  if (modelType === ModelType.MyUser) {
    return new MyUser(props as unknown as Partial<MyUser>) as unknown as T;
  }
  if (modelType === ModelType.SidMultiStepAction) {
    return new SidMultiStepAction(props as unknown as Partial<SidMultiStepAction>) as unknown as T;
  }
  if (modelType === ModelType.User) {
    return new User(props as unknown as Partial<User>) as unknown as T;
  }
  // if (modelType === ModelType.UserBlock) {
  //   return new UserBlock(props as unknown as Partial<UserBlock>) as unknown as T;
  // }
  if (modelType === ModelType.UserInbox) {
    return new UserInbox(props as unknown as Partial<UserInbox>) as unknown as T;
  }

  throw new Error(`Model type ${modelType} is not supported.`);
};

export default modelFactory;
