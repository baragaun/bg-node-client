import { ChannelInvitation } from '../types/models/ChannelInvitation.js';
import { MutationResult } from '../types/MutationResult.js';
import { ModelType, MutationType } from '../types/enums.js';
import db from '../db/db.js';

const updateChannelInvitation = async (
  changes: Partial<ChannelInvitation>,
): Promise<MutationResult<ChannelInvitation>> => {
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
