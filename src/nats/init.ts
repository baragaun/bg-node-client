import { NatsClient } from './NatsClient.js';
import { CachePolicy } from '../enums.js';
import subscribeToChannelMessages from './subscribeToChannelMessages.js';
import subscribeToMyChannels from './subscribeToMyChannels.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import findMyChannelsV2 from '../operations/channel/findMyChannels.js';
import { NatsOptions } from '../types/NatsOptions.js';

const init = async (options: Partial<NatsOptions>): Promise<void> => {
  if (!Array.isArray(options.servers) || options.servers.length < 1) {
    logger.warn('NATS init called without valid options.');
    return;
  }

  const client = new NatsClient(options);
  await client.connect();
  libData.setNatsClient(client);

  const myChannelsResult = await findMyChannelsV2(
    undefined,
    undefined,
    undefined,
    undefined,
    // We only want to fetch the channels from the local DB:
    { cachePolicy: CachePolicy.network },
  );

  if (
    !myChannelsResult.error &&
    Array.isArray(myChannelsResult.objects) &&
    myChannelsResult.objects.length > 0
  ) {
    logger.debug('NATS init: found channels.', {
      channels: myChannelsResult.objects,
    });

    for (const channel of myChannelsResult.objects) {
      subscribeToChannelMessages(channel.id);
    }
  }

  subscribeToMyChannels(); //
};

export default init;
