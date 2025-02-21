import createChannel from "./createChannel.js";
import createChannelMessage from "./createChannelMessage.js";
import deleteChannel from './deleteChannel.js';
import deleteChannelMessage from './deleteChannelMessage.js';
import factories from './factories/index.js';
import findChannelMessages from './findChannelMessages.js';
import findChannels from './findChannels.js';
import updateChannel from './updateChannel.js';
import updateChannelMessage from './updateChannelMessage.js';

const mockOperations = {
  factories,
  createChannel,
  createChannelMessage,
  deleteChannel,
  deleteChannelMessage,
  findChannelMessages,
  findChannels,
  updateChannel,
  updateChannelMessage,
}

export default mockOperations
