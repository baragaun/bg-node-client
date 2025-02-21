import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';
import data from './data.js';

const updateChannel = async (
  changes: Partial<Channel>,
): Promise<MutateChannelResult<Channel>> => {
  try {
    const updatedChannel = data.updateChannel(changes);

    if (!updatedChannel) {
      return {
        operation: MutationType.update,
        error: 'not-found',
      }
    }

    return {
      operation: MutationType.update,
      object: updatedChannel,
    };
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    }
  }
}

export default updateChannel
