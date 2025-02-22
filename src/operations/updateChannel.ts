import { Channel } from '../types/models/Channel.js';
import { MutateResult } from '../types/MutateResult.js';
import { ModelType, MutationType } from '../types/enums.js';
import db from '../db/db.js';

const updateChannel = async (
  changes: Partial<Channel>,
): Promise<MutateResult<Channel>> => {
  try {
    const updatedChannel = await db.update<Channel>(
      changes,
      ModelType.Channel,
    );

    if (!updatedChannel) {
      return {
        operation: MutationType.update,
        error: 'not-found',
      };
    }

    return {
      operation: MutationType.update,
      object: updatedChannel,
    };
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
}

export default updateChannel
