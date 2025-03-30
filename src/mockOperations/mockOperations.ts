import { MockOperations } from '../types/MockOperations.js';
import channel from './factories/createMockChannel.js';
import channelMessage from './factories/createMockChannelMessage.js';
import user from './factories/createMockUser.js';

const mockOperations: MockOperations = {
  factories: {
    channel,
    channelMessage,
    user,
  },
};

export default mockOperations;
