import createChannel from './operations/channel/createChannel.js';
import findChannels from './operations/channel/findChannels.js';
import findMyChannels from './operations/channel/findMyChannels.js';
import updateChannel from './operations/channel/updateChannel.js';
import acceptChannelInvitation from './operations/channelInvitation/acceptChannelInvitation.js';
import createChannelInvitation from './operations/channelInvitation/createChannelInvitation.js';
import declineChannelInvitation from './operations/channelInvitation/declineChannelInvitation.js';
import findChannelInvitations from './operations/channelInvitation/findChannelInvitations.js';
import findChannelInvitationsForUser from './operations/channelInvitation/findChannelInvitationsForUser.js';
import updateChannelInvitation from './operations/channelInvitation/updateChannelInvitation.js';
import createChannelMessage from './operations/channelMessage/createChannelMessage.js';
import findChannelMessages from './operations/channelMessage/findChannelMessages.js';
import updateChannelMessage from './operations/channelMessage/updateChannelMessage.js';
import create from './operations/create.js';
import deleteFnc from './operations/delete.js';
import findById from './operations/findById.js';
import createMultiStepAction from './operations/multiStepAction/createMultiStepAction.js';
import findMyActiveMultiStepActions from './operations/multiStepAction/findMyActiveMultiStepActions.js';
import getMultiStepActionProgress from './operations/multiStepAction/getMultiStepActionProgress.js';
import sendMultiStepActionNotification from './operations/multiStepAction/sendMultiStepActionNotification.js';
import verifyMultiStepActionToken from './operations/multiStepAction/verifyMultiStepActionToken.js';
import blockUserForMe from './operations/myUser/blockUserForMe.js';
import deleteMyUser from './operations/myUser/deleteMyUser.js';
import endMySession from './operations/myUser/endMySession.js';
import findAvailableUserHandle from './operations/myUser/findAvailableUserHandle.js';
import findMyInbox from './operations/myUser/findMyInbox.js';
import findMyUser from './operations/myUser/findMyUser.js';
import isUserIdentAvailable from './operations/myUser/isUserIdentAvailable.js';
import reportUser from './operations/myUser/reportUser.js';
import signInUser from './operations/myUser/signInUser.js';
import signMeOut from './operations/myUser/signMeOut.js';
import signUpUser from './operations/myUser/signUpUser.js';
import startMySession from './operations/myUser/startMySession.js';
import startMySessionV2 from './operations/myUser/startMySessionV2.js';
import unblockUserForMe from './operations/myUser/unblockUserForMe.js';
import updateMyUser from './operations/myUser/updateMyUser.js';
import verifyMyPassword from './operations/myUser/verifyMyPassword.js';
import pollForUpdatedObject from './operations/pollForUpdatedObject.js';
import update from './operations/update.js';
import findUserById from './operations/user/findUserById.js';

const fsdata = {
  create,
  delete: deleteFnc,
  findById,
  pollForUpdatedObject,
  update,

  channel: {
    createChannel,
    findChannels,
    findMyChannels,
    updateChannel,
  },
  channelInvitation: {
    acceptChannelInvitation,
    createChannelInvitation,
    declineChannelInvitation,
    findChannelInvitations,
    findChannelInvitationsForUser,
    updateChannelInvitation,
  },
  channelMessage: {
    createChannelMessage,
    findChannelMessages,
    updateChannelMessage,
  },
  myUser: {
    blockUserForMe,
    deleteMyUser,
    endMySession,
    findAvailableUserHandle,
    findMyInbox,
    findMyUser,
    isUserIdentAvailable,
    reportUser,
    signInUser,
    signMeOut,
    signUpUser,
    startMySession,
    startMySessionV2,
    unblockUserForMe,
    updateMyUser,
    verifyMyPassword,
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
