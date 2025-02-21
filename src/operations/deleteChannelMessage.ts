import { MutationType } from '../types/enums.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';

const deleteChannelMessage = async (
  id: string,
): Promise<MutateChannelResult<ChannelMessage>> => {
  // todo: implement
  return {
    operation: MutationType.delete,
  };
}

export default deleteChannelMessage
