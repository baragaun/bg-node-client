import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { MutationResult } from '../../types/MutationResult.js';
import { ModelType, MutationType } from '../../types/enums.js';
import db from '../../db/db.js';

const updateChannelMessage = async (changes: Partial<ChannelMessage>): Promise<MutationResult<ChannelMessage>> => {
  try {
    return db.update<ChannelMessage>(changes, ModelType.ChannelMessage);
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default updateChannelMessage;
