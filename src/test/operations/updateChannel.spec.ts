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

describe('updateChannel', () => {
  test('should update channel properties', async () => {
    const client = await init(null, config);
    const channelProps = await factories.channel.build({})

    const { object: channel } = await client.createChannel(channelProps);

    await client.updateChannel({ id: channel.id, name: 'newname' });

    const {
      object: updatedChannel,
      error: updateError,
    } = await findById<Channel>(channel.id, ModelType.Channel)

    expect(updateError).toBeUndefined()
    expect(updatedChannel.id).toBe(channel.id);
    expect(updatedChannel.name).toBe('newname');
    expect(updatedChannel.topic).toBe(channelProps.topic);
    expect(updatedChannel.description).toBe(channelProps.description);
    expect(updatedChannel.channelType).toBe(channelProps.channelType);
  });
});
