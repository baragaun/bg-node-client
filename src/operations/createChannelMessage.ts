import { Channel } from '../types/models/Channel.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { ModelType, MutationType } from '../types/enums.js';
import { MutateResult } from '../types/MutateResult.js';
import db from '../db/db.js';

const createChannelMessage = async (
  attributes: Partial<ChannelMessage>,
): Promise<MutateResult<ChannelMessage>> => {
  try {
    const channel = db.findById<Channel>(
      attributes.channelId as string,
      ModelType.Channel
    );

    if (!channel) {
      return {
        operation: MutationType.create,
        error: 'channel-not-found',
      };
    }

    const input = new ChannelMessage(attributes);
    const message = await db.insert(input);

    return {
      operation: MutationType.create,
      object: message,
    };
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
}

export default createChannelMessage
