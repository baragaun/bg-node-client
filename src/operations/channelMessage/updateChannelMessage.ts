import { BgListenerTopic, ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { BgChannelDataListener } from '../../types/BgChannelListener.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannelMessage = async (
  changes: Partial<ChannelMessage>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<ChannelMessage>> => {
  const result = await update<ChannelMessage>(changes, ModelType.ChannelMessage, queryOptions);
  for (const listener of libData.listeners()) {
    if (
      listener.topic === BgListenerTopic.channel &&
      typeof (listener as BgChannelDataListener).onChannelMessageUpdated === 'function'
    ) {
      logger.debug('updateChannelMessage: notifying listener', { id: listener.id });
      const listenerResponse = (listener as BgChannelDataListener).onChannelMessageUpdated(result);
      if (listenerResponse && typeof listenerResponse.then === 'function') {
        listenerResponse.catch((error) => {
          logger.error('updateChannelMessage: listener onChannelMessageUpdated failed.', { error });
        });
      }
    }
  }

  return result;
};

export default updateChannelMessage;
