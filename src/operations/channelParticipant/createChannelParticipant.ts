import db from '../../db/db.js';
import { MutationType } from '../../enums.js';
import { ChannelParticipant } from '../../types/models/ChannelParticipant.js';
import { MutationResult } from '../../types/MutationResult.js';

const createChannelParticipant = async (
  attributes: Partial<ChannelParticipant>,
): Promise<MutationResult<ChannelParticipant>> => {
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
