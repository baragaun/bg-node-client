import { faker } from '@faker-js/faker';

import { Channel } from '../types/models/Channel.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ModelType, MutationType } from '../types/enums.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import store from './store.js';

const createChannelMessage = async (
  attributes: Partial<ChannelMessage>,
): Promise<MutateChannelResult<ChannelMessage>> => {
  const channel = store.findObjectById<Channel>(attributes.channelId as string, ModelType.Channel)

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

  try {
    store.addObject(message);

    return {
      operation: MutationType.create,
      object: message,
    };
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    }
  }
}

export default createChannelMessage
