import { NatsClient } from './NatsClient.js';
// import { subscribeToMyChannelEvents } from './subscribeToMyChannelEvents.js';
import { subscribeToUserEvents } from './subscribeToUserEvents.js';
import libData from '../helpers/libData.js';
import logger from '../helpers/logger.js';
import { NatsOptions } from '../types/NatsOptions.js';

const init = async (options: Partial<NatsOptions>): Promise<void> => {
  if (!Array.isArray(options.servers) || options.servers.length < 1) {
    logger.warn('NATS init called without valid options.');
    return;
  }

  const client = new NatsClient(options);
  await client.connect();
  libData.setNatsClient(client);
  //todo we not need of channelEvent here?
  // subscribeToMyChannelEvents();
  await subscribeToUserEvents();

};

export default init;
