import db from '../../db/db.js';
import { CachePolicy, ModelType, SortDirection } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
import { Channel } from '../../models/Channel.js';
import { ChannelListFilter } from '../../models/ChannelListFilter.js';
import { ChannelMessage } from '../../models/ChannelMessage.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from '../../models/ChannelParticipantListFilter.js';
import { ChannelListItem } from '../../types/ChannelListItem.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findMyChannels = async (
  participantLimit: number | undefined,
  addLatestMessage: boolean | undefined,
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<ChannelListItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findMyChannels: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findMyChannels: unauthorized');
      return { error: 'unauthorized' };
    }

    const myUserId = libData.clientInfoStore().myUserId;
    if (!myUserId) {
      logger.error('findMyChannels: myUserId not set');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local cache
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      const localQueryForChannels = buildQuery<Channel, ChannelListFilter>(
        ModelType.Channel,
        undefined,
        undefined,
        undefined,
        options,
      );

      const localResultForChannels = await db.find<Channel>(
        localQueryForChannels,
        ModelType.Channel,
      );

      if (!localResultForChannels.error && Array.isArray(localResultForChannels.objects)) {
        const channels = localResultForChannels.objects;
        const channelListItems: ChannelListItem[] = [];

        if (channels.length > 0) {
          for (const channel of channels) {
            const channelListItem = new ChannelListItem(channel);

            const localQueryForParticipants = buildQuery<ChannelParticipant, ChannelParticipantListFilter>(
              ModelType.ChannelParticipant,
              undefined,
              { channelId: channel.id },
              undefined,
              { limit: 4, sort: [{ field: 'id' }] },
            );

            const localResultForParticipants = await db.find<ChannelParticipant>(
              localQueryForParticipants,
              ModelType.ChannelParticipant,
            );

            channelListItem.participants = !localResultForParticipants.error && localResultForParticipants.objects
              ? localResultForParticipants.objects
              : [];

            const localQueryForLatestMessage = buildQuery<ChannelMessage>(
              ModelType.ChannelMessage,
              undefined,
              { channelId: channel.id },
              undefined,
              { limit: 1, sort: [{ field: 'createdAt', direction: SortDirection.desc }] },
            );
            const localResultForMessages = await db.find<ChannelMessage>(
              localQueryForLatestMessage,
              ModelType.ChannelMessage,
            );

            channelListItem.latestMessage = !localResultForMessages.error && localResultForMessages.object
              ? localResultForMessages.object
              : undefined;

            channelListItems.push(channelListItem);
          }
        }

        return { objects: channelListItems };
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.channel.findMyChannels(
      participantLimit,
      addLatestMessage,
      options,
    );

    if (result.error) {
      logger.error('findMyChannels: error from fsdata', { error: result.error });
      return { error: result.error };
    }

    if (Array.isArray(result.objects) && result.objects.length > 0) {
      for (const channelListItem of result.objects) {
        const channel = { ...channelListItem };
        delete (channel as unknown as ChannelListItem).participants;
        delete (channel as unknown as ChannelListItem).latestMessage;
        await db.upsert<Channel>(channel, ModelType.Channel);

        if (Array.isArray(channelListItem.participants)) {
          for (const participant of channelListItem.participants) {
            await db.upsert<ChannelParticipant>(participant, ModelType.ChannelParticipant);
          }
        }

        if (channelListItem.latestMessage) {
          try {
            await db.upsert<ChannelMessage>(channelListItem.latestMessage, ModelType.ChannelMessage);
          } catch (error) {
            logger.error('findMyChannels: error inserting latest message', {
              error: (error as Error).message,
              channelId: channel.id,
              messageId: channelListItem.latestMessage.id,
            });
          }
        }
      }
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findMyChannels;
