import { ModelType, MutationType } from '../types/enums.js';
import { ChannelParticipant } from '../types/models/ChannelParticipant.js';
import { MutationResult } from '../types/MutationResult.js';
import db from '../db/db.js';

const deleteChannelParticipant = async (
  id: string,
): Promise<MutationResult<ChannelParticipant>> => {
  try {
    await db.delete(id, ModelType.ChannelParticipant);

    return {
      operation: MutationType.delete,
    };
  } catch (error) {
    return {
      operation: MutationType.delete,
      error: (error as Error).message,
    };
  }
}

export default deleteChannelParticipant
