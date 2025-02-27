import { describe, expect, test } from 'vitest'

import { BgNodeClientConfig } from '../../types/BgNodeClientConfig.js';
import { Channel } from '../../types/models/Channel.js';
import { DbType, ModelType } from '../../types/enums.js';
import { init } from '../../index.js';
// import { User } from '../../types/models/User.js';
import findById from '../../operations/findById.js';
import factories from '../factories/factories.js';

const config: BgNodeClientConfig = {
  dbType: DbType.rxdb,
  inBrowser: false,
  debugMode: true,
}

describe('createChannel', () => {
  test('should create a channel with the given properties', async () => {
    const client = await init(config);
    // const users = await factories.user.create({}, {}, 2) as User[]
    // const userIds = users.map(u => u.id)
    // const channelProps = await factories.channel.build({ userIds })
    const channelProps = await factories.channel.build({})

    const { object: channel } = await client.createChannel(channelProps);
    const {
      object: reloadedChannel,
      error,
    } = await findById<Channel>(channel.id, ModelType.Channel)

    expect(error).toBeUndefined()
    expect(reloadedChannel.id).toBe(channel.id);
    expect(reloadedChannel.name).toBe(channel.name);
  });
});
