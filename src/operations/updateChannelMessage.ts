import { ChannelMessage } from '../types/models/ChannelMessage.js'
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';

const updateChannelMessage = async (
  changes: Partial<ChannelMessage>,
): Promise<MutateChannelResult<ChannelMessage>> => {
  // todo: implement
  return {
    operation: MutationType.update,
    object: changes as ChannelMessage
  };
}

export default updateChannelMessage
