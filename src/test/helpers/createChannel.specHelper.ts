import { expect } from 'vitest';

import { BgNodeClient } from '../../BgNodeClient.js';
import { CachePolicy, ModelType } from '../../enums.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import findById from '../../operations/findById.js';
import factories from '../factories/factories.js';

export const createChannelSpecHelper = async (
  props: Partial<Channel> | undefined,
  client: BgNodeClient,
): Promise<Channel | null> => {
    logger.debug('BgServiceApiCheck.createChannel: calling API/createChannel',
      { props });

    props = factories.channel.build(props);

    const response = await client.operations.channel.createChannel(props);
    const channel = response.object;

    expect(response.error).toBeUndefined();
    expect(channel).toBeDefined();
    expect(channel.name).toBe(props.name);
    expect(channel.topic).toBe(props.topic);
    expect(channel.description).toBe(props.description);
    expect(channel.channelType).toBe(props.channelType);

    // Verifying local copy:
    const { object: reloadedChannel, error } = await findById<Channel>(
      channel.id,
      ModelType.Channel,
      {
        cachePolicy: CachePolicy.cache,
      },
    );

    expect(error).toBeUndefined();
    expect(reloadedChannel.id).toBe(channel.id);
    expect(reloadedChannel.name).toBe(props.name);
    expect(reloadedChannel.topic).toBe(props.topic);
    expect(reloadedChannel.description).toBe(props.description);
    expect(reloadedChannel.channelType).toBe(props.channelType);

    return channel;
};

