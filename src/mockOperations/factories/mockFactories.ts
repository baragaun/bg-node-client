import channel from './createMockChannel.js';
import channelMessage from './createMockChannelMessage.js';
import user from './createMockUser.js';
import { MockFactories } from '../../types/MockFactories.js';

const mockFactories: MockFactories = {
  channel,
  channelMessage,
  user,
};

export default mockFactories;
