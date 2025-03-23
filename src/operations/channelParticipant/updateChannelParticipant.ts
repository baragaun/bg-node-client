import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import libData from '../../helpers/libData.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { MutationResult } from '../../types/MutationResult.js';

const updateChannelParticipant = async (
  changes: Partial<ChannelParticipant>,
): Promise<MutationResult<ChannelParticipant>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

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
