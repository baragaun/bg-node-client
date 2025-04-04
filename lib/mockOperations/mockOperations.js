import channel from './factories/createMockChannel.js';
import channelMessage from './factories/createMockChannelMessage.js';
import user from './factories/createMockUser.js';
import findAvailableUserHandleMock from './myUser/findAvailableUserHandleMock.js';
import isUserIdentAvailableMock from './myUser/isUserIdentAvailableMock.js';
import signMeOutMock from './myUser/signMeOutMock.js';
import signUpUserMock from './myUser/signUpUserMock.js';
import verifyMyPasswordMock from './myUser/verifyMyPasswordMock.js';
const mockOperations = {
    factories: {
        channel,
        channelMessage,
        user,
    },
    myUser: {
        findAvailableUserHandle: findAvailableUserHandleMock,
        isUserIdentAvailable: isUserIdentAvailableMock,
        signUpUser: signUpUserMock,
        signMeOut: signMeOutMock,
        verifyMyPassword: verifyMyPasswordMock,
    },
};
export default mockOperations;
//# sourceMappingURL=mockOperations.js.map