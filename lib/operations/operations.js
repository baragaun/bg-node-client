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
import findMyActiveMultiStepActions from './multiStepAction/findMyActiveMultiStepActions.js';
import getMultiStepActionProgress from './multiStepAction/getMultiStepActionProgress.js';
import verifyMultiStepActionToken from './multiStepAction/verifyMultiStepActionToken.js';
import findMyUser from './myUser/findMyUser.js';
import getSignedOutUserId from './myUser/getSignedOutUserId.js';
import resetPassword from './myUser/resetPassword.js';
import signInUser from './myUser/signInUser.js';
import signInWithToken from './myUser/signInWithToken.js';
import signMeOut from './myUser/signMeOut.js';
import signUpUser from './myUser/signUpUser.js';
import updateMyUser from './myUser/updateMyUser.js';
import verifyEmail from './myUser/verifyEmail.js';
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
        getSignedOutUserId,
        findMyUser,
        resetPassword,
        signInUser,
        signMeOut,
        signUpUser,
        signInWithToken,
        verifyEmail,
        updateMyUser,
    },
    multiStepAction: {
        findMyActiveMultiStepActions,
        getMultiStepActionProgress,
        verifyMultiStepActionToken,
    },
};
export default operations;
//# sourceMappingURL=operations.js.map