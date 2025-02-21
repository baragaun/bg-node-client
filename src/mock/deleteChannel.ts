import { ModelType, MutationType } from '../types/enums.js';
import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import store from './store.js';

const deleteChannel = async (
  id: string,
): Promise<MutateChannelResult<Channel>> => {
  try {
    store.deleteObject(id, ModelType.Channel);

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

export default deleteChannel
