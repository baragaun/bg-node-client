import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
import { MutationResult } from '../../types/MutationResult.js';

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
