import { ModelType, MutationType } from '../types/enums.js';
import { Channel } from '../types/models/Channel.js';
import { MutateResult } from '../types/MutateResult.js';
import db from '../db/db.js';

const deleteChannel = async (
  id: string,
): Promise<MutateResult<Channel>> => {
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
}

export default deleteChannel
