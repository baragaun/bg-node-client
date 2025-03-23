import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { Channel } from '../../models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';

const updateChannel = async (
  changes: Partial<Channel>,
): Promise<MutationResult<Channel>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

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
