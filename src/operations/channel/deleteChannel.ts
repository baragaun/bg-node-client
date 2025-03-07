import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import { Channel } from '../../types/models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';

const deleteChannel = async (id: string): Promise<MutationResult<Channel>> => {
  try {
    await db.delete(id, ModelType.Channel);

    return {
      operation: MutationType.delete,
    };
  } catch (error) {
    return {
      operation: MutationType.delete,
      error: (error as Error).message,
    };
  }
};

export default deleteChannel;
