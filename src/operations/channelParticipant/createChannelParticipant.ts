import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { MutationResult } from '../../types/MutationResult.js';

const createChannelParticipant = async (
  attributes: Partial<ChannelParticipant>,
): Promise<MutationResult<ChannelParticipant>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

  try {
    const channel = new ChannelParticipant(attributes);

    return db.insert<ChannelParticipant>(channel);
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannelParticipant;
