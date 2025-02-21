import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';

const updateChannel = async (
  changes: Partial<Channel>,
): Promise<MutateChannelResult<Channel>> => {
  // todo: implement
  return {
    operation: MutationType.update,
    object: changes as Channel
  };
}

export default updateChannel
