import { MutationType } from '../types/enums.js';
import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import data from './data.js';

const deleteChannel = async (
  id: string,
): Promise<MutateChannelResult<Channel>> => {
  try {
    data.deleteChannel(id);

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
