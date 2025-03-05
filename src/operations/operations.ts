import { Operations } from '../types/Operations.js';
import createChannel from './channel/createChannel.js';
import createChannelInvitation from './channelInvitation/createChannelInvitation.js';
import createChannelMessage from './channelMessage/createChannelMessage.js';
import createChannelParticipant from './channelParticipant/createChannelParticipant.js';
import deleteChannel from './channel/deleteChannel.js';
import deleteChannelInvitation from './channelInvitation/deleteChannelInvitation.js';
import deleteChannelMessage from './channelMessage/deleteChannelMessage.js';
import deleteChannelParticipant from './channelParticipant/deleteChannelParticipant.js';
import findChannelInvitations from './channelInvitation/findChannelInvitations.js';
import findChannelMessages from './channelMessage/findChannelMessages.js';
import findChannelParticipants from './channelParticipant/findChannelParticipants.js';
import findChannels from './channel/findChannels.js';
import updateChannel from './channel/updateChannel.js';
import updateChannelInvitation from './channelInvitation/updateChannelInvitation.js';
import updateChannelMessage from './channelMessage/updateChannelMessage.js';
import updateChannelParticipant from './channelParticipant/updateChannelParticipant.js';
import signInUser from './myUser/signInUser.js';
import signUpUser from './myUser/signUpUser.js';
import findById from './findById.js';
import findOne from './findOne.js';

const operations: Operations = {
  findById,
  findOne,

  channel: {
    createChannel,
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
    signInUser,
    signUpUser,
  }
}

export default operations;
