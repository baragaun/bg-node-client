import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import { Channel } from '../../models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';

const updateChannel = async (
  changes: Partial<Channel>,
): Promise<MutationResult<Channel>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
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
