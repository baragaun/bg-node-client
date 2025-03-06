import chance from '../helpers/chance.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { User } from '../types/models/User.js';

const createMessage = (attributes: Partial<ChannelMessage>, sender?: User): ChannelMessage => {
  const message = new ChannelMessage(attributes);

  if (!message.id) {
    message.id = crypto.randomUUID().replaceAll('-', '');
  }

  if (!message.messageText) {
    message.messageText = chance.paragraph();
  }

  if (!message.createdAt) {
    message.createdAt = new Date().toISOString();
  }

  if (!message.updatedAt) {
    message.updatedAt = new Date().toISOString();
  }

  if (!message.createdAt) {
    message.createdAt = new Date().toISOString();
  }

  if (!message.createdBy && sender) {
    message.createdBy = sender.id;
  }

  if (!message.updatedAt) {
    message.updatedAt = new Date().toISOString();
  }

  if (!message.metadata && sender) {
    message.metadata = {
      senderUserHandle: sender.userHandle,
      senderFirstName: sender.firstName,
      senderLastName: sender.lastName,
      senderAvatarUrl: sender.avatarUrl,
    };
  }

  return message;
};

export default createMessage;
