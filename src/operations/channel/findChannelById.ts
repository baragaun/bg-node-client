import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { Channel } from '../../models/Channel.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { FindChannelOptions, FindChannelResult } from '../../types/findChannelTypes.js';
import { QueryOptions } from '../../types/QueryOptions.js';

const findChannelById = async (
  id: string,
  options: FindChannelOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<FindChannelResult> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findChannelById: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findChannelById: unauthorized');
      return { error: 'unauthorized' };
    }

    const result: FindChannelResult = {
      channel: null,
      messages: [],
      participants: [],
    };
    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local cache
    let loadFromLocal = queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork;

    if (loadFromLocal) {
      const findChannelResult = await db.findById<Channel>(id, ModelType.Channel);

      if ((findChannelResult.object && !findChannelResult.error) || !allowNetwork) {
        result.channel = findChannelResult.object;
      } else {
        loadFromLocal = false;
      }
    }

    if (loadFromLocal && options.includeParticipants) {
      const findParticipantsResult = await db.find<ChannelParticipant>(
        {
          selector: { channelId: id },
          skip: 0,
          limit: options.participantLimit || 1000,
        },
        ModelType.ChannelParticipant,
      );

      if ((findParticipantsResult.objects && !findParticipantsResult.error) || !allowNetwork) {
        result.participants = findParticipantsResult.objects;
      } else {
        loadFromLocal = false;
      }
    }

    if (loadFromLocal && options.includeMessages) {
      const findMessagesResult = await db.find<ChannelMessage>(
        {
          selector: { channelId: id },
          skip: 0,
          limit: options.messageLimit || 1000,
        },
        ModelType.ChannelMessage,
      );

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

    const response = await fsdata.channel.findChannelById(id);

    if (response.error) {
      logger.error('findChannelById: fsdata.findChannelById failed', { error: response.error });
      result.error = response.error;

      return result;
    }

    if (response.object) {
      // todo: What if the object does not exist anymore. How do we delete it from the local store?
      // Update local cache:
      await db.replace<Channel>(response.object, ModelType.Channel);
    }

    return response;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findChannelById;
