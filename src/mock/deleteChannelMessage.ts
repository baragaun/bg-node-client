import { MutationType } from '../types/enums.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import data from './data.js';

const deleteChannelMessage = async (
  id: string,
): Promise<MutateChannelResult<ChannelMessage>> => {
  try {
    data.deleteChannelMessage(id);

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

export default deleteChannelMessage
