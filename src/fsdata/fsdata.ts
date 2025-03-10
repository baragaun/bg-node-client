import findById from './operations/findById.js';
import createMultiStepAction from './operations/multiStepAction/createMultiStepAction.js';
import findMyActiveMultiStepActions from './operations/multiStepAction/findMyActiveMultiStepActions.js';
import getMultiStepActionProgress from './operations/multiStepAction/getMultiStepActionProgress.js';
import verifyMultiStepActionToken from './operations/multiStepAction/verifyMultiStepActionToken.js';
import findMyUser from './operations/myUser/findMyUser.js';
import signInUser from './operations/myUser/signInUser.js';
import signMeOut from './operations/myUser/signMeOut.js';
import signUpUser from './operations/myUser/signUpUser.js';
import updateMyUser from './operations/myUser/updateMyUser.js';
import pollForUpdatedObject from './operations/pollForUpdatedObject.js';
import findUserById from './operations/user/findUserById.js';

const fsdata = {
  findById,
  pollForUpdatedObject,

  myUser: {
    findMyUser,
    signInUser,
    signMeOut,
    signUpUser,
    updateMyUser,
  },

  multiStepAction: {
    createMultiStepAction,
    findMyActiveMultiStepActions,
    getMultiStepActionProgress,
    verifyMultiStepActionToken,
  },

  user: {
    findUserById,
  },
};

export default fsdata;
