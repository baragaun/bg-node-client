import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
import { MutationResult } from '../../types/MutationResult.js';
import { ModelType, MutationType } from '../../types/enums.js';
import db from '../../db/db.js';

const updateChannelParticipant = async (
  changes: Partial<ChannelParticipant>,
): Promise<MutationResult<ChannelParticipant>> => {
  try {
    return db.update<ChannelParticipant>(changes, ModelType.ChannelParticipant);
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
};

export default updateChannelParticipant;
