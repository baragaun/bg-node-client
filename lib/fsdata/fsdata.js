import findById from './operations/findById.js';
import createMultiStepAction from './operations/multiStepAction/createMultiStepAction.js';
import findMyActiveMultiStepActions from './operations/multiStepAction/findMyActiveMultiStepActions.js';
import getMultiStepActionProgress from './operations/multiStepAction/getMultiStepActionProgress.js';
import sendMultiStepActionNotification from './operations/multiStepAction/sendMultiStepActionNotification.js';
import verifyMultiStepActionToken from './operations/multiStepAction/verifyMultiStepActionToken.js';
import deleteMyUser from './operations/myUser/deleteMyUser.js';
import endMySession from './operations/myUser/endMySession.js';
import findAvailableUserHandle from './operations/myUser/findAvailableUserHandle.js';
import findMyUser from './operations/myUser/findMyUser.js';
import isUserIdentAvailable from './operations/myUser/isUserIdentAvailable.js';
import signInUser from './operations/myUser/signInUser.js';
import signMeOut from './operations/myUser/signMeOut.js';
import signUpUser from './operations/myUser/signUpUser.js';
import startMySession from './operations/myUser/startMySession.js';
import updateMyUser from './operations/myUser/updateMyUser.js';
import pollForUpdatedObject from './operations/pollForUpdatedObject.js';
import findUserById from './operations/user/findUserById.js';
const fsdata = {
    findById,
    pollForUpdatedObject,
    myUser: {
        deleteMyUser,
        endMySession,
        findAvailableUserHandle,
        findMyUser,
        isUserIdentAvailable,
        signInUser,
        signMeOut,
        signUpUser,
        startMySession,
        updateMyUser,
    },
    multiStepAction: {
        createMultiStepAction,
        findMyActiveMultiStepActions,
        getMultiStepActionProgress,
        sendMultiStepActionNotification,
        verifyMultiStepActionToken,
    },
    user: {
        findUserById,
    },
};
export default fsdata;
//# sourceMappingURL=fsdata.js.map