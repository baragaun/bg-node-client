import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { ChannelMessage } from '../../types/models/ChannelMessage.js';
import { MutationResult } from '../../types/MutationResult.js';

const deleteChannelMessage = async (
  id: string,
): Promise<MutationResult<ChannelMessage>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

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
