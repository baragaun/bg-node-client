import db from '../../db/db.js';
import { ModelType, MutationType } from '../../types/enums.js';
import { Channel } from '../../types/models/Channel.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { MutationResult } from '../../types/MutationResult.js';

const createChannelMessage = async (attributes: Partial<ChannelMessage>): Promise<MutationResult<ChannelMessage>> => {
  try {
    const channel = db.findById<Channel>(attributes.channelId as string, ModelType.Channel);

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
