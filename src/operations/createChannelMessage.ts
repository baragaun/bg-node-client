import { ChannelMessage } from '../types/models/ChannelMessage.js';
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';
import { User } from '../types/models/User.js';

const createChannelMessage = async (
  channelMessage: Partial<ChannelMessage>,
  sender?: User,
): Promise<MutateChannelResult<ChannelMessage>> => {
  // todo: implement

  return {
    operation: MutationType.create,
    object: channelMessage as ChannelMessage
  };
}

export default createChannelMessage
