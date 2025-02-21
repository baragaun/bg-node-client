import { faker } from '@faker-js/faker';

import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';
import store from './store.js';

const createChannel = async (
  attributes: Partial<Channel>,
): Promise<MutateChannelResult<Channel>> => {
  const channel = new Channel(attributes);

  if (!channel.id) {
    channel.id = faker.string.uuid();
  }

  if (!channel.name) {
    channel.name = faker.lorem.word();
  }

  if (!channel.description) {
    channel.description = faker.lorem.paragraph();
  }

  if (!channel.topic) {
    channel.topic = faker.lorem.sentence();
  }

  if (!channel.createdAt) {
    channel.createdAt = new Date();
  }

  if (!channel.updatedAt) {
    channel.updatedAt = new Date();
  }

  store.addObject(channel);

  return {
    operation: MutationType.create,
    object: channel
  };
}

export default createChannel
