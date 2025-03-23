import { describe, expect, test } from 'vitest';

import { CachePolicy, ModelType } from '../../../enums.js';
import { Channel } from '../../../models/Channel.js';
import findById from '../../../operations/findById.js';
import factories from '../../factories/factories.js';
import clientStore from '../../helpers/clientStore.js';

describe('operations.channel.updateChannel', () => {
  test('should update channel properties', async () => {
    const client = await clientStore.getTestClient();
    const channelProps = await factories.channel.build({});

    const { object: channel } =
      await client.operations.channel.createChannel(channelProps);

    await client.operations.channel.updateChannel({
      id: channel.id,
      name: 'newname',
    });

    const { object: updatedChannel, error: updateError } =
      await findById<Channel>(channel.id, ModelType.Channel, {
        cachePolicy: CachePolicy.cache,
      });

    expect(updateError).toBeUndefined();
    expect(updatedChannel.id).toBe(channel.id);
    expect(updatedChannel.name).toBe('newname');
    expect(updatedChannel.topic).toBe(channelProps.topic);
    expect(updatedChannel.description).toBe(channelProps.description);
    expect(updatedChannel.channelType).toBe(channelProps.channelType);
  });
});
