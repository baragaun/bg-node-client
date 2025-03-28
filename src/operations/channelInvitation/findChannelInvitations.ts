import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import { ChannelInvitation } from '../../models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from '../../models/ChannelInvitationListFilter.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findChannelInvitations = async (
  filter: ChannelInvitationListFilter,
  match: Partial<ChannelInvitation>,
  skip: number,
  limit: number,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<ChannelInvitation>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

  if (
    queryOptions.cachePolicy === CachePolicy.cache ||
    queryOptions.cachePolicy === CachePolicy.cacheFirst
  ) {
    try {
      if (Array.isArray(filter.ids) && filter.ids.length === 1) {
        return db.findById<ChannelInvitation>(
          filter.ids[0],
          ModelType.ChannelInvitation,
        );
      }

      const { objects: messages } = await db.findAll<ChannelInvitation>(
        ModelType.ChannelInvitation,
      );
      let list: ChannelInvitation[] = messages;

      if (!match.channelId) {
        list = messages.filter((m) => m.channelId === match.channelId);
      }

      if (skip > 0 && limit > 0) {
        list = list.slice(skip, skip + limit);
      }

      return {
        objects: list.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      };
    } catch (error) {
      return { error: (error as Error).message };
    }
  }

  return { objects: null };
};

export default findChannelInvitations;
