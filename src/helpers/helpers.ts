import { ModelType } from '../types/enums.js';
import { BaseModel } from '../types/models/BaseModel.js';
import { Channel } from '../types/models/Channel.js';
import { ChannelInvitation } from '../types/models/ChannelInvitation.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ChannelParticipant } from '../types/models/ChannelParticipant.js';
import { MyUser } from '../types/models/MyUser.js';
import { User } from '../types/models/User.js';

export const getModelTypeFromObject = <T extends BaseModel = BaseModel>(obj: T): ModelType | null => {
  if (obj instanceof Channel) {
    return ModelType.Channel;
  }

  if (obj instanceof ChannelInvitation) {
    return ModelType.ChannelInvitation;
  }

  if (obj instanceof ChannelMessage) {
    return ModelType.ChannelMessage;
  }

  if (obj instanceof ChannelParticipant) {
    return ModelType.ChannelParticipant;
  }

  if (obj instanceof MyUser) {
    return ModelType.MyUser;
  }

  if (obj instanceof User) {
    return ModelType.User;
  }

  return null;
};
