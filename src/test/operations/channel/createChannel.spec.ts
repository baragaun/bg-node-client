import { describe, expect, test } from 'vitest';

import findById from '../../../operations/findById.js';
import { BgNodeClient } from '../../../types/BgNodeClient.js';
import { CachePolicy, ModelType } from '../../../types/enums.js';
import { Channel } from '../../../types/models/Channel.js';
import factories from '../../factories/factories.js';
import { testConfig } from '../../testConfig.js';

describe('createChannel', () => {
  test('should create a channel with the given properties', async () => {
    const client = await new BgNodeClient().init(testConfig);
    const channelProps = await factories.channel.build({});

    const { object: channel } = await client.operations.channel.createChannel(channelProps);
    const { object: reloadedChannel, error } = await findById<Channel>(channel.id, ModelType.Channel, {
      cachePolicy: CachePolicy.cache,
    });

    expect(error).toBeUndefined();
    expect(reloadedChannel.id).toBe(channel.id);
    expect(reloadedChannel.name).toBe(channel.name);
    expect(reloadedChannel.topic).toBe(channel.topic);
    expect(reloadedChannel.description).toBe(channel.description);
    expect(reloadedChannel.channelType).toBe(channel.channelType);
  });
});
