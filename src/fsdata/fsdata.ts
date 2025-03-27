import createChannel from './operations/channel/createChannel.js';
import findChannels from './operations/channel/findChannels.js';
import findMyChannels from './operations/channel/findMyChannels.js';
import acceptChannelInvitation from './operations/channelInvitation/acceptChannelInvitation.js';
import createChannelInvitation from './operations/channelInvitation/createChannelInvitation.js';
import declineChannelInvitation from './operations/channelInvitation/declineChannelInvitation.js';
import findChannelInvitationsForUser
  from './operations/channelInvitation/findChannelInvitationsForUser.js';
import createChannelMessage from './operations/channelMessage/createChannelMessage.js';
import findChannelMessages from './operations/channelMessage/findChannelMessages.js';
import findById from './operations/findById.js';
import createMultiStepAction from './operations/multiStepAction/createMultiStepAction.js';
import findMyActiveMultiStepActions from './operations/multiStepAction/findMyActiveMultiStepActions.js';
import getMultiStepActionProgress from './operations/multiStepAction/getMultiStepActionProgress.js';
import sendMultiStepActionNotification
  from './operations/multiStepAction/sendMultiStepActionNotification.js';
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
import startMySessionV2 from './operations/myUser/startMySessionV2.js';
import updateMyUser from './operations/myUser/updateMyUser.js';
import pollForUpdatedObject from './operations/pollForUpdatedObject.js';
import findUserById from './operations/user/findUserById.js';

const fsdata = {
  findById,
  pollForUpdatedObject,

  channel: {
    createChannel,
    findChannels,
    findMyChannels,
  },
  channelInvitation: {
    acceptChannelInvitation,
    createChannelInvitation,
    declineChannelInvitation,
    findChannelInvitationsForUser,
  },
  channelMessage: {
    createChannelMessage,
    findChannelMessages,
  },
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
    startMySessionV2,
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
