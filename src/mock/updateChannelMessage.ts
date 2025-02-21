import { ChannelMessage } from '../types/models/ChannelMessage.js'
import { MutateChannelResult } from '../types/MutateChannelResult.js';
import { MutationType } from '../types/enums.js';
import data from './data.js';

const updateChannelMessage = async (
  changes: Partial<ChannelMessage>,
): Promise<MutateChannelResult<ChannelMessage>> => {
  const existingMessage = data.findMessage(changes.id as string);

  if (!existingMessage) {
    return {
      operation: MutationType.update,
      error: 'not-found',
    }
  }

  Object.assign(existingMessage, changes);

  return {
    operation: MutationType.update,
    object: existingMessage,
  };
}

export default updateChannelMessage
