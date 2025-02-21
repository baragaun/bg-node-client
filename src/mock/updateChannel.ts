import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { ModelType, MutationType } from '../types/enums.js';
import store from './store.js';

const updateChannel = async (
  changes: Partial<Channel>,
): Promise<MutateChannelResult<Channel>> => {
  try {
    const updatedChannel = store.updateObject<Channel>(
      changes,
      ModelType.Channel,
    );

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
