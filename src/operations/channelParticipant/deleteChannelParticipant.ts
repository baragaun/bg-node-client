import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
import { MutationResult } from '../../types/MutationResult.js';

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
};

export default deleteChannelParticipant;
