import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
const findChannelById = async (id, options, queryOptions = defaultQueryOptions) => {
    try {
        if (!libData.isInitialized()) {
            logger.error('findChannelById: unavailable');
            return { error: 'unavailable' };
        }
        if (!libData.clientInfoStore().isSignedIn) {
            logger.error('findChannelById: unauthorized');
            return { error: 'unauthorized' };
        }
        const result = {
            channel: null,
            messages: [],
            participants: [],
        };
        const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;
        //------------------------------------------------------------------------------------------------
        // Local DB
        let loadFromLocal = queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork;
        if (loadFromLocal) {
            const findChannelResult = await db.findById(id, ModelType.Channel);
            if ((findChannelResult.object && !findChannelResult.error) || !allowNetwork) {
                result.channel = findChannelResult.object;
            }
            else {
                loadFromLocal = false;
            }
        }
        if (loadFromLocal && options.includeParticipants) {
            const findParticipantsResult = await db.find({
                selector: { channelId: id },
                skip: 0,
                limit: options.participantLimit || 1000,
            }, ModelType.ChannelParticipant);
            if ((findParticipantsResult.objects && !findParticipantsResult.error) || !allowNetwork) {
                result.participants = findParticipantsResult.objects;
            }
            else {
                loadFromLocal = false;
            }
        }
        if (loadFromLocal && options.includeMessages) {
            const findMessagesResult = await db.find({
                selector: { channelId: id },
                skip: 0,
                limit: options.messageLimit || 1000,
            }, ModelType.ChannelMessage);
            if ((findMessagesResult.objects && !findMessagesResult.error) || !allowNetwork) {
                result.messages = findMessagesResult.objects;
                // We found everything (channel, participants, and messages) in the local cache.
                return result;
            }
        }
        //------------------------------------------------------------------------------------------------
        // Network
        if (!allowNetwork) {
            return { error: 'offline' };
        }
        const channelResponse = await fsdata.channel.findChannelById(id);
        if (channelResponse.error) {
            logger.error('findChannelById: fsdata.findChannelById failed', { error: channelResponse.error });
            result.error = channelResponse.error;
            return result;
        }
        if (channelResponse.object) {
            await db.replace(channelResponse.object, ModelType.Channel);
            result.channel = channelResponse.object;
            const participantsResponse = await fsdata.channelParticipant.findChannelParticipants(undefined, // no filter
            { channelId: id }, { sort: [{ field: 'userHandle' }], limit: options.participantLimit || 20 });
            if (participantsResponse.error) {
                logger.error('findParticipantsById: fsdata.findParticipantsById failed', { error: participantsResponse.error });
                result.error = participantsResponse.error;
                return result;
            }
            if (participantsResponse.objects && participantsResponse.objects.length > 0) {
                for (const participant of participantsResponse.objects) {
                    await db.replace(participant, ModelType.ChannelParticipant);
                }
                result.participants = participantsResponse.objects;
                const messagesResponse = await fsdata.channelMessage.findChannelMessages(undefined, // no filter
                { channelId: id }, { sort: [{ field: 'createdAt' }], limit: options.messageLimit || 20 });
                if (messagesResponse.error) {
                    logger.error('findMessagesById: fsdata.findMessagesById failed', { error: messagesResponse.error });
                    result.error = messagesResponse.error;
                    return result;
                }
                if (messagesResponse.objects && messagesResponse.objects.length > 0) {
                    for (const message of messagesResponse.objects) {
                        await db.replace(message, ModelType.ChannelMessage);
                    }
                    result.messages = messagesResponse.objects;
                }
            }
        }
        return result;
    }
    catch (error) {
        return { error: error.message };
    }
};
export default findChannelById;
//# sourceMappingURL=findChannelById.js.map