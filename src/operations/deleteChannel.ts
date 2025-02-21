import { MutationType } from '../types/enums.js';
import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';

const deleteChannel = async (
  id: string,
): Promise<MutateChannelResult<Channel>> => {
  // todo: implement
  return {
    operation: MutationType.delete,
  };
}

export default deleteChannel
