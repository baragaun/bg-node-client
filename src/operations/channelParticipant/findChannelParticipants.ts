import db from '../../db/db.js';
import { CachePolicy, ModelType } from '../../enums.js';
import { defaultQueryOptions } from '../../helpers/defaults.js';
import libData from '../../helpers/libData.js';
import { ChannelParticipant } from '../../models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from '../../models/ChannelParticipantListFilter.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';

const findChannelParticipants = async (
  filter: ChannelParticipantListFilter,
  match: Partial<ChannelParticipant>,
  skip: number,
  limit: number,
  queryOptions: QueryOptions = defaultQueryOptions,
): Promise<QueryResult<ChannelParticipant>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  if (
    queryOptions.cachePolicy === CachePolicy.cache ||
    queryOptions.cachePolicy === CachePolicy.cacheFirst
  ) {
    try {
      if (Array.isArray(filter.ids) && filter.ids.length === 1) {
        return db.findById<ChannelParticipant>(
          filter.ids[0],
          ModelType.ChannelParticipant,
        );
      }

      const { objects: participants } = await db.findAll<ChannelParticipant>(
        ModelType.ChannelParticipant,
      );
      let list: ChannelParticipant[] = participants;

      if (filter.channelId || match.channelId) {
        list = participants.filter(
          (m) => m.channelId === filter.channelId || match.channelId,
        );
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

export default findChannelParticipants;
