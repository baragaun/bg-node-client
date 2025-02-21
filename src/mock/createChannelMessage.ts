import { faker } from '@faker-js/faker';

import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';
import data from './data.js';

const createChannelMessage = async (
  attributes: Partial<ChannelMessage>,
): Promise<MutateChannelResult<ChannelMessage>> => {
  const channel = data.findChannel(attributes.channelId as string)

  if (!channel) {
    return {
      operation: MutationType.create,
      error: 'channel-not-found',
    }
  }

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

  if (!channel.updatedAt) {
    channel.updatedAt = new Date();
  }

  if (!Array.isArray(channel.messages)) {
    channel.messages = [message];
  } else {
    channel.messages.push(message);
  }

  return {
    operation: MutationType.create,
    object: message,
  };
}

export default createChannelMessage
