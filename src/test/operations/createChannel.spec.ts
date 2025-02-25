import FactoryGirl from 'factory-girl';

import { Channel } from '../../types/models/Channel.js';
import { ModelType } from '../../types/enums.js';
import { User } from '../../types/models/User.js';
import createChannel from '../../operations/createChannel.js';
import findById from '../../operations/findById.js';

const factory = FactoryGirl.factory

describe('createChannel', () => {
  beforeAll(() => {

  })

  it('should create a channel with the given properties', async () => {
    const users = await factory.buildMany<User>('User', 2)
    const userIds = users.map(u => u.id)
    const channelProps = await factory.build<Channel>('Channel', {
      userIds,
    })

    const { object: channel } = await createChannel(channelProps);
    const { object: reloadedChannel } = await findById<Channel>(channel.id, ModelType.Channel)

    expect(reloadedChannel.id).toBe(channel.id);
    expect(reloadedChannel.name).toBe(channel.name);
  });
});
