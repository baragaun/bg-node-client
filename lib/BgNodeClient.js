import { DbType } from './types/enums.js';
import createChannelFunc from './operations/createChannel.js';
import createChannelMessageFunc from './operations/createChannelMessage.js';
import db from './db/db.js';
import deleteChannelFunc from './operations/deleteChannel.js';
import deleteChannelInvitationFunc from './operations/deleteChannelInvitation.js';
import deleteChannelMessageFunc from './operations/deleteChannelMessage.js';
import factories from './test/factories/factories.js';
import findByIdFunc from './operations/findById.js';
import findChannelInvitationsFunc from './operations/findChannelInvitations.js';
import findChannelMessagesFunc from './operations/findChannelMessages.js';
import findChannelParticipantsFunc from './operations/findChannelParticipants.js';
import findChannelsFunc from './operations/findChannels.js';
import findOneFunc from './operations/findOne.js';
import mockFactories from './mockFactories/mockFactories.js';
import updateChannelFunc from './operations/updateChannel.js';
import updateChannelInvitationFunc from './operations/updateChannelInvitation.js';
import updateChannelMessageFunc from './operations/updateChannelMessage.js';
import updateChannelParticipantFunc from './operations/updateChannelParticipant.js';
export class BgNodeClient {
    config;
    listeners = [];
    constructor(config) {
        this.config = config;
        if (!this.config.dbType) {
            this.config.dbType = DbType.mem;
        }
    }
    async init() {
        await db.init(this.config);
    }
    factories = factories;
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added.
     */
    addListener(listener) {
        if (this.listeners.some((l) => l.id === listener.id)) {
            throw new Error(`Listener with id ${listener.id} already exists.`);
        }
        this.listeners.push(listener);
    }
    /**
     * Unsubscribes from channel events.
     * @param listener - The listener to be removed.
     */
    removeListener(id) {
        const index = this.listeners.findIndex((l) => l.id === id);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
    /**
     * Creates a new channel.
     * @returns A promise that resolves to the result object.
     */
    async createChannel(channel) {
        const result = await createChannelFunc(channel);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelCreated) {
                    listener.onChannelCreated(result);
                }
            });
        }
        return result;
    }
    /**
     * Creates a new channel message.
     * @returns A promise that resolves to the result object.
     */
    async createChannelMessage(channelMessage) {
        const result = await createChannelMessageFunc(channelMessage);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelMessageCreated) {
                    listener.onChannelMessageCreated(result);
                }
            });
        }
        return result;
    }
    createMockChannel(attributes, userCount, messageCount, users, messages) {
        return mockFactories.channel(attributes, userCount, messageCount, users, messages);
    }
    createMockUser(attributes) {
        return mockFactories.user(attributes);
    }
    /**
     * Deletes an existing channel.
     * @returns A promise that resolves to the result object.
     */
    async deleteChannel(id) {
        const result = await deleteChannelFunc(id);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelDeleted) {
                    listener.onChannelDeleted(result);
                }
            });
        }
        return result;
    }
    /**
     * Deletes an existing channel invitation.
     * @returns A promise that resolves to the result object.
     */
    async deleteChannelInvitation(id) {
        const result = await deleteChannelInvitationFunc(id);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelInvitationDeleted) {
                    listener.onChannelInvitationDeleted(result);
                }
            });
        }
        return result;
    }
    /**
     * Deletes an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    async deleteChannelMessage(id) {
        const result = await deleteChannelMessageFunc(id);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelMessageDeleted) {
                    listener.onChannelMessageDeleted(result);
                }
            });
        }
        return result;
    }
    /**
     * Finds a channel by its ID.
     * @param id - The ID of the channel.
     * @param modelType - The model type.
     * @returns A promise that resolves to the channel object, or null if not found.
     */
    async findById(id, modelType) {
        const result = await findByIdFunc(id, modelType);
        if (result.error) {
            return null;
        }
        return result.object;
    }
    /**
     * Load a paginated list of channels.
     * @param filter - the filter.
     * @param match
     * @param skip - number of channels to skip for pagination.
     * @param limit - number of channels to return for pagination.
     * @returns A promise that resolves to a list of channels.
     */
    async findChannels(filter, match, skip, limit) {
        return findChannelsFunc(filter, match, skip, limit);
    }
    /**
     * Load a paginated list of invitations for a channel.
     * @param filter - the filter.
     * @param match
     * @param skip - number of invitations to skip for pagination.
     * @param limit - number of invitations to return for pagination.
     * @returns A promise that resolves to a list of channel invitations.
     */
    async findChannelInvitations(filter, match, skip, limit) {
        const result = await findChannelInvitationsFunc(filter, match, skip, limit);
        return result;
    }
    /**
     * Load a paginated list of messages for a channel.
     * @param filter - the filter.
     * @param match
     * @param skip - number of messages to skip for pagination.
     * @param limit - number of messages to return for pagination.
     * @returns A promise that resolves to a list of channel messages.
     */
    async findChannelMessages(filter, match, skip, limit) {
        const result = await findChannelMessagesFunc(filter, match, skip, limit);
        return result;
    }
    /**
     * Load a paginated list of participants for a channel.
     * @param filter - the filter.
     * @param match
     * @param skip - number of participants to skip for pagination.
     * @param limit - number of participants to return for pagination.
     * @returns A promise that resolves to a list of channel participants.
     */
    async findChannelParticipants(filter, match, skip, limit) {
        const result = await findChannelParticipantsFunc(filter, match, skip, limit);
        return result;
    }
    /**
     * Finds a channel by its ID.
     * @param match
     * @param modelType - The model type.
     * @returns A promise that resolves to the channel object, or null if not found.
     */
    async findOne(match, modelType) {
        const result = await findOneFunc(match, modelType);
        if (result.error) {
            return null;
        }
        return result.object;
    }
    /**
     * Updates an existing channel.
     * @returns A promise that resolves to the result object.
     */
    async updateChannel(channel) {
        const result = await updateChannelFunc(channel);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelUpdated) {
                    listener.onChannelUpdated(result);
                }
            });
        }
        return result;
    }
    /**
     * Updates an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    async updateChannelInvitation(channelInvitation) {
        const result = await updateChannelInvitationFunc(channelInvitation);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelInvitationUpdated) {
                    listener.onChannelInvitationUpdated(result);
                }
            });
        }
        return result;
    }
    /**
     * Updates an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    async updateChannelMessage(channelMessage) {
        const result = await updateChannelMessageFunc(channelMessage);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelMessageUpdated) {
                    listener.onChannelMessageUpdated(result);
                }
            });
        }
        return result;
    }
    /**
     * Updates an existing channel participant.
     * @returns A promise that resolves to the result object.
     */
    async updateChannelParticipant(channelParticipant) {
        const result = await updateChannelParticipantFunc(channelParticipant);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelParticipantUpdated) {
                    listener.onChannelParticipantUpdated(result);
                }
            });
        }
        return result;
    }
}
//# sourceMappingURL=BgNodeClient.js.map