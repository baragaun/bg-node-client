import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { QueryResult } from '../../types/QueryResult.js';

const createChannelMessage = async (
  attributes: Partial<ChannelMessage>,
): Promise<QueryResult<ChannelMessage>> => {
  if (!libData.isInitialized()) {
    logger.error('createChannelMessage: unavailable');
    return { error: 'unavailable' };
  }

  if (!libData.clientInfoStore().isSignedIn) {
    logger.error('createChannelMessage: unauthorized');
    return { error: 'unauthorized' };
  }

  try {
    const channel = db.findById<Channel>(
      attributes.channelId as string,
      ModelType.Channel,
    );

    if (!channel) {
      return {
        operation: MutationType.create,
        error: 'channel-not-found',
      };
    }

    const input = new ChannelMessage(attributes);
    return db.insert(input);
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannelMessage;
