import { BaseModel } from '../types/models/BaseModel.js';
import { ModelType } from '../enums.js';
import { Channel } from '../types/models/Channel.js';
import { ChannelInvitation } from '../types/models/ChannelInvitation.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ChannelParticipant } from '../types/models/ChannelParticipant.js';
import { User } from '../types/models/User.js';
import { MyUser } from '../types/models/MyUser.js';
import { UserInbox } from '../types/models/UserInbox.js';

const modelFactory = <T extends BaseModel = BaseModel>(
  attributes: Partial<T>,
  modelType: ModelType,
): T => {
  if (modelType === ModelType.Channel) {
    return new Channel(attributes as unknown as Partial<Channel>) as unknown as T;
  }
  if (modelType === ModelType.ChannelInvitation) {
    return new ChannelInvitation(attributes as unknown as Partial<ChannelInvitation>) as unknown as T;
  }
  if (modelType === ModelType.ChannelMessage) {
    return new ChannelMessage(attributes as unknown as Partial<ChannelMessage>) as unknown as T;
  }
  if (modelType === ModelType.ChannelParticipant) {
    return new ChannelParticipant(attributes as unknown as Partial<ChannelParticipant>) as unknown as T;
  }
  if (modelType === ModelType.MyUser) {
    return new MyUser(attributes as unknown as Partial<MyUser>) as unknown as T;
  }
  if (modelType === ModelType.User) {
    return new User(attributes as unknown as Partial<User>) as unknown as T;
  }
  // if (modelType === ModelType.UserBlock) {
  //   return new UserBlock(attributes as unknown as Partial<UserBlock>) as unknown as T;
  // }
  if (modelType === ModelType.UserInbox) {
    return new UserInbox(attributes as unknown as Partial<UserInbox>) as unknown as T;
  }

  throw new Error(`Model type ${modelType} is not supported.`);
}

export default modelFactory;

