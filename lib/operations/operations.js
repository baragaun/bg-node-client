import createMockChannel from '../mockFactories/channel.js';
import createChannel from './channel/createChannel.js';
import deleteChannel from './channel/deleteChannel.js';
import findChannels from './channel/findChannels.js';
import updateChannel from './channel/updateChannel.js';
import createChannelInvitation from './channelInvitation/createChannelInvitation.js';
import deleteChannelInvitation from './channelInvitation/deleteChannelInvitation.js';
import findChannelInvitations from './channelInvitation/findChannelInvitations.js';
import updateChannelInvitation from './channelInvitation/updateChannelInvitation.js';
import createChannelMessage from './channelMessage/createChannelMessage.js';
import deleteChannelMessage from './channelMessage/deleteChannelMessage.js';
import findChannelMessages from './channelMessage/findChannelMessages.js';
import updateChannelMessage from './channelMessage/updateChannelMessage.js';
import createChannelParticipant from './channelParticipant/createChannelParticipant.js';
import deleteChannelParticipant from './channelParticipant/deleteChannelParticipant.js';
import findChannelParticipants from './channelParticipant/findChannelParticipants.js';
import updateChannelParticipant from './channelParticipant/updateChannelParticipant.js';
import findById from './findById.js';
import findOne from './findOne.js';
import insertOne from './insertOne.js';
import abortMultiStepAction from './multiStepAction/abortMultiStepAction.js';
import addMultiStepActionListener from './multiStepAction/addMultiStepActionListener.js';
import findMyActiveMultiStepActions from './multiStepAction/findMyActiveMultiStepActions.js';
import getMultiStepActionProgress from './multiStepAction/getMultiStepActionProgress.js';
import removeMultiStepActionListener from './multiStepAction/removeMultiStepActionListener.js';
import sendMultiStepActionNotification from './multiStepAction/sendMultiStepActionNotification.js';
import verifyMultiStepActionToken from './multiStepAction/verifyMultiStepActionToken.js';
import deleteMyUser from './myUser/deleteMyUser.js';
import endMySession from './myUser/endMySession.js';
import findAvailableUserHandle from './myUser/findAvailableUserHandle.js';
import findMyUser from './myUser/findMyUser.js';
import getSignedOutUserId from './myUser/getSignedOutUserId.js';
import isSessionActive from './myUser/isSessionActive.js';
import isSignedIn from './myUser/isSignedIn.js';
import isUserIdentAvailable from './myUser/isUserIdentAvailable.js';
import resetMyPassword from './myUser/resetMyPassword.js';
import signInUser from './myUser/signInUser.js';
import signInWithToken from './myUser/signInWithToken.js';
import signMeOut from './myUser/signMeOut.js';
import signUpUser from './myUser/signUpUser.js';
import startMySession from './myUser/startMySession.js';
import startMySessionV2 from './myUser/startMySessionV2.js';
import updateMyPassword from './myUser/updateMyPassword.js';
import updateMyUser from './myUser/updateMyUser.js';
import verifyMyEmail from './myUser/verifyMyEmail.js';
import updateLocalObject from './updateLocalObject.js';
const operations = {
    findById,
    findOne,
    insertOne,
    updateLocalObject,
    channel: {
        createChannel,
        createMockChannel,
        deleteChannel,
        findChannels,
        updateChannel,
    },
    channelInvitation: {
        createChannelInvitation,
        deleteChannelInvitation,
        findChannelInvitations,
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
        deleteMyUser,
        endMySession,
        findAvailableUserHandle,
        findMyUser,
        getSignedOutUserId,
        isSessionActive,
        isSignedIn,
        isUserIdentAvailable,
        resetMyPassword,
        signInUser,
        signInWithToken,
        signMeOut,
        signUpUser,
        startMySession,
        startMySessionV2,
        updateMyPassword,
        updateMyUser,
        verifyMyEmail,
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
//# sourceMappingURL=operations.js.map