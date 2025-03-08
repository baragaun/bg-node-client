import findById from './operations/findById.js';
import findMyUser from './operations/myUser/findMyUser.js';
import signInUser from './operations/myUser/signInUser.js';
import signMeOut from './operations/myUser/signMeOut.js';
import signUpUser from './operations/myUser/signUpUser.js';
import startVerifyEmail from './operations/myUser/startVerifyEmail.js';
import updateMyUser from './operations/myUser/updateMyUser.js';
import verifyMultiStepActionToken from './operations/myUser/verifyMultiStepActionToken.js';
import pollForUpdatedObject from './operations/pollForUpdatedObject.js';
import findUserById from './operations/user/findUserById.js';

const fsdata = {
  pollForUpdatedObject,
  findById,

  myUser: {
    signInUser,
    signMeOut,
    signUpUser,
    startVerifyEmail,
    verifyMultiStepActionToken,
    findMyUser,
    updateMyUser,
  },
  user: {
    findUserById,
  },
};

export default fsdata;
