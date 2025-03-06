import createMockChannel from '../mockFactories/channel.js';
import { Operations } from '../types/Operations.js';
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
import findMyUser from './myUser/findMyUser.js';
import getSignedOutUserId from './myUser/getSignedOutUserId.js';
import signInUser from './myUser/signInUser.js';
import signMeOut from './myUser/signMeOut.js';
import signUpUser from './myUser/signUpUser.js';
import startVerifyEmail from './myUser/startVerifyEmail.js';
import verifyMultiStepActionToken from './myUser/verifyMultiStepActionToken.js';

const operations: Operations = {
  findById,
  findOne,
  insertOne,

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
    signInUser,
    signMeOut,
    signUpUser,
    startVerifyEmail: startVerifyEmail,
    verifyMultiStepActionToken: verifyMultiStepActionToken,
  },
};

export default operations;
