import { Operations } from '../types/Operations.js';
import createChannel from './channel/createChannel.js';
import deleteChannel from './channel/deleteChannel.js';
import findChannels from './channel/findChannels.js';
import findMyArchivedChannels from './channel/findMyArchivedChannels.js';
import findMyChannels from './channel/findMyChannels.js';
import isChannelArchivedForMe from './channel/isChannelArchivedForMe.js';
import updateChannel from './channel/updateChannel.js';
import acceptChannelInvitation from './channelInvitation/acceptChannelInvitation.js';
import createChannelInvitation from './channelInvitation/createChannelInvitation.js';
import declineChannelInvitation from './channelInvitation/declineChannelInvitation.js';
import deleteChannelInvitation from './channelInvitation/deleteChannelInvitation.js';
import findChannelInvitations from './channelInvitation/findChannelInvitations.js';
import findChannelInvitationsForUser from './channelInvitation/findChannelInvitationsForUser.js';
import updateChannelInvitation from './channelInvitation/updateChannelInvitation.js';
import createChannelMessage from './channelMessage/createChannelMessage.js';
import deleteChannelMessage from './channelMessage/deleteChannelMessage.js';
import findChannelMessages from './channelMessage/findChannelMessages.js';
import updateChannelMessage from './channelMessage/updateChannelMessage.js';
import createChannelParticipant from './channelParticipant/createChannelParticipant.js';
import deleteChannelParticipant from './channelParticipant/deleteChannelParticipant.js';
import findChannelParticipants from './channelParticipant/findChannelParticipants.js';
import updateChannelParticipant from './channelParticipant/updateChannelParticipant.js';
import count from './count.js';
import deleteFnc from './delete.js';
import find from './find.js';
import findById from './findById.js';
import findByMatch from './findByMatch.js';
import findOne from './findOne.js';
import findOneByMatch from './findOneByMatch.js';
import insertOne from './insertOne.js';
import abortMultiStepAction from './multiStepAction/abortMultiStepAction.js';
import addMultiStepActionListener from './multiStepAction/addMultiStepActionListener.js';
import findMyActiveMultiStepActions from './multiStepAction/findMyActiveMultiStepActions.js';
import getMultiStepActionProgress from './multiStepAction/getMultiStepActionProgress.js';
import removeMultiStepActionListener from './multiStepAction/removeMultiStepActionListener.js';
import sendMultiStepActionNotification from './multiStepAction/sendMultiStepActionNotification.js';
import verifyMultiStepActionToken from './multiStepAction/verifyMultiStepActionToken.js';
import blockUserForMe from './myUser/blockUserForMe.js';
import deleteMyUser from './myUser/deleteMyUser.js';
import endMySession from './myUser/endMySession.js';
import findAvailableUserHandle from './myUser/findAvailableUserHandle.js';
import findMyInbox from './myUser/findMyInbox.js';
import findMyUser from './myUser/findMyUser.js';
import getSignedOutUserId from './myUser/getSignedOutUserId.js';
import isCachedUserFresh from './myUser/isCachedUserFresh.js';
import isSessionActive from './myUser/isSessionActive.js';
import isUserIdentAvailable from './myUser/isUserIdentAvailable.js';
import reportUserForMe from './myUser/reportUserForMe.js';
import resetMyPassword from './myUser/resetMyPassword.js';
import signInUser from './myUser/signInUser.js';
import signInWithToken from './myUser/signInWithToken.js';
import signMeOut from './myUser/signMeOut.js';
import signUpUser from './myUser/signUpUser.js';
import startMySession from './myUser/startMySession.js';
import startMySessionV2 from './myUser/startMySessionV2.js';
import unblockUserForMe from './myUser/unblockUserForMe.js';
import updateMyPassword from './myUser/updateMyPassword.js';
import updateMyUser from './myUser/updateMyUser.js';
import verifyMyEmail from './myUser/verifyMyEmail.js';
import verifyMyPassword from './myUser/verifyMyPassword.js';
import update from './update.js';

const operations: Operations = {
  delete: deleteFnc,
  count,
  findById,
  find,
  findByMatch,
  findOne,
  findOneByMatch,
  insertOne,
  update,

  channel: {
    createChannel,
    deleteChannel,
    findChannels,
    findMyChannels,
    findMyArchivedChannels,
    isChannelArchivedForMe,
    updateChannel,
  },

  channelInvitation: {
    acceptChannelInvitation,
    createChannelInvitation,
    declineChannelInvitation,
    deleteChannelInvitation,
    findChannelInvitations,
    findChannelInvitationsForUser,
    updateChannelInvitation,
  },

  channelMessage: {
    createChannelMessage,
    deleteChannelMessage,
    findChannelMessages,
    updateChannelMessage,
  },

  channelParticipant: {
    createChannelParticipant,
    deleteChannelParticipant,
    findChannelParticipants,
    updateChannelParticipant,
  },

  myUser: {
    blockUserForMe,
    deleteMyUser,
    endMySession,
    findAvailableUserHandle,
    findMyInbox,
    findMyUser,
    getSignedOutUserId,
    isCachedUserFresh,
    isSessionActive,
    isUserIdentAvailable,
    reportUserForMe,
    resetMyPassword,
    signInUser,
    signInWithToken,
    signMeOut,
    signUpUser,
    startMySession,
    startMySessionV2,
    unblockUserForMe,
    updateMyPassword,
    updateMyUser,
    verifyMyEmail,
    verifyMyPassword,
  },

  multiStepAction: {
    abortMultiStepAction,
    addMultiStepActionListener,
    findMyActiveMultiStepActions,
    getMultiStepActionProgress,
    removeMultiStepActionListener,
    sendMultiStepActionNotification,
    verifyMultiStepActionToken,
  },
};

export default operations;
