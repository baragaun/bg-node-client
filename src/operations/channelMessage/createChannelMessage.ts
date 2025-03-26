import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import { Channel } from '../../models/Channel.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { MutationResult } from '../../types/MutationResult.js';

const createChannelMessage = async (
  attributes: Partial<ChannelMessage>,
): Promise<MutationResult<ChannelMessage>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
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
