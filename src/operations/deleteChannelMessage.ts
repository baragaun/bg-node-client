import { ModelType, MutationType } from '../types/enums.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutationResult } from '../types/MutationResult.js';
import db from '../db/db.js';

const deleteChannelMessage = async (id: string): Promise<MutationResult<ChannelMessage>> => {
  try {
    await db.delete(id, ModelType.ChannelMessage);

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

export default deleteChannelMessage;
