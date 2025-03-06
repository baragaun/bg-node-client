import db from '../../db/db.js';
import { ModelType, MutationType } from '../../types/enums.js';
import { ChannelInvitation } from '../../types/models/ChannelInvitation.js';
import { MutationResult } from '../../types/MutationResult.js';

const deleteChannelInvitation = async (id: string): Promise<MutationResult<ChannelInvitation>> => {
  try {
    await db.delete(id, ModelType.ChannelInvitation);

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

export default deleteChannelInvitation;
