import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateResult } from '../types/MutateResult.js';
import { ModelType, MutationType } from '../types/enums.js';
import db from '../db/db.js';

const updateChannelMessage = async (
  changes: Partial<ChannelMessage>,
): Promise<MutateResult<ChannelMessage>> => {
  try {
    const updatedChannelMessage = await db.update<ChannelMessage>(
      changes,
      ModelType.ChannelMessage,
    );

    if (!updatedChannelMessage) {
      return {
        operation: MutationType.update,
        error: 'not-found',
      };
    }

    return {
      operation: MutationType.update,
      object: updatedChannelMessage,
    };
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    };
  }
}

export default updateChannelMessage
