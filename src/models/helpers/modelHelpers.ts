import { Channel } from '../../types/models/Channel.js';
import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
import { Model } from '../../types/Model.js';
import { ModelType } from '../../types/enums.js';
import { User } from '../../types/models/User.js';
import { UserInbox } from '../../types/models/UserInbox.js';
import formatChannelForDb from './formatChannelForDb.js';
import formatChannelInvitationForDb from './formatChannelInvitationForDb.js';
import formatChannelMessageForDb from './formatChannelMessageForDb.js';
import formatChannelParticipantForDb from './formatChannelParticipantForDb.js';
import formatUserForDb from './formatUserForDb.js';
import formatUserInboxForDb from './formatUserInboxForDb.js';

const formatObjectForDb = <T extends Model>(obj: Partial<T>, modelType: ModelType): Partial<T> => {
  switch (modelType) {
    case ModelType.Channel:
      return formatChannelForDb(obj as Partial<Channel>) as Partial<T>;
    case ModelType.ChannelInvitation:
      return formatChannelInvitationForDb(obj as Partial<ChannelInvitation>) as Partial<T>;
    case ModelType.ChannelMessage:
      return formatChannelMessageForDb(obj as Partial<ChannelMessage>) as Partial<T>;
    case ModelType.ChannelParticipant:
      return formatChannelParticipantForDb(obj as Partial<ChannelParticipant>) as Partial<T>;
    case ModelType.User:
      return formatUserForDb(obj as Partial<User>) as Partial<T>;
    case ModelType.UserInbox:
      return formatUserInboxForDb(obj as Partial<UserInbox>) as Partial<T>;
    default:
      throw new Error(`Unknown model type: ${modelType}`);
  }
};

const modelHelpers = {
  formatObjectForDb,
};

export default modelHelpers;
