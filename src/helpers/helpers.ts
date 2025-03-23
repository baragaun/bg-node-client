import { ModelType } from '../enums.js';
import { Channel } from '../models/Channel.js';
import { ChannelInvitation } from '../models/ChannelInvitation.js';
import { ChannelMessage } from '../models/ChannelMessage.js';
import { ChannelParticipant } from '../models/ChannelParticipant.js';
import { Model } from '../models/Model.js';
import { MyUser } from '../models/MyUser.js';
import { User } from '../models/User.js';

export const getModelTypeFromObject = <T extends Model = Model>(
  obj: T,
): ModelType | null => {
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
