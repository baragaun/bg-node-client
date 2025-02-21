import { ChannelMessage } from '../types/models/ChannelMessage.js'
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';
import data from './data.js';

const updateChannelMessage = async (
  changes: Partial<ChannelMessage>,
): Promise<MutateChannelResult<ChannelMessage>> => {
  const existingMessage = data.findMessage(changes.id as string);

  if (!existingMessage) {
    return {
      operation: MutationType.update,
      error: 'not-found',
    }
  }

  try {
    const updatedMessage = data.updateChannelMessage(changes);

    if (!updatedMessage) {
      return {
        operation: MutationType.update,
        error: 'not-found',
      }
    }

    return {
      operation: MutationType.update,
      object: updatedMessage,
    };
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    }
  }
}

export default updateChannelMessage
