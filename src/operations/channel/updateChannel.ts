import db from '../../db/db.js';
import { ModelType, MutationType } from '../../types/enums.js';
import { Channel } from '../../types/models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';

const updateChannel = async (changes: Partial<Channel>): Promise<MutationResult<Channel>> => {
  try {
    return db.update<Channel>(changes, ModelType.Channel);
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default updateChannel;
