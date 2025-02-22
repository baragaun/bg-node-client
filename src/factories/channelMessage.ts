import { faker } from '@faker-js/faker';

import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { User } from '../types/models/User.js';

const createMessage = (
  attributes: Partial<ChannelMessage>,
  sender?: User,
): ChannelMessage => {
  const message = new ChannelMessage(attributes);

  if (!message.id) {
    message.id = faker.string.uuid();
  }

  if (!message.messageText) {
    message.messageText = faker.lorem.paragraph();
  }

  if (!message.createdAt) {
    message.createdAt = new Date();
  }

  if (!message.updatedAt) {
    message.updatedAt = new Date();
  }

  if (!message.createdAt) {
    message.createdAt = new Date();
  }

  if (!message.createdBy && sender) {
    message.createdBy = sender.id;
  }

  if (!message.updatedAt) {
    message.updatedAt = new Date();
  }

  if (!message.metadata && sender) {
    message.metadata = {
      senderUserHandle: sender.userHandle,
      senderFirstName: sender.firstName,
      senderLastName: sender.lastName,
      senderAvatarUrl: sender.avatarUrl,
    }
  }

  return message;
}

export default createMessage
