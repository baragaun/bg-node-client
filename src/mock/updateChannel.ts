import { Channel } from '../types/models/Channel.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';
import data from './data.js';

const updateChannel = async (
  changes: Partial<Channel>,
): Promise<MutateChannelResult<Channel>> => {
  const existingChannel = data.findChannel(changes.id as string);

  if (!existingChannel) {
    return {
      operation: MutationType.update,
      error: 'not-found',
    }
  }

  Object.assign(existingChannel, changes);

  return {
    operation: MutationType.update,
    object: existingChannel,
  };
}

export default updateChannel
