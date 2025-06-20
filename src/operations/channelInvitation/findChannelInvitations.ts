import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import fsdata from '../../fsdata/fsdata.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import logger from '../../helpers/logger.js';
import buildQuery from '../../helpers/objectQuery/buildQuery.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../../models/ChannelInvitationListFilter.js';
import { FindObjectsOptions } from '../../types/FindObjectsOptions.js';
import { MangoQueryTypes } from '../../types/mangoQuery.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findChannelInvitationsForUser = async (
  filter: ChannelInvitationListFilter,
  match: Partial<ChannelInvitation>,
  selector: MangoQueryTypes<ChannelInvitation> | null | undefined,
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
      if (filter && Array.isArray(filter.ids) && filter.ids.length === 1) {
        return db.findById<ChannelInvitation>(filter.ids[0], ModelType.ChannelInvitation);
      }


      const localQuery = buildQuery<ChannelInvitation, ChannelInvitationListFilter>(
        ModelType.Channel,
        filter,
        match,
        selector,
        options,
      );

      const localResult = await db.find<ChannelInvitation>(localQuery, ModelType.ChannelInvitation);

      if ((!localResult.error && localResult.objects) || !allowNetwork) {
        return localResult;
      }
    }

    //------------------------------------------------------------------------------------------------
    // Network
    if (!allowNetwork) {
      return { error: 'offline' };
    }

    const result = await fsdata.channelInvitation.findChannelInvitations(
      filter,
      match,
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
