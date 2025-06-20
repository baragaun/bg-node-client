import db from '../../db/db.js';
import {
  CachePolicy,
  ChannelInvitationDirection,
  ModelType,
} from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findChannelInvitationsForUser = async (
  userId: string,
  onlyUnseen: boolean,
  onlyPending: boolean,
  direction: ChannelInvitationDirection,
  options: FindObjectsOptions,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<ChannelInvitation>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('findChannelInvitations: unavailable');
      return { error: 'unavailable' };
    }

    if (!libData.clientInfoStore().isSignedIn) {
      logger.error('findChannelInvitations: unauthorized');
      return { error: 'unauthorized' };
    }

    const allowNetwork = libData.allowNetwork() && queryOptions.cachePolicy !== CachePolicy.cache;

    //------------------------------------------------------------------------------------------------
    // Local DB
    if (queryOptions.cachePolicy === CachePolicy.cacheFirst || !allowNetwork) {
      // todo: proper filtering
      const localResult = await db.findAll<ChannelInvitation>(
        ModelType.ChannelInvitation,
      );
      let list: ChannelInvitation[] = localResult.objects;

      if (options.skip > 0 && options.limit > 0) {
        list = list.slice(options.skip, options.skip + options.limit);
      }

      if ((!localResult.error && list) || !allowNetwork) {
        return {
          objects: list.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          ),
        };
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.channelInvitation.findChannelInvitationsForUser(
      userId,
      onlyUnseen,
      onlyPending,
      direction,
      options,
    );

    if (Array.isArray(result.objects) && result.objects.length > 0) {
      for (const invitation of result.objects) {
        await db.upsert<ChannelInvitation>(invitation, ModelType.ChannelInvitation);
      }
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default findChannelInvitationsForUser;
