import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import { Channel } from '../../types/models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';

const createChannel = async (
  attributes: Partial<Channel>,
): Promise<MutationResult<Channel>> => {
  try {
    const channel = new Channel(attributes);

    return db.insert<Channel>(channel);
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannel;
