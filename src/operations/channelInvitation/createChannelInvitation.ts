import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
import { MutationResult } from '../../types/MutationResult.js';

const createChannelInvitation = async (
  attributes: Partial<ChannelInvitation>,
): Promise<MutationResult<ChannelInvitation>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  try {
    const channel = new ChannelInvitation(attributes);

    return db.insert<ChannelInvitation>(channel);
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannelInvitation;
