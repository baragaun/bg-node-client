import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import { Channel } from '../../models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';

const createChannel = async (
  attributes: Partial<Channel>,
): Promise<MutationResult<Channel>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

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
