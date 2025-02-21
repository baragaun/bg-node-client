import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { ModelType, MutationType } from '../types/enums.js';
import store from './store.js';

const updateChannelMessage = async (
  changes: Partial<ChannelMessage>,
): Promise<MutateChannelResult<ChannelMessage>> => {
  try {
    const updatedChannelMessage = store.updateObject<ChannelMessage>(
      changes,
      ModelType.ChannelMessage,
    );

    if (!updatedChannelMessage) {
      return {
        operation: MutationType.update,
        error: 'not-found',
      }
    }

    return {
      operation: MutationType.update,
      object: updatedChannelMessage,
    };
  } catch (error) {
    return {
      operation: MutationType.update,
      error: (error as Error).message,
    }
  }
}

export default updateChannelMessage
