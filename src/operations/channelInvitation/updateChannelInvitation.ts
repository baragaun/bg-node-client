import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { MutationResult } from '../../types/MutationResult.js';

const updateChannelInvitation = async (
  changes: Partial<ChannelInvitation>,
): Promise<MutationResult<ChannelInvitation>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

  try {
    return db.update<ChannelInvitation>(changes, ModelType.ChannelInvitation);
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default updateChannelInvitation;
