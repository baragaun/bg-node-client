import { MockOperations } from '../types/MockOperations.js';
import channel from './factories/createMockChannel.js';
import channelMessage from './factories/createMockChannelMessage.js';
import user from './factories/createMockUser.js';
import blockUserForMeMock from './myUser/blockUserForMeMock.js';
import findAvailableUserHandleMock from './myUser/findAvailableUserHandleMock.js';
import isUserIdentAvailableMock from './myUser/isUserIdentAvailableMock.js';
import signMeOutMock from './myUser/signMeOutMock.js';
import signUpUserMock from './myUser/signUpUserMock.js';
import unblockUserForMeMock from './myUser/unblockUserForMeMock.js';
import verifyMyPasswordMock from './myUser/verifyMyPasswordMock.js';

const mockOperations: MockOperations = {
  factories: {
    channel,
    channelMessage,
    user,
  },

  myUser: {
    blockUserForMe: blockUserForMeMock,
    findAvailableUserHandle: findAvailableUserHandleMock,
    isUserIdentAvailable: isUserIdentAvailableMock,
    signMeOut: signMeOutMock,
    signUpUser: signUpUserMock,
    unblockUserForMe: unblockUserForMeMock,
    verifyMyPassword: verifyMyPasswordMock,
  },
};

export default mockOperations;
